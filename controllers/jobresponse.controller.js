const JobPostResponse = require('../models/JobPostResponse');
const User = require('../models/User')
const JobPost = require('../models/JobPost')
// to get the jobresponse we have two categories
// 1- when the seller is getting a job response we need to load only one job response/jobpost
// 2- when the buyer is getting a job response we need to load all of the job responses on the jobposts posted by the buyer
const getJobResponse=async(req,res)=>{
    try{
        const userCurrent = await User.findById({_id: req.params.userId});

        if(userCurrent.isSeller){
            // a seller might have applied in more than one job so better to filter using jobResponse
            const sellerResult = await JobPostResponse.findById({_id: req.params.jobResponseId});
            
            res.status(200).json(sellerResult);
        }
        else
        {
            // for buyer
            const buyerResult = await JobPostResponse.find({user: userCurrent._id})

            res.status(200).json(buyerResult);
        }
            
    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }
};


// only Seller will create the response

const createJobResponse=async(req,res)=>{
    try{
        // const userCurrent = await User.findById({_id: req.params.userId});

        const jobData = await JobPost.find({_id: req.params.jobPostId})
    
        var jobDocs = []
            if(req.files.length>0)
            {
                req.files.forEach(el => {
                    jobDocs.push({url: `${el.path}`})
                });
            }
        req.body.files = jobDocs;


        jobData[0].sellerResponses.length>0 ? (
        
            jobData[0].sellerResponses.map((item)=>{
            item.sellerDetail === req.params.userdetailId && res.status(403).json({message: "You have already applied for that job. "}) 
        })
        )
        
        : (
            req.body.sellerDetail = req.params.userdetailId
            )
        
          

        jobData[0].sellerResponses.push(req.body)

        
        const response = await jobData[0].save()

        res.status(200).json(response)
        
        // if (isApplied.sellerResponses.includes()) {
        //     res.status(403).json({message: "You have already applied for that job. "})
        // }
        // else {

        //     if(userCurrent.isSeller) {
        //         req.body.user = req.params.userId;
        //         req.body.jobId = req.params.jobPostId;
    
        //         const jobResponse = await JobPostResponse.create(req.body);
    
        //         res.status(200).json(jobResponse)
        //     }
        //     else {
        //         res.status(403).json({message: "You are not authorized to perform this action. Only Seller can respond to a posted job"})
        //     }
        // }
        
    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }
};


// sellers can update the jobResponse
const updateJobResponse=async(req,res)=>{
    try{

        const userCurrent = await User.findById({_id: req.params.userId});

        if(userCurrent.isSeller) {

            const jobUpdate = await JobPostResponse.findOneAndUpdate({_id: req.params.jobResponseId},{$set: req.body},{new: true});

            res.status(200).json(jobUpdate)
        }
        else {
            res.status(403).json({message: "You are not authorized to perform this action"})
        }

    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }
};


const deleteJobResponse=async(req,res)=>{
    try{
        const result = await JobPostResponse.findOneAndRemove({_id: req.params.jobResponseId});

        res.status(200).json({message: "Successfully Deleted the response"})

    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }
};


module.exports = {getJobResponse,createJobResponse,updateJobResponse,deleteJobResponse}