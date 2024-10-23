import { useState } from "react";
import axios from "axios";

const FileUpload = ({token}) => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [cancelTokenSource, setCancelTokenSource] = useState(null); // For canceling upload
console.log("fileupload"+token)
  const userData = JSON.parse(localStorage.getItem("user"));

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
      // Check for size limit
      alert("File size exceeds 10 MB");
      return;
    }
    setFile(selectedFile);
    setUploadProgress(0); // Reset progress when a new file is selected
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return; // Ensure a file is selected

    const formData = new FormData();
    formData.append("pdf", file);

    const source = axios.CancelToken.source();
    setCancelTokenSource(source); // Store cancel token
    setIsUploading(true); // Set uploading state to true

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            'Authorization':token
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
          cancelToken: source.token, // Attach cancel token
        }
      );
      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Upload canceled");
      } else {
        console.error(
          "Error uploading file:",
          error.response ? error.response.data : error.message
        );
      }
    } finally {
      setIsUploading(false); // Reset uploading state
      setCancelTokenSource(null); // Reset cancel token
    }
  };

  const handleCancelUpload = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel("File upload canceled.");
      setIsUploading(false); // Stop the upload
      setUploadProgress(0); // Reset progress bar
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-start">
              تحميل الوسائط
            </label>
            <p className="text-gray-600 text-sm font-thin text-start">
              أضف مستنداتك هنا
            </p>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg
                  width="36"
                  height="24"
                  viewBox="0 0 36 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-12 w-12 text-gray-300"
                >
                  <path
                    d="M29.025 9.06C28.005 3.885 23.46 0 18 0C13.665 0 9.9 2.46 8.025 6.06C3.51 6.54 0 10.365 0 15C0 19.965 4.035 24 9 24H28.5C32.64 24 36 20.64 36 16.5C36 12.54 32.925 9.33 29.025 9.06ZM28.5 21H9C5.685 21 3 18.315 3 15C3 11.925 5.295 9.36 8.34 9.045L9.945 8.88L10.695 7.455C12.12 4.71 14.91 3 18 3C21.93 3 25.32 5.79 26.085 9.645L26.535 11.895L28.83 12.06C31.17 12.21 33 14.175 33 16.5C33 18.975 30.975 21 28.5 21ZM12 13.5H15.825V18H20.175V13.5H24L18 7.5L12 13.5Z"
                    fill="#6622CE"
                  />
                </svg>

                <div className="mt-4 flex justify-center items-center text-sm leading-6 text-gray-600">
                  <p className="pl-1">اسحب ملفك أو</p>
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>تصفح</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                </div>
                <p className="text-xs leading-5 text-gray-600 font-thin">
                  يُسمح بملفات بحجم 10 ميجابايت كحد أقصى
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm font-thin text-start">
              يدعم فقط ملفات .pdf .png .jpg
            </p>
          </div>

          {/* Show selected file name */}
          {file && (
            <div className="mt-4 text-gray-600 text-sm">
              <strong>File selected:</strong> {file.name}
            </div>
          )}

          {/* Progress bar and percentage */}
          {isUploading && (
            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-500 h-2.5 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {uploadProgress}%
                </span>
              </div>

              {/* Cancel upload button */}
              <button
                type="button"
                onClick={handleCancelUpload}
                className="mt-2 text-red-600 hover:underline text-sm"
              >
                إلغاء التحميل
              </button>
            </div>
          )}

          <div className="w-full text-center">
            <button
              type="submit"
              className={`border border-indigo-600 font-bold bg-white text-indigo-600 py-2 px-4 rounded-lg hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-sm hover:shadow-md active:shadow-lg transform active:scale-95 ${
                isUploading && "cursor-not-allowed"
              }`}
              disabled={isUploading} // Disable button while uploading
            >
              تحميل
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
