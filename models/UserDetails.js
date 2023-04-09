const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;



const EducationSchema = new Schema ({
    degreeTitle: String,
    InstitutionName: String,
    from: String,
    to: String
});

const ExperienceSchema = new Schema ({
    companyName: String,
    yearsTotal: String, 
    from: String,
    to: String
});

const SkillsSchema = new Schema({
        skillName: String,
        expLevel: String,
});

const CertificateSchema = new Schema ({
    certificateTitle: String,
    institutionName: String, 
    year: String,
});


var UserDetailSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    firstname: String,
    lastname: String,
    location: String,
    jobDescription: String,
    occupation: String,
    about: String,
    rating: String,
    profileImage: String,
    // profileImage: {
    //     data: Buffer,
    //     contenType: String
    // },
    
    education: [EducationSchema],
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