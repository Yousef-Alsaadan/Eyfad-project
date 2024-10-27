import React, { useEffect, useState } from "react";
import Card from "./Card";
import Title from "../Title";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import emptyProfileIcon from "../../Images/emptyProfileIcon.png";
import { Link } from "react-router-dom";

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
          {reports.length == 0 ? (
            <div className="flex flex-col w-full items-center justify-center col-span-2">
              <img src={emptyProfileIcon} className="h-[330px] object-cover" />
              <h1 className="text-3xl text-gray-400 text-center">
                اكتشف نتائج تقريرك بسرعة مع الذكاء الاصطناعي
              </h1>
              <Link
                to="/report"
                className={`border border-blue-600 font-bold mt-4 bg-transparent text-blue-600 py-2 px-4 rounded-lg hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-sm hover:shadow-md active:shadow-lg transform active:scale-95`}
              >
                تحليل
              </Link>
            </div>
          ) : (
            ""
          )}
          {reports != []
            ? reports.map((el) => (
                <Card
                  onClick={() => handleClick(el._id)}
                  date={el.testDate}
                  testName={el.testName}
                  fileName={`${el.testName} test.pdf`}
                  report={el}
                />
              ))
            : 
           ""
            }
        </div>
      </div>
    </div>
  );
}

export default ResultHistory;
