const User = require('../models/userSchema.js');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
// function authenticateToken(req, res, next) {

//     const token = req.headers['authorization'];
    
//     if (!token) return res.status(401).json({ message: 'Access Denied' });
    
//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    
//     if (err) return res.status(403).json({ message: 'Invalid Token' });
    
//     req.user = user; // إضافة بيانات المستخدم إلى الطلب
    
//     next();
    
//     });
    
//     }
const signupUser = async (req, res) => {
    const { username, email, password } = req.body;
    
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });
    
    await newUser.save();
    
    const token = jwt.sign(
        { id: newUser._id, email: newUser.email }, // User data to include in the token
        process.env.JWT_SECRET, // Secret key
        { expiresIn: '1h' } // Token expiration
    );
    
    res.status(201).json({ message: 'User registered successfully', user: newUser, token });
};

// Middleware to check if the user is logged in
const logIn = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // Find user by email
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' });
        }
        
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { signupUser, logIn };