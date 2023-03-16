const express = require('express');
const { createExample, registerUser, verifyOTP } = require('../controllers/user.controller');
const userRoutes = express.Router();


// example
// userRoutes.get('/',createExample)
userRoutes.post('/signup',registerUser)
userRoutes.post('/verifyOTP',verifyOTP)






module.exports = userRoutes;