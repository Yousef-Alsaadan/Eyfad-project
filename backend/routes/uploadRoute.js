const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const path = require('path');
const axios = require('axios');
require('dotenv').config(); // Load environment variables

const router = express.Router();

// Set up storage for Multer
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});
const upload = multer({ storage });

// Function to send the pdfText to GPT API
const processWithGPT = async (pdfText) => {
  const prompt = `Extract the following data from the provided medical test text. Provide the result in valid JSON format using an object for the analyses. Ensure each field is accurately filled in based on the information provided in the text, and provide the answer in Arabic:

{
  "testName": "",
  "testDate": "",
  "analyses": {
    "analysisName": {
      "result": ,
      "unit": "",
      "isNormal": ,
      "referenceRange": {
        "min": ,
        "max": 
      },
      "symptoms": {
        "high": "",
        "low": ""
      },
      "howToManage": {
        "high": "",
        "low": ""
      }
    }
  }
}
Here is the text: ${pdfText}`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', 
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error with GPT API request:', error.message);
    throw error;
  }
};

// Route to handle file upload and PDF processing
router.post('/', upload.single('pdf'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const filePath = path.join(__dirname, '../uploads', req.file.filename);

  try {
    // Read and convert PDF to text
    const dataBuffer = await pdfParse(filePath);
    const pdfText = dataBuffer.text;

    // Send the extracted PDF text to GPT API
    const gptResponse = await processWithGPT(pdfText);

    console.log('Extracted Data from GPT:', gptResponse);
    res.json({ message: 'File uploaded, text extracted, and data processed successfully!', extractedData: gptResponse });
  } catch (error) {
    console.error('Error processing PDF or GPT request:', error);
    res.status(500).send('Error processing PDF or GPT request.');
  }
});

module.exports = router;
