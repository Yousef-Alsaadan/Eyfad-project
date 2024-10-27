const User = require("../models/userSchema.js");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
dotenv.config();

const signupUser = [
  body("firstName").isLength({ min: 3 }),
  body("firstName").isLength({ min: 3 }),
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, secondName, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "البريد الالكتروني مستخدم" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstName,
      secondName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email }, // User data to include in the token
      process.env.JWT_SECRET, // Secret key
      { expiresIn: "1h" } // Token expiration
    );

    res
      .status(201)
      .json({ message: "تم تسجيل المستخدم بنجاح.", user: newUser, token });
  },
];

// Middleware to check if the user is logged in
const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "البريد الالكتروني او كلمة المرور خاطئة" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "البريد الالكتروني او كلمة المرور خاطئة" });
    }
    const token = jwt.sign(
      { id: user._id, email: user.email }, // User data to include in the token
      process.env.JWT_SECRET, // Secret key
      { expiresIn: "5h" } // Token expiration
    );
    res.status(200).json({ message: "تم تسجيل الدخول بنجاح.", user, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطأ في الخادم, حاول في وقت لاحق.", error });
  }
};


module.exports = { signupUser, logIn };
