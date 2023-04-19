const mongoose = require("mongoose");
const { Schema } = mongoose;

const WithdrawSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    payment_method: {
      type: String,
      default: "",
      required: true,
    },
    withdraw_amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Withdraw", WithdrawSchema);
