const mongoose = require("mongoose");
const { Schema } = mongoose;


var CustomSupportSchema = new Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category: String,
    title: String,
    subtitle: String,
    description: String

},
{timestamps: true});

var CustomSupport = mongoose.model('CustomSupport',CustomSupportSchema)

module.exports = CustomSupport;