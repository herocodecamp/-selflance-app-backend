const express = require('express');
const { createExample, registerUser, verifyOTP,readAllUsers, loginUser } = require('../controllers/user.controller');
const userRoutes = express.Router();


// example
userRoutes.get('/',readAllUsers)
userRoutes.post('/signup',registerUser)
userRoutes.post('/verifyOTP',verifyOTP)
userRoutes.get('/login', loginUser)






module.exports = userRoutes;