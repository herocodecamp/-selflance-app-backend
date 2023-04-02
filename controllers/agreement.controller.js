const Agreements = require("../models/Agreement");
const Users = require("../models/User");

exports.PostAgreementController = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findById(id);
  console.log("body-data", req.body);
  console.log("_id", user._id.toString());
  try {
    if (user._id.toString() === req.body.userId) {
      const NewAgreement = new Agreements(req.body);
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

exports.GetAgreementController = async (req, res) => {
  try {
    const result = await Agreements.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message, type: error.name });
  }
};
