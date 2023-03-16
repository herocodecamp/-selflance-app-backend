const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    user_name: String, 
    email: String,
    password: String,
    isSeller:Boolean,
    isVerified:Boolean,
   
  });


  module.exports = mongoose.model('User', UserSchema);