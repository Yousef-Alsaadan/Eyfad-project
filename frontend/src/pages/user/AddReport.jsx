import React, { useEffect, useState } from "react";
import Results from "../../Components/user/Results";
import NavBar from "../../Components/NavBar";
import FileUpload from "../../Components/FileUpload";
import Witing from "../../Components/Witing";
import { useNavigate } from "react-router-dom";

function AddReport() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadData, setUploadData] = useState(null);
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!userData) {
      navigate("/user/login");
    }
  });

  const handleUploadComplete = (data) => {
    setUploadData(data); // Set the upload data once the upload is complete
    setIsUploading(false); // Stop showing the waiting screen
  };

  return (
    <div className="bg-custom-gradient pb-10 min-h-screen">
      <NavBar />
      <div className="container m-auto w-full h-full text-center mt-10 p-2 px-4">
        <div className="">
          {/* Show the appropriate component based on the upload state */}
          {!isUploading && !uploadData && (
            <FileUpload
              token={userData ? userData.token : ""}
              onUploadComplete={handleUploadComplete}
            />
          )}

          {isUploading && <Witing />}

          {uploadData && <Results data={uploadData} />}
        </div>
      </div>
    </div>
  );
}

export default AddReport;
