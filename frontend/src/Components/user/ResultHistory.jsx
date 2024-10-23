import React, { useEffect, useState } from "react";
import Card from "./Card";
import Title from "../Title";
import NavBar from "../NavBar";

function ResultHistory() {
  const [reports, setReports] = useState([])
  const userData = JSON.parse(localStorage.getItem("user"));
  
  useEffect(() => {
      fetch(`http://localhost:5000/user/${userData.id}`)
      .then(response => response.json())
          // 4. Setting *dogImage* to the image url that we received from the response above
      .then(data => setReports(data.reports))
    },[])
    const handleClick = () => {
      navigate(`/card/${userData.id}`);
  };
  return (
    <div>
      <div className="container mx-auto px-4 py-10 min-h-screen">
        <Title title="تاريخ تحاليلك" linkPath="/user" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
       { console.log(reports)}
          {reports!=[]?reports.map(el=>(
          <Card onClick={handleClick} 
            date={el.testDate}
            testName={el.testName}
            descreptions="This is a test description for AI-generated content."
            fileName={`${el.testName} test.pdf`}
          />
        )):""}
       
        </div>
      </div>
    </div>
  );
}

export default ResultHistory;
