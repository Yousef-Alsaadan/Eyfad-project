const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const path = require('path');
const router = express.Router();

// Set up storage for Multer
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});
const upload = multer({ storage });

// Route to handle file upload
router.post('/', upload.single('pdf'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const filePath = path.join(__dirname, '../uploads', req.file.filename);

  try {
    // Read and convert PDF to text
    const dataBuffer = await pdfParse(filePath);
    const pdfText = dataBuffer.text;

    console.log('PDF Text:', pdfText); // The extracted text
    
    res.json({ message: 'File uploaded and text extracted successfully!', text: pdfText });
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    res.status(500).send('Error extracting text from PDF.');
  }
});

module.exports = router;
