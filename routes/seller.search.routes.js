const express = require("express");
const {getJobSearchandFilter} = require('../controllers/sellerSearch.controller')


const sellerSearchRouter = express.Router();


sellerSearchRouter.get('/jobposts',getJobSearchandFilter)

module.exports = sellerSearchRouter;