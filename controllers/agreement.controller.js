const SellerAgreement = require("../models/SellerAgreement");
const Users = require("../models/User");

exports.PostSellerAgreementController = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findById(id);

  try {
    if (user._id.toString() === req.body.userId) {
      const NewAgreement = new SellerAgreements(req.body);
      await NewAgreement.save();
      res.status(200).json({ message: " successfully insert an agreement " });
    } else {
      res
        .status(403)
        .json({ message: "authentication failed, you are not a valid user" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, type: error.name });
  }
};

exports.GetSellerAgreementController = async (req, res) => {
  try {
    const result = await SellerAgreements.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message, type: error.name });
  }
};
