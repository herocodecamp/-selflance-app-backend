const express = require('express');
const { createExample, registerUser } = require('../controllers/user.controller');
const userRoutes = express.Router();


// example
// userRoutes.get('/',createExample)
userRoutes.post('/signup',registerUser)






module.exports = userRoutes;