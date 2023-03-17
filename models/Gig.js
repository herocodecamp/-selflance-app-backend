const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const GigSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  category: String,
  subCategory: String,
  tag: [tagSchema],
  serviceDescription: String,
  packages: [packagesSchema],
  gigComments: [gigCommentsSchema],
  gigRequirement: [gigRequirementSchema],
  gigFAQ: [gigFAQSchema],
  images: [imagesSchema],
  videos: [videosSchema],
});

module.exports = mongoose.model("Gig", GigSchema);

// define subSchema

const tagSchema = new Schema({
  type: String,
  validate: {
    validator: (v, x, z) => {
      return !(this.tag.length > 5);
    },
    message: (props) => `${props.value} exceeds maximum array size (5)!`,
  },
  required: true,
});

const packagesSchema = new Schema({
//   _id: ObjectId,
  packageName: String,
  price: String,
  prototype: Boolean,
  sourceFile: Boolean,
  logo: Boolean,
  pages: String,
  revisions: String,
  deliveryDuration: String,
});

const gigCommentsSchema = new Schema({
//   _id: ObjectId,
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Buyer",
  },
  comment: String,
  date: Date,
  rating: String,
});

const gigFAQSchema = new Schema({ que: string, ans: string });

const imagesSchema = new Schema({
//   _id: ObjectId,
  url: String,
});

const videosSchema = new Schema({
//   _id: ObjectId,
  url: String,
});


const gigRequirementSchema = new Schema({ que: string, ans: string })