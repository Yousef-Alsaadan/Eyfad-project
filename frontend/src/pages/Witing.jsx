import React from "react";
import Title from "../Components/Title";
import witingImage from "../images/witing.png"; // Uncomment this if you want to use the image later
import WitingSVG from "../Components/style/WitingSvg.jsx";

const Witing = () => {
  return (
    <div className="bg-custom-gradient min-h-screen ">
      <div className="container mx-auto text-center p-4 min-h-screen flex flex-col justify-center">
        <Title title="نقوم الآن بتحليل نتيجتك ..." />
        <div className="flex justify-center items-center mt-4 flex-grow">
          <div className="transition-transform duration-300 hover:scale-105 move-up">
            <WitingSVG className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 m-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Witing;
