import React, { useState } from "react";
import Results from "../../Components/user/Results";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import FileUpload from "../../Components/FileUpload";
import Witing from "../Witing";
import Title from "../../Components/Title";
import { useNavigate } from "react-router-dom";

function AddReport() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadData, setUploadData] = useState(null);
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));
  if (!userData) {
    navigate("/user/login");
  }

  const handleUploadComplete = (data) => {
    setUploadData(data); // Set the upload data once the upload is complete
    setIsUploading(false); // Stop showing the waiting screen
  };

  return (
    <div>
      <NavBar />
      <div className="container m-auto w-full text-center xl:h-screen h-[85vh] mt-10 px-4">
        <Title
          title="اكتشف نتائج تقريرك بسرعة مع الذكاء الاصطناعي"
          linkPath="/user"
        />
        <div className="md:mt-20 mt-10">
         
          {/* Show the appropriate component based on the upload state */}
          {!isUploading && !uploadData && (
            <FileUpload token={userData.token} onUploadComplete={handleUploadComplete} />
          )}

          {isUploading && <Witing />}

          {uploadData && <Results data={uploadData} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddReport;
