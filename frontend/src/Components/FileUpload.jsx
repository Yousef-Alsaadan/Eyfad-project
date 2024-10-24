import { useState } from "react";
import axios from "axios";

const FileUpload = ({ token,onUploadComplete }) => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [cancelTokenSource, setCancelTokenSource] = useState(null); // For canceling upload

  const handleCancelUpload = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel("File upload canceled.");
      setIsUploading(false); // Stop the upload
      setUploadProgress(0);   // Reset progress bar
    }
  };
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
      alert("File size exceeds 10 MB");
      return;
    }
    setFile(selectedFile);
    setUploadProgress(0); // Reset progress when a new file is selected
  };
  
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!file) return;

  const formData = new FormData();
  formData.append("pdf", file);

  const source = axios.CancelToken.source();
  setCancelTokenSource(source);
  setIsUploading(true); // Show waiting

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
        cancelToken: source.token,
      }
    );

    // Extract the `extractedData` from the response
    onUploadComplete(response.data.extractedData);
    console.log("File uploaded successfully:", response.data.extractedData);
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
    setIsUploading(false);
    setCancelTokenSource(null);
  }
};


  return (
    <div className="flex flex-col items-center justify-center m-2  ">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-start">
              تحميل الوسائط  
            </label>
            <p className="text-gray-600 text-sm font-thin text-start">
              أضف مستنداتك هنا                

            </p>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-blue-600/25 px-6 py-10">
              <div className="text-center">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-12 w-12 text-gray-300">
<path d="M20.5835 3.16602H21.0153C26.1789 3.16602 28.7607 3.16602 30.5536 4.42925C31.0673 4.79119 31.5234 5.22043 31.908 5.70392C33.2502 7.39141 33.2502 9.82133 33.2502 14.6812V18.7115C33.2502 23.4032 33.2502 25.749 32.5077 27.6226C31.314 30.6346 28.7897 33.0104 25.5894 34.1339C23.5988 34.8327 21.1063 34.8327 16.1214 34.8327C13.2729 34.8327 11.8486 34.8327 10.7111 34.4334C8.88233 33.7914 7.43985 32.4338 6.75777 30.7126C6.3335 29.642 6.3335 28.3015 6.3335 25.6206V18.9993" stroke="#3276E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.2498 18.999C33.2498 21.9139 30.8869 24.2768 27.9721 24.2768C26.9179 24.2768 25.6751 24.0921 24.6502 24.3667C23.7395 24.6107 23.0282 25.322 22.7842 26.2327C22.5096 27.2576 22.6943 28.5004 22.6943 29.5546C22.6943 32.4694 20.3313 34.8324 17.4165 34.8324" stroke="#3276E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4167 9.49935L4.75 9.49935M11.0833 3.16602V15.8327" stroke="#3276E8" stroke-width="2" stroke-linecap="round"/>
</svg>


                <div className="mt-4 flex justify-center items-center text-sm leading-6 text-gray-600">
                  <p className="pl-1">اسحب ملفك أو</p>
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold  focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-900 focus-within:ring-offset-2 hover:text-blue-900"
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
              className={`border border-blue-600  bg-white text-blue-600 py-2 px-4 rounded-lg hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900focus:ring-opacity-50 transition duration-300 ease-in-out shadow-sm hover:shadow-md active:shadow-lg transform active:scale-95 ${
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