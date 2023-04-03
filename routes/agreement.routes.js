const express = require("express");
const { PostSellerAgreementController, GetSellerAgreementController } = require("../controllers/agreement.controller");
const Router = express.Router();

Router.post('/:id', PostSellerAgreementController);
Router.get('/', GetSellerAgreementController)

module.exports = Router;
