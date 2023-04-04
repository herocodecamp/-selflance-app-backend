const mongoose = require("mongoose");
const { Schema } = mongoose;

const SellerIdentityVerSchema = new Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    country: String,
    document_type: String,
    front_doc_url: String,
    back_doc_url: String
});

const SellerIdentityVer = mongoose.model('SellerIdentityVer', SellerIdentityVerSchema)

module.exports = SellerIdentityVer;