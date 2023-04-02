const mongoose = require("mongoose");
const { Schema} = mongoose;


var JobPostResponseSchema = new Schema({
    jobId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobPost'
    },
    // seller_id:,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    price_bid: String,
    duration: String,
    start_time: String,
    start_date: String,
    cover_letter: String,
    // files will be fetched form te jobpost
    
}, {
    timestamps: true
})


var JoPostResponse = mongoose.model('JobPostResponse', JobPostResponseSchema);

module.exports = JoPostResponse