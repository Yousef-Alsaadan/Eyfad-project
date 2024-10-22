import React from "react";
import Card from "./Card";
import Title from "../Title";

function ResultHistory() {
  return (
    <div dir="ltr">
           <Title title= "اكتشف نتائج تقريرك بسرعة مع الذكاء الاصطناعي"   ></Title>

    <div className="grid grid-cols-1 md:grid-cols-2 "> 
      <Card 
        date="2024-10-22" 
        testName="AI Test" 
        descreptions="This is a test description for AI-generated content." 
        fileName="test-file.pdf" 
      />
      <Card 
        date="2024-10-22" 
        testName="AI Test" 
        descreptions="This is a test description for AI-generated content." 
        fileName="test-file.pdf" 
      />
      <Card 
        date="2024-10-22" 
        testName="AI Test" 
        descreptions="This is a test description for AI-generated content." 
        fileName="test-file.pdf" 
      />
    </div>
    </div>
  );
}

export default ResultHistory;
