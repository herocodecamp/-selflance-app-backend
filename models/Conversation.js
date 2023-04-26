const mongoose = require("mongoose");
const { Schema } = mongoose;


var membersSchema = new mongoose.Schema({
    sendersDetailId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetail'
    },
    receiverDetailId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetail'
    },
    
})

var ConversationSchema = new mongoose.Schema({
    members: [membersSchema]
    

},{timestamps: true});


var Conversation = mongoose.model("Conversation", ConversationSchema);

module.exports = Conversation;