import React from "react";
import Title from "../Title";
import resultSVGr from "../../assets/resultSVGr.svg";

function Results() {
  return (
    <div className="grid place-items-center p-4">
      <div className="container m-auto px-4 pb-4">
        <Title title="نتيجتك" linkPath="/report"></Title>
      </div>
      <div className="overflow-y-scroll no-scrollbar max-h-[650px] h-[650px] lg:w-[830px] md:w-[730px] w-[330px] border border-[#524FE1] rounded-xl p-4 flex justify-between flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between text-xl font-medium">
            <p>اسم التحليل</p>
            <p>00/00/2024</p>
          </div>

          <div className="collapse bg-[#F9FAFC]">
            <input type="checkbox" />
            <div className="collapse-title bg-[#F9FAFC] flex justify-between">
              <span className="font-bold text-2xl">نوع التحليل</span>

              <span className="bg-[#C5D4E9] rounded-full flex items-center h-fit">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4551 10.4268C18.8483 10.8357 18.8483 11.4986 18.4551 11.9074L14.1012 16.4355C13.2166 17.3555 11.7824 17.3554 10.8978 16.4353L6.54479 11.9074C6.15169 11.4985 6.15174 10.8356 6.54491 10.4268L6.90086 10.0567C7.29403 9.64784 7.93143 9.64789 8.32453 10.0568L12.4996 14.3996L16.6756 10.0566C17.0687 9.64778 17.7061 9.64778 18.0992 10.0566L18.4551 10.4268Z"
                    fill="#BBC4CD"
                  />
                </svg>
              </span>
            </div>
            <div className="collapse-content bg-[#F9FAFC] text-sm font-bold flex flex-col gap-4">
              <p className="">شرح التحليل</p>

              <span className="pt-4 font-bold text-2xl">التحليل</span>

              <p>تفاصيل التحليل</p>

              <p className="pt-4">التوصيات</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <p>جميع النتائج المتبيقة في النطاق السليم</p>
        </div>
      </div>

      <div className="flex w-full gap-[51.8rem] items-center justify-center absolute overflow-y-hidden -z-10 no-scrollbar ">
        <img src={resultSVGr} />
        <img src={resultSVGr} className="transform -scale-x-100" />
      </div>
    </div>
  );
}

export default Results;
