import React from "react";

function Collapse({ analysisName, res, unit,  desc, rec,refReng, mngmnt,symptoms}) {
  return (
    <div className="collapse bg-[#F9FAFC] border">
      <input type="checkbox" />
      <div className="collapse-title bg-[#F9FAFC] flex justify-between">
        <span className="font-bold text-2xl">{analysisName}</span>

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
              fill="#000"
            />
          </svg>
        </span>
      </div>
      <div className="collapse-content bg-[#F9FAFC] text-sm font-bold flex flex-col gap-4">
        <p className="">{desc}</p>

        <span className="pt-4 font-bold text-2xl">التحليل</span>

        <p>
          النتيجة:{"  "}
          <span dir="ltr">
            {res} {unit}
          </span>
        </p>
        <p>
                      الحد الطبيعي: {refReng.min} -{" "}
                      {refReng.max}
                    </p>

                    <p className="pt-4">طريقة التعامل عندما يكون:</p>
                    <p>
                      مرتفع عن الطبيعي:{" "}
                      {mngmnt.high || "غير متوفرة"}
                    </p>
                    <p>
                      منخفض عن الطبيعي:{" "}
                      {mngmnt.low || "غير متوفرة"}
                    </p>

                    {/* Symptoms */}
                    <div>
                      <p className="font-bold text-lg">الأعراض المحتملة عند:</p>
                      <p>الارتفاع: {symptoms.high || "غير متوفرة"}</p>
                      <p>الانخفاض: {symptoms.low || "غير متوفرة"}</p>
                    </div>

        <p className="pt-4">{rec || "لا توجد توصيات"}</p>
      </div>
    </div>
  );
}

export default Collapse;
