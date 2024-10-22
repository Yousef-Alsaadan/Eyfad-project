import React from "react";
import { Link } from "react-router-dom";
import titleimage from "../images/title.png";

const Title = ({ title, linkPath }) => {
  return (
    <div className="flex justify-between items-center">
      {/*
       */}
      <div className=" flex flex-row justify-between items-center gap-10 ">
        <div>
          <img
            src={titleimage}
            alt="Title Image"
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        </div>
        <div className="text-center md:text-right mb-4 md:mb-0">
          <h1 className="font-bold md:text-3xl text-2xl leading-10 text-end">
            {title}
          </h1>
        </div>
      </div>

      {/*  */}
      <div>
        <Link
          to={linkPath}
          className="hover:scale-110 transition-transform duration-200 flex items-center"
        >
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-200 hover:fill-purple-500"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.2093 10.6079C23.2091 9.22719 22.0897 8.10803 20.709 8.10819L14.2553 8.10897C11.4939 8.1093 9.25554 10.3482 9.25587 13.1096L20.7096 13.1082C22.0903 13.1081 23.2094 11.9886 23.2093 10.6079ZM10.3371 3.85848C11.1511 2.59523 10.7288 1.01165 9.39388 0.321449C8.05901 -0.368754 6.31706 0.095787 5.50313 1.35903L0.00132606 9.89799C2.67107 11.2784 6.15497 10.3493 7.78284 7.82282L10.3371 3.85848ZM10.3388 18.1104C11.1531 19.3734 10.7311 20.9571 9.39644 21.6476C8.06173 22.3382 6.31967 21.874 5.50544 20.611L0.00158655 12.0734C2.671 10.6923 6.15513 11.6206 7.78359 14.1467L10.3388 18.1104Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Title;
