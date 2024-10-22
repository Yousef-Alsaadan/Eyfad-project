import React from "react";
import ReportHistory from "../../Components/user/ReportHistory";
import ResultHistory from "../../Components/user/ResultHistory";
import Info from "../../Components/Info";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

function UserInfo() {
  return (
    <div>
      <NavBar />
      <ResultHistory />
      <Footer />
    </div>
  );
}

export default UserInfo;
