const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;



const projectbudgetSchema = new Schema({
    budgetType: String,
    budgetRate: Number
});

const hourlybudgetSchema = new Schema({
    budgetType: String,
    hourlyFrom: Number,
    hourlyTo: Number,
});

const docSchema = new Schema({
    url: String,
  });

const sellerResponseSchema = new Schema({
    sellerDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetail'
    },
    bidType: String,
    bidPrice: String,
    bidDuration: String,
    startTime: String,
    startDate: String,
    coverLetter: String,
    files:[docSchema]
})



var JobPostSchema = new Schema({
    
    // buyer_id:,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userDetail:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetail'
    },
    title: String,
    category: String,
    duration: String,
    experience: String,
    language: String,
    paymentMethod: String,
    description: String,
    jobFiles:[docSchema],
    projectBudget:[projectbudgetSchema],
    hourlyBudget:[hourlybudgetSchema],
    terms: Boolean,
    sellerResponses:[sellerResponseSchema]

},
{
    timestamps: true
})


var JobPost = mongoose.model("JobPost", JobPostSchema)

module.exports = JobPost;