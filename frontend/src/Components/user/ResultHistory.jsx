import React, { useEffect, useState } from "react";
import Card from "./Card";
import Title from "../Title";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function ResultHistory() {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/${userData.id}`
        );

        setReports(response.data.reports);
      } catch (err) {}
    };
    fetchData();
  }, []);
  const handleClick = (id) => {
    navigate(`/reports/${id}`);
  };
  return (
    <div>
      <div className="container mx-auto px-4 py-10 min-h-screen bg-transparent">
        <Title title="تاريخ تحاليلك" linkPath="/user" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
          {console.log(reports)}
          {reports != []
            ? reports.map((el) => (
                <Card
                  onClick={() => handleClick(el._id)}
                  date={el.testDate}
                  testName={el.testName}
                  fileName={`${el.testName} test.pdf`}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default ResultHistory;
