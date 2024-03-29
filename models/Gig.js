const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

// define subSchema

const tagSchema = ({
  type: String,
  // validate: {
  //   validator: (v, x, z) => {
  //     return !(this.tag.length > 5);
  //   },
  //   message: (props) => `${props.value} exceeds maximum array size (5)!`,
  // },
 
});

const packagesSchema = new Schema({
  packageName: String,
  summary: String,
  price: String,
  prototype: Boolean,
  sourceFile: Boolean,
  logo: Boolean,
  pages: String,
  revisions: String,
  deliveryDuration: String,
});

// const gigCommentsSchema = new Schema({
// //   _id: ObjectId,
//   buyerId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Buyer",
//   },
//   comment: String,
//   date: Date,
//   rating: String,
// });

const gigFAQSchema = new Schema(
  { que: String,
    ans: String, }
  );

const imagesSchema = new Schema({
  url: String,
});

const videosSchema = new Schema({
  url: String,
});


const gigRequirementSchema = new Schema(
  { que: String,
    ans: String, }
  )



const GigSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  userDetail:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserDetail",
  },
  title: String,
  category: String,
  subCategory: String,
  tags: [tagSchema],
  serviceDescription: String,
  packages: [packagesSchema],
  // gigComments: [gigCommentsSchema],
  gigRequirement: [gigRequirementSchema],
  gigFAQ: [gigFAQSchema],
  gigImages: [imagesSchema],
  videos: [videosSchema],
});




const Gig = mongoose.model("Gig", GigSchema);

module.exports = Gig;