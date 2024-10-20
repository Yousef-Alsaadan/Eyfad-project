const express = require('express');
const cors = require('cors'); 
const uploadRoute = require('./routes/uploadRoute'); // Import the upload route
const mongoose = require("mongoose");
const dotenv = require('dotenv');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const routerUser = require("./routes/userRouter");

const app = express();
const port = 5000;
dotenv.config();

// Enable CORS for all routes
app.use(cors());
app.use(express.json())
app.use('/', routerUser)
app.use('/upload', uploadRoute);
main().catch(err => console.log(err));
async function main() { 
    await mongoose.connect(process.env.MONGO_URL);
  console.log("----------------////////////")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
