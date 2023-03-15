const express = require('express');
const { createExample } = require('../controllers/users.controller');
const userRoutes = express.Router();


// example
userRoutes.get('/',createExample)






module.exports = userRoutes;