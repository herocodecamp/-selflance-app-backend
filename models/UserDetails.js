const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;



const EducationSchema = new Schema ({
    degreeTitle: String,
    InstitutionName: String,
    from: Number,
    to: Number
});

const ExperienceSchema = new Schema ({
    companyName: String,
    yearsTotal: Number, 
    from: Number,
    to: Number
});

const SkillsSchema = new Schema({
        skillName: String
});

const CertificateSchema = new Schema ({
    certificateTitle: String,
    institutionName: String, 
    year: Number
});


var UserDetailSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    firstname: String,
    lastname: String,
    location: String,
    about: String,
    rating: String,
    profileImage: String,
    // profileImage: {
    //     data: Buffer,
    //     contenType: String
    // },
    
    educatoion: [EducationSchema],
    // videoIntro: [],
    hourlyRate: String,
    skills: [SkillsSchema],
    experience:[ExperienceSchema],
    onlineStatus: Boolean,
    certificates:[CertificateSchema],
    contactNumber: Number,
},
{
    timestamps: true
})


var UserDetail = mongoose.model("UserDetail", UserDetailSchema);

module.exports = UserDetail;