const express = require("express");
const { SellerCustomOffer } = require("../controllers/agreement.controller");
const Router = express.Router();

Router.post('/:id', SellerCustomOffer);

module.exports = Router;
