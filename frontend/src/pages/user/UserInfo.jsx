import React, { useEffect } from "react";
import ResultHistory from "../../Components/user/ResultHistory";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

function UserInfo() {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!userData) {
      navigate("/user/login");
    }
  });
  return (
    <div >
      <NavBar />
      <div className="grid grid-cols-5 h-screen">
        {/* First column for the user name */}
        <div className="bg-blue-200 p-4">
          <h1 className="text-xl font-bold">{userData.name}</h1>
        </div>

        {/* Second column for ResultHistory */}
        <div className="col-span-4 bg-white p-4">
          <ResultHistory />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserInfo;
