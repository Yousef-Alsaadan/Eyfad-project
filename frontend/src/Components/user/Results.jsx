import React from "react";
import Title from "../Title";
import resultSVGr from "../../assets/resultSVGr.svg";

function Results({ data }) {
  if (!data || !data.analyses || data.analyses.length === 0) {
    return <div>No data available.</div>; // Fallback UI
  }
  return (
    <div className="">
      <Title title="نتيجتك" linkPath="/user" />
      <div className="grid place-items-center p-4 mt-8">
        {/* Displaying the test name and date */}
        <div className="overflow-y-scroll text-right no-scrollbar max-h-[650px] h-[650px] lg:w-[830px] md:w-[650px] w-[330px] border border-[#524FE1] rounded-xl p-4 flex justify-between flex-col">
          {data && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-xl font-medium">
                <p>{data.testName}</p>
                <p>{data.testDate}</p>
              </div>

              {/* Iterate through each analysis */}
              {data.analyses.map((analysis, index) => (
                <div key={index} className="collapse bg-[#F9FAFC] border">
                  <input type="checkbox" />
                  <div className="collapse-title bg-[#F9FAFC] flex justify-between">
                    <span className="font-bold text-2xl">
                      {analysis.analysisName}
                    </span>

                    <span
                      className={`bg-[#C5D4E9] rounded-full flex items-center h-fit`}
                    >
                      <svg
                        width="25"
                        height="26"
                        viewBox="0 0 25 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4551 10.4268C18.8483 10.8357 18.8483 11.4986 18.4551 11.9074L14.1012 16.4355C13.2166 17.3555 11.7824 17.3554 10.8978 16.4353L6.54479 11.9074C6.15169 11.4985 6.15174 10.8356 6.54491 10.4268L6.90086 10.0567C7.29403 9.64784 7.93143 9.64789 8.32453 10.0568L12.4996 14.3996L16.6756 10.0566C17.0687 9.64778 17.7061 9.64778 18.0992 10.0566L18.4551 10.4268Z"
                          fill="#000"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="collapse-content bg-[#F9FAFC] text-sm font-bold flex flex-col gap-4">
                    <p>{analysis.description}.</p>

                    <span className="pt-4 font-bold text-2xl">التحليل</span>

                    <p>
                      النتيجة:{"  "}
                      <span dir="ltr">
                        {analysis.result} {analysis.unit}
                      </span>
                    </p>
                    <p>
                      الحد الطبيعي: {analysis.referenceRange.min} -{" "}
                      {analysis.referenceRange.max}
                    </p>

                    <p className="pt-4">طريقة التعامل عندما يكون:</p>
                    <p>
                      مرتفع عن الطبيعي:{" "}
                      {analysis.management.high || "غير متوفرة"}.
                    </p>
                    <p>
                      منخفض عن الطبيعي:{" "}
                      {analysis.management.low || "غير متوفرة"}.
                    </p>

                    {/* Symptoms */}
                    <div>
                      <p className="font-bold text-lg">الأعراض المحتملة عند:</p>
                      <p>الارتفاع: {analysis.symptoms.high || "غير متوفرة"}.</p>
                      <p>الانخفاض: {analysis.symptoms.low || "غير متوفرة"}.</p>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <p className="font-bold text-lg">التوصيات:</p>
                      <p>{analysis.recommendations || "لا توجد توصيات"}.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pt-4">
            <p>جميع النتائج المتبيقة في النطاق السليم.</p>
          </div>
        </div>

        <div className="flex w-full gap-[51.8rem] items-center justify-center absolute overflow-y-hidden -z-10 no-scrollbar ">
          <img src={resultSVGr} alt="result graphic" />
          <img
            src={resultSVGr}
            alt="result graphic mirrored"
            className="transform -scale-x-100"
          />
        </div>
      </div>
    </div>
  );
}

export default Results;
