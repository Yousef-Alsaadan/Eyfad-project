import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import FileUpload from "../Components/FileUpload";

function Home() {
  return (
    <div>
      <FileUpload></FileUpload>
      <NavBar />
      <Footer />
    </div>
  );
}

export default Home;
