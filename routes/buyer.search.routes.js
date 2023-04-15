const express = require("express");
const Router = express.Router();
const {getSearchandFilter} = require('../controllers/buyerSearch.controller')

const buyerSearchRouter = express.Router();


buyerSearchRouter.get('/gigs',getSearchandFilter)

module.exports = buyerSearchRouter;