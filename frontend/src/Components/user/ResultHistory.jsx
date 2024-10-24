import React, { useEffect, useState } from "react";
import Card from "./Card";
import Title from "../Title";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";

function ResultHistory() {
  const navigate = useNavigate();
  const [reports, setReports] = useState([])
  const userData = JSON.parse(localStorage.getItem("user"));
  
  useEffect(() => {
      fetch(`http://localhost:5000/user/${userData.id}`)
      .then(response => response.json())
          // 4. Setting *dogImage* to the image url that we received from the response above
      .then(data => setReports(data.reports))
    },[])
    const handleClick = (id) => {
     
      navigate(`/reports/${id}`);
  };
  return (
    <div>
      <div className="container mx-auto px-4 py-10 min-h-screen">
        <Title title="تاريخ تحاليلك" linkPath="/user" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
     
          {reports!=[]?reports.map(el=>(
          <Card onClick={()=>handleClick(el._id)} 
          
            date={el.testDate}
            testName={el.testName}
            fileName={`${el.testName} test.pdf`}
          />
        )):""}
       
        </div>
      </div>
    </div>
  );
}

export default ResultHistory;
