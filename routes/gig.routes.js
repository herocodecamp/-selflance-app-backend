const express = require('express');
const { postGig } = require('../controllers/gig.controller');

const gigRoutes = express.Router();


// example
// gigRoutes.get('/',createExample)
gigRoutes.get('/create',postGig)







module.exports = gigRoutes;