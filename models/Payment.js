const mongoose = require("mongoose");
const { Schema } = mongoose;

const PaymentSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    //   required: true,
    },
    Payment_method: {
      type: String,
      default: "",
    //   required: true,
    },
    amount: {
      type: Number,
    //   required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("payment", PaymentSchema);
