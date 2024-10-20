import React from 'react';
import Title from '../Components/Title';
import witingImage from '../images/witing.png';

const Witing = () => {
  return (
    <div className="container mx-auto w-full text-center ">
      <Title title="... نقوم الآن بتحليل نتائجك " />
      <div className="flex justify-center mt-4">
        <img 
          src={witingImage} 
          alt="تحليل النتائج باستخدام الذكاء الاصطناعي" 
          className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/4 object-cover transition-transform duration-300 hover:scale-105 move-up`} 
        />
      </div>
    </div>
  );
};

export default Witing;
