const mongoose = require("mongoose");
const { Schema } = mongoose;


var MessageSchema = new mongoose.Schema({
  conversationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conversation'
  },

  sender: String,
  text: String  
  
},{timestamps: true});


var Message = mongoose.model("Message", MessageSchema);

module.exports = Message;