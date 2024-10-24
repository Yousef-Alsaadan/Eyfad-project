import React, { useEffect, useState } from "react";
import Title from "../Title";
import resultSVGr from "../../assets/resultSVGr.svg";
import Collapse from "../user/Collapse"
import { useParams } from 'react-router-dom';
import axios from "axios";
function ResultsHistory() {
  const { id } = useParams();
  const [tests, setTests] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response =await axios.get(`http://localhost:5000/upload/reports/${id}`)
   
         setTests(response.data)
         
    } catch (err) {
     }}
     fetchData();
    },[])
  return (
    <div className="grid place-items-center p-4">
      <div className="container m-auto px-4 pb-4">
        <Title title="نتيجتك" linkPath="/report"></Title>
      </div>
      <div className="overflow-y-scroll no-scrollbar max-h-[650px] h-[650px] lg:w-[830px] md:w-[730px] w-[330px] border border-[#524FE1] rounded-xl p-4 flex justify-between flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between text-xl font-medium">
            <p>{tests.testName}</p>
            <p>{tests.testDate}</p>
          </div>
         {tests.analyses!=undefined?(tests.analyses.map(el=><Collapse 
analysisName={el.analysisName}
res={el.result}
unit={el.unit}
isNom={el.isNormal}
desc={el.description}
rec={el.recommendations}
/>
       

   )):""
         }
       
        </div>

        <div className="pt-4">
          {/* <p>جميع النتائج المتبيقة في النطاق السليم</p> */}
        </div>
      </div>

      <div className="flex w-full gap-[51.8rem] items-center justify-center absolute overflow-y-hidden -z-10 no-scrollbar ">
        <img src={resultSVGr} />
        <img src={resultSVGr} className="transform -scale-x-100" />
      </div>
    </div>
  );
}

export default ResultsHistory;
