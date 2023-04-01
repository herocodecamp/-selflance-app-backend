const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;



const budgerSchema = new Schema({
    budgetType: String,
    budgetrate: Number
})

var JobPostSchema = new Schema({
    
    // buyer_id:,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    category: String,
    delivery_time: String,
    seller_experience_req: String,
    seller_language_req: String,
    payment_method: String,
    description: String,
    documents:[],
    budget:[budgerSchema],
    isSecurity_payment: Boolean,
    jobStatus: String,

},
{
    timestamps: true
})


var JobPost = mongoose.model("JobPost", JobPostSchema)

module.exports = JobPost;