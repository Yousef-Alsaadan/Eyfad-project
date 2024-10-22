import React from "react";
import Results from "../../Components/user/Results";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import FileUpload from "../../Components/FileUpload";
import Title from "../../Components/Title";

function AddReport() {
  return (
    <div>
      <NavBar />
      <div className="container m-auto w-full text-center xl:h-screen h-[85vh] mt-10 px-4">
        <Title
          title="اكتشف نتائج تقريرك بسرعة مع الذكاء الاصطناعي"
          linkPath="/user-page"
        ></Title>
        <div className="md:mt-20 mt-10">
          <FileUpload />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddReport;
