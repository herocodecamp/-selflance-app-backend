const express = require("express");
const {GetAgreementController, PostAgreementController } = require("../controllers/agreement.controller");
const Router = express.Router();

Router.post('/:id', PostAgreementController);
Router.get('/', GetAgreementController)

module.exports = Router;
