const express = require('express');
const { createExample, registerUser, verifyOTP,readAllUsers } = require('../controllers/user.controller');
const userRoutes = express.Router();


// example
userRoutes.get('/',readAllUsers)
userRoutes.post('/signup',registerUser)
userRoutes.post('/verifyOTP',verifyOTP)






module.exports = userRoutes;