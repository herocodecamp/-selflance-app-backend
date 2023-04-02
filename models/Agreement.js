const mongoose = require("mongoose");
const { Schema } = mongoose;

const AgreementSchema = new Schema(
  {
    // _id: default object id
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
      required: true,
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
      required: true,
      min: 1,
      max: 10,
    },

    revision: Number,
    delivery_time: Number,
    extra_revision: Number,

    terms_and_policy: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Agreement", AgreementSchema);
