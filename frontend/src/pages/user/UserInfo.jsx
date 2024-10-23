import React from "react";
import ResultHistory from "../../Components/user/ResultHistory";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

function UserInfo() {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));
  if (!userData) {
    navigate("/user/login");
  }
  return (
    <div>
      <NavBar />
      <ResultHistory />
      <Footer />
    </div>
  );
}

export default UserInfo;
