const express = require("express");
const { signupUser, logIn} = require('../controllers/userController'); // Adjust the path as necessary

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', logIn);

module.exports = router;