import React from "react";
import Card from "./Card";
import Title from "../Title";
import NavBar from "../NavBar";

function ResultHistory() {
  return (
    <div >
      <NavBar />
    <div dir="ltr" className="container ">
           <Title title= "تاريخ تحاليلك"   ></Title>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 "> 
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
      
          <Card 
        date="2024-10-22" 
        testName="AI Test" 
        descreptions="This is a test description for AI-generated content." 
        fileName="test-file.pdf" 
      />
    </div>
    </div>
    </div>
  );
}

export default ResultHistory;
