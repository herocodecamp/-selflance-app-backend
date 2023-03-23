const express = require('express');
const { postGig } = require('../controllers/gig.controller');

const gigRoutes = express.Router();


// example
// gigRoutes.get('/',createExample)
gigRoutes.post('/create',postGig)

gigRoutes.get('/',(req,res)=>{
    res.json({messsage: "Hello World"})
})







module.exports = gigRoutes;