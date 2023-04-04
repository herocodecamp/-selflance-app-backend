const express = require("express");
const { SellerCustomOffer } = require("../controllers/sellerCustomOfferController");

const Router = express.Router();

Router.post('/:id', SellerCustomOffer);

module.exports = Router;
