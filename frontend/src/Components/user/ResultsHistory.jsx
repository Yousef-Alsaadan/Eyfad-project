import React, { useEffect, useState } from "react";
import Title from "../Title";
import resultSVGr from "../../assets/resultSVGr.svg";
import Collapse from "../user/Collapse";
import { useParams } from "react-router-dom";
import axios from "axios";

import bgImage from "../../Images/bgUserPage.png";

function ResultsHistory() {
  const { id } = useParams();
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.BACK_END_URL}/upload/reports/${id}`
        );

        setTests(response.data);
      } catch (err) {}
    };
    fetchData();
  }, []);
  return (
    <div
      className="p-4 bg-no-repeat bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container m-auto px-4 pb-4">
        <Title title="نتيجتك" linkPath={`/user/history`}></Title>
      </div>
      <div className="grid place-items-center xl:p-0 p-8">
        <div className="overflow-y-scroll no-scrollbar max-h-[620px] h-[620px] lg:w-[830px] md:w-[650px] sm:w-[330px] border border-[#524FE1] rounded-xl p-4 flex justify-between flex-col">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-xl font-medium">
              <p>{tests.testName}</p>
              <p>{tests.testDate}</p>
            </div>
            {tests.analyses != undefined
              ? tests.analyses.map((el, index) => (
                  <Collapse
                    key={index}
                    analysisName={el.analysisName}
                    res={el.result}
                    unit={el.unit}
                    mngmnt={el.management}
                    desc={el.description}
                    rec={el.recommendations}
                    refReng={el.referenceRange}
                    symptoms={el.symptoms}
                  />
                ))
              : ""}
          </div>

          <div className="pt-4">
            <p className="text-green-800">
              جميع النتائج المتبيقة في النطاق السليم.
            </p>
          </div>
        </div>

        <div className="lg:flex hidden w-full gap-[51.8rem] items-center justify-center absolute overflow-y-hidden -z-10 no-scrollbar ">
          <img src={resultSVGr} />
          <img src={resultSVGr} className="transform -scale-x-100" />
        </div>
      </div>
    </div>
  );
}

export default ResultsHistory;
