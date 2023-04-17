const express = require("express");
const { SellerCustomOffer, getSellerOfferController } = require("../controllers/sellerCustomOfferController");

const Router = express.Router();

Router.post('/:id', SellerCustomOffer);
Router.get('/:id', getSellerOfferController)

module.exports = Router;
