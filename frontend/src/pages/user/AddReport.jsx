import React from "react";
import Results from "../../Components/user/Results";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import FileUpload from "../../Components/FileUpload";
import Title from "../../Components/Title";

function AddReport() {
  return (
    <div  >
     <div className="container m-auto w-full text-center mt-10">
     <Title title= "اكتشف نتائج تقريرك بسرعة مع الذكاء الاصطناعي"   ></Title>
     <div className="md:mt-20">
     <FileUpload/>
     </div>
   
     </div>
     

      
    </div>
  );
}

export default AddReport;
