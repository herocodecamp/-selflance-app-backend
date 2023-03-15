const mongoose = require('mongoose');
const { Schema } = mongoose;

const exampleSchema = new Schema({
    title: String, 
    author: String,
   
  });


  module.exports = mongoose.model('Example', exampleSchema);