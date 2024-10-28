import React from "react";
import PdfDownload from "./PdfDownload";
const Card = ({ date, testName, onClick, fileName, report }) => {
  const childClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex flex-col lg:flex-row gap-5 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="border-r-2 border-gray-300 px-0"></div>
      <div className="flex-1">
        <div className="flex w-full items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{testName}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 8.58336C16.5029 9.68325 16.2459 10.7683 15.75 11.75C15.162 12.9265 14.2581 13.916 13.1395 14.6078C12.021 15.2995 10.7319 15.6662 9.41667 15.6667C8.31678 15.6696 7.23176 15.4126 6.25 14.9167L1.5 16.5L3.08333 11.75C2.58744 10.7683 2.33047 9.68325 2.33333 8.58336C2.33384 7.26815 2.70051 5.97907 3.39227 4.86048C4.08402 3.7419 5.07355 2.838 6.25 2.25002C7.23176 1.75413 8.31678 1.49716 9.41667 1.50002H9.83333C11.5703 1.59585 13.2109 2.32899 14.4409 3.55907C15.671 4.78915 16.4042 6.42973 16.5 8.16669V8.58336Z"
                stroke="#667085"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm">من قبل الذكاء الاصطناعي</p>
          </div>
          <PdfDownload fileName={fileName} rep={report} click={childClick} />
        </div>
      </div>
    </div>
  );
};

export default Card;
