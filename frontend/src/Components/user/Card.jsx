import React from "react";

const Card = ({ date, testName, onClick,fileName }) => {

  return (
   
    <div onClick={onClick}
      dir="ltr"
      className="  flex flex-col lg:flex-row gap-5 bg-white   rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="border-r-2 border-gray-300 text-sm text-gray-500 px-4">
        {date}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{testName}</h3>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
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
            <p>من قبل الذكاء الاصطناعي</p>
          </div>

          <button className="bg-white border-2 border-gray-300 px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6663 1.66699H4.99967C4.55765 1.66699 4.13372 1.84259 3.82116 2.15515C3.5086 2.46771 3.33301 2.89163 3.33301 3.33366V16.667C3.33301 17.109 3.5086 17.5329 3.82116 17.8455C4.13372 18.1581 4.55765 18.3337 4.99967 18.3337H14.9997C15.4417 18.3337 15.8656 18.1581 16.1782 17.8455C16.4907 17.5329 16.6663 17.109 16.6663 16.667V6.66699M11.6663 1.66699L16.6663 6.66699M11.6663 1.66699V6.66699H16.6663M13.333 10.8337H6.66634M13.333 14.167H6.66634M8.33301 7.50033H6.66634"
                  stroke="#6172F3"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>{fileName}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
