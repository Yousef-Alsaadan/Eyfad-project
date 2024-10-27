import React from "react";
import Title from "../Components/Title";
import WitingSVG from "../Components/style/WitingSvg.jsx";

const Witing = () => {
  return (
    <div className="h-full">
      <Title title="نقوم الآن بتحليل نتيجتك ..." hidden="hidden" />
      <div className="flex justify-center items-center mt-8 flex-grow h-full">
        <div className="transition-transform duration-300 hover:scale-105 move-up">
          <WitingSVG className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 m-5" />
        </div>
      </div>
    </div>
  );
};

export default Witing;
