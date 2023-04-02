const mongoose = require("mongoose");
const { Schema } = mongoose;

const AgreementSchema = new Schema(
  {
    // _id: default object id
    userId: String,
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "title field is required"],
      minlength: 3,
      maxlength: 150,
      default: "",
    },
    description: {
      type: String,
      minlength: 5,
      maxlength: 5000,
      default: "",
    },
    price: {
      type: Number,
      required: [true, "enter the price"],
      min: 1,
    },

    revision: Number,
    delivery_time: Number,
    extra_revision: Number,

    isAgree: {
      type: Boolean,
      required: [true, "turn on the agree button"],
      default: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Agreement", AgreementSchema);
