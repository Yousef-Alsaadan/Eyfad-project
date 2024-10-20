const User = require('../models/userSchema.js');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

export const signupUser = async (req, res) => {

    const { username, email, password } = req.body;
    
    // تحقق من أن البريد الإلكتروني غير مسجل مسبقًا
    
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
    
    return res.status(400).json({ message: 'Email already in use' });
    
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // إنشاء مستخدم جديد
    
    const newUser = new User({
    
    username,
    
    email,
    
    password: hashedPassword
    
    });
    
    await newUser.save();
    const token = jwt.sign(
    
      { id: newUser._id, email: newUser.email }, // بيانات المستخدم التي سيتم تضمينها في التوكن
      
      process.env.JWT_SECRET, // المفتاح السري
      
      { expiresIn: '1h' } // مدة صلاحية التوكن
      
      );
      res.status(201).json({ message: 'User registered successfully', user: newUser, token: token });
    };
    // Middleware للتحقق من أن المستخدم مسجل الدخول
    
    export const logIn = async (req, res) => {

        const { email, password } = req.body;
        
        try {
        
        // العثور على المستخدم بالبريد الإلكتروني
        
        const user = await User.findOne({ email });
        
        if (!user) {
        
        return res.status(400).json({ message: 'User not found' });
        
        }
        
        // تحقق من كلمة المرور
        
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
        
        return res.status(400).json({ message: 'Incorrect password' });
        
        }
        
        res.status(200).json({ message: 'Login successful', user });
        
        } catch (error) {
        
        res.status(500).json({ message: 'Server error', error });
        
        }
        
        };