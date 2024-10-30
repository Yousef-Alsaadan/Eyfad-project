const express = require('express');
const cors = require('cors'); 
const uploadRoute = require('./routes/uploadRoute'); // Import the upload route
const mongoose = require("mongoose");
const User = require("./models/userSchema");
const dotenv = require('dotenv');
const MedicalTest = require('./models/medicalTest');
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
app.get("/reports",(req,res)=>{
  MedicalTest.find().then(result=>{
   res.send(result)
  })
 })
 app.get('/state/user/:id', async (req, res) => {
  try {
  
  let user1 = await User.findById(req.params.id).populate('reports'); // استخدم populate هنا

  if (!user1) {
  
  return res.status(404).json({ message: 'User not found' });
  
  }
  if(user1.reports.length>1){
  user1=[user1.reports[user1.reports.length-2],user1.reports[user1.reports.length-1]];
  return res.status(200).json(user1); 
}
res.status(200).json(user1.reports);
  } catch (error) {
  
 
  
  res.status(500).json({ message: 'Error retrieving user', error });
  
  }
  
  })
app.get('/user/:id', async (req, res) => {
  try {
  
  const user = await User.findById(req.params.id).populate('reports'); // استخدم populate هنا
 
  if (!user) {
  
  return res.status(404).json({ message: 'User not found' });
  
  }
  
  res.status(200).json(user); 
  } catch (error) {
  
 
  
  res.status(500).json({ message: 'Error retrieving user', error });
  
  }
  
  })
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
