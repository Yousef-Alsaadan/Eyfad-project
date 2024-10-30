import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../Title";

function HealthState() {
//   const navigate = useNavigate();
  const [reports, setReports] = useState(null);
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/state/user/${userData.id}`
        );

        setReports(response.data);
      } catch (err) {}
    };
    fetchData();
    
      
  }, []);
 
  return (
    <div>
      <div className="container mx-auto  py-10  bg-transparent px-4  ">
      <div className="hidden md:block">
      <div className="mb-4 md:mb-0 text-start">
          <h1 className="font-bold md:text-3xl text-xl leading-10 md:max-w-full max-w-64">متابعة تحاليلك</h1>
        </div>
</div>
<div className=" block md:hidden">
      <Title title="متابعة تحاليلك" linkPath="/user"/>
      </div>
        <div className="grid grid-cols-1 gap-2 mt-5 ">
        
          {!Array.isArray(reports)||reports.length<2?"لا شيء لعرضه" 
              
            :reports[0].analyses.map((el) =>( 
               
                reports[1].analyses.map((elem) => ( 
                 el.analysisName===elem.analysisName?elem.result<=elem.referenceRange.min?(
                  <div
                  className="cursor-pointer flex flex-col lg:flex-row gap-5 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="border-r-2 border-gray-300 px-0"></div>
                    <div className="  flex-1">
                        <p className="font-bold ">{el.analysisName}</p>
                 <p >{el.result>elem.result&&el.result<=elem.referenceRange.max?"حالتك كانت افضل سابقاًانتبه لصحتك":el.result<elem.result&&elem.result<=elem.referenceRange.max?"حالتك تحسنت عن السابق ولكن لازلت في النطاق الغير طبيعي":"لم تظهر اي تحسن"}</p> </div></div>):elem.result>=elem.referenceRange.max?(  <div
                  className="cursor-pointer flex flex-col lg:flex-row gap-5 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 uppercase"
                >
                  <div className="border-r-2 border-gray-300 px-0"></div>
                    <div className="  flex-1">
                    <div className="flex w-full items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 uppercase">{el.analysisName}</h3></div>
                    
                    <p >{el.result>elem.result&&elem.result>=elem.referenceRange.min?"حالتك تحسنت قليلاً ولكن لازلت في النطاق الغير طبيعي":el.result<elem.result&&el.result>=elem.referenceRange.min?"حالتك كانت افضل سابقاً انتبه لصحتك":"لم تظهر اي تحسن"}</p>
                 </div></div> ):(
                   <div
                   className="cursor-pointer flex flex-col lg:flex-row gap-5 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                 >
                   <div className="border-r-2 border-gray-300 px-0"></div>
                  <div className="  flex-1">
                  <div className="flex w-full items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 uppercase">{el.analysisName}</h3></div>
                 <p>{"حالتك اصبحت طبيعية"}</p>
                  </div></div>
                  ):"" 
            ))
            
)) }
<div>لا مزيد من التحاليل لعرضها</div>
        </div>
      </div>
    </div>
  );
}

export default HealthState;
