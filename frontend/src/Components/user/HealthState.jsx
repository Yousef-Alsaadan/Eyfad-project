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
      <div className="container mx-auto px-4 py-10  bg-transparent">
      <Title title="متابعة تحاليلك" hidden={"hidden"}/>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5 px-11">
        
          {!Array.isArray(reports)||reports.length === 0?"لا شيء لعرضه" 
              
            :reports[0].analyses.map((el) =>( 
               
                reports[1].analyses.map((elem) => ( 
                 el.analysisName===elem.analysisName?elem.result<=elem.referenceRange.min?(
                    <div>
                        <p>{el.analysisName}</p>
                 <p >{el.result>elem.result&&el.result<=elem.referenceRange.max?"حالتك كانت افضل سابقاًانتبه لصحتك":el.result<elem.result&&elem.result<=elem.referenceRange.max?"حالتك تحسنت عن السابق ولكن لازلت في النطاق الغير طبيعي":"لم تظهر اي تحسن"}</p> </div>):elem.result>=elem.referenceRange.max?(<div>
                    <p>{el.analysisName}</p>
                    <p >{el.result>elem.result&&elem.result>=elem.referenceRange.min?"حالتك تحسنت قليلاً ولكن لازلت في النطاق الغير طبيعي":el.result<elem.result&&el.result>=elem.referenceRange.min?"حالتك كانت افضل سابقاً انتبه لصحتك":"لم تظهر اي تحسن"}</p>
                 </div>):(
                  <div>
                     <p>{el.analysisName}</p>
                 <p>{"حالتك اصبحت طبيعية"}</p>
                  </div>
                  ):"" 
            ))
            
)) }
        </div>
      </div>
    </div>
  );
}

export default HealthState;
