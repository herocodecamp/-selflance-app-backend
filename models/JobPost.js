const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;



const budgetSchema = new Schema({
    budgetType: String,
    budgetrate: Number
})

const docSchema = new Schema({
    url: String,
  });

var JobPostSchema = new Schema({
    
    // buyer_id:,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    category: String,
    duration: String,
    experience: String,
    language: String,
    // payment_method: String,
    description: String,
    jobFiles:[docSchema],
    // budget:[budgetSchema],
    // isSecurity_payment: Boolean,
    terms: Boolean,
    hourlyFrom: Number,
    hourlyTo: Number,
    // jobStatus: String,

},
{
    timestamps: true
})


var JobPost = mongoose.model("JobPost", JobPostSchema)

module.exports = JobPost;