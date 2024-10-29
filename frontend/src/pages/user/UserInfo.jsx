import React, { useEffect } from "react";
import ResultHistory from "../../Components/user/ResultHistory";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import HealthState from "../../Components/user/HealthState";
import bgImage from "../../Images/bgUserPage.png";
import bgTop from "../../Images/bgTop.png";

function UserInfo() {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!userData) {
      navigate("/user/login");
    }
  });
  return (
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className={` bg-no-repeat`}
        style={{ backgroundImage: `url(${bgTop})` }}
      >
        <NavBar />
        <div className="grid md:grid-cols-5">
          {/* First column for the user name */}
          <div className="p-4 border-l md:block hidden">
            <h1 className="text-xl font-bold text-center">
              {userData ? userData.firstName + "  " + userData.secondName : ""}
            </h1>
          </div>

          {/* Second column for ResultHistory */}
          <div className="col-span-4 p-4">
          <HealthState/>
            <ResultHistory />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default UserInfo;
