const express = require("express");
const User = require("../models/userSchema.js");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const path = require("path");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const MedicalTest = require("../models/medicalTest"); 
require("dotenv").config();

function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json({ message: "Access Denied" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });

    req.user = user;

    next();
  });
}

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

const processWithGPT = async (pdfText) => {
  const prompt = `extract only the analyses where the result is outside the normal reference range.
    Provide an accurate diagnosis, Use precise medical terminology, and provide the results in valid JSON format.
    All descriptions should be provided in Arabic.

Format:

{
  "testName": "",
  "testDate": "",
  "analyses": [
    {
      "analysisName": "",  
      "result": 0,         
      "unit": "",          
      "isNormal": false,  
      "referenceRange": {
        "min": 0,          
        "max": 0           
      },
      "symptoms": {
        "high": "",        
        "low": ""          
      },
      "management": {
        "high": "",        
        "low": ""          
      },
      "recommendations": "",
      "description":""  
    }
  ]
}

Analyze the following medical text and include only analyses where the result is outside the reference range in the json: ${pdfText}`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content:
              "You are a professional medical assistant providing precise and accurate analyses for medical test results. Respond in clear, medically accurate Arabic, with special attention to identifying any results that are outside the normal reference range. Use structured JSON format as specified by the user, and ensure terminology aligns with standard medical references and practices.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error with GPT API request:", error.message);
    throw error;
  }
};

const fs = require("fs");

router.post("/", upload.single("pdf"), authenticateToken, async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  const filePath = path.join(__dirname, "../uploads", req.file.filename);

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // convert PDF to text
    const dataBuffer = await pdfParse(filePath);
    const pdfText = dataBuffer.text;


    const gptResponse = await processWithGPT(pdfText);
    const extractedData = JSON.parse(gptResponse);

    extractedData.user = user.id;


    const newMedicalTest = new MedicalTest(extractedData);
    await newMedicalTest.save();
    user.reports.push(newMedicalTest._id);
    await user.save();
    // console.log('Extracted Data:', extractedData,newMedicalTest._id,user.reports);

    res.status(200).json({
      message:
        "File uploaded, text extracted, and data processed successfully!",
      extractedData: extractedData,
    });
    fs.unlinkSync(filePath);
  } catch (error) {
    console.error("Error processing PDF or GPT request:", error);
    res.status(500).json({ message: "Error processing PDF or GPT request." });

    // Attempt to delete the file even if there was an error
    try {
      fs.unlinkSync(filePath);
      // console.log("File deleted successfully, even after processing error.");
    } catch (deleteError) {
      console.error("Error deleting file:", deleteError);
    }
  }
});

router.get("/reports/:id", async (req, res) => {
  try {
    const test = await MedicalTest.findById(req.params.id);
    // console.log(req.params.id);
    if (!test) {
      return res.status(404).json({ message: "test not found" });
    }

    res.status(200).json(test);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Error retrieving test", error });
  }
});

module.exports = router;
