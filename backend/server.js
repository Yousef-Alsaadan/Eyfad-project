const express = require('express');
const cors = require('cors'); 
const uploadRoute = require('./routes/uploadRoute'); // Import the upload route

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());


app.use('/upload', uploadRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
