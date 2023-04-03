const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderProcessAgreement = new Schema(
  {
    sellerAgreement: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sellerAgreement",
      required: [true, "seller agreement ref is required"],
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "buyer ref is required"],
    },
    payment_method: {
      type: Array,
      default: [],
      required: [true, "payment method is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("buyerAgreement", OrderProcessAgreement);
