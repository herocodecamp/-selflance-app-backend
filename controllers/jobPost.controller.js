const JobPost = require('../models/JobPost')


const readJobPost= async(req,res)=>{
    try{
        const jobPost = await JobPost.findOne({_id: req.params.jobPostId})
        res.status(200).json(jobPost)
    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }
};

const readAllUserJobPost= async(req,res)=>{
    try{
        const jobPosts = await JobPost.find({user: req.params.userId})
        res.status(200).json(jobPosts)
    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }
};


const readAllJobs = async(req,res)=>{
    try{
        const jobs = await JobPost.find({}).limit(5);

        const totalJobs = await JobPost.find({}).countDocuments()

        const resp = {
            jobs: jobs,
            total: totalJobs
        }

        res.status(200).json(resp)

    }
    catch(err)
    {
        res.status(500).json({ message: error.message, type: error.name });

    }
}


const createJobPost = async(req,res)=>{

    req.body.user = req.params.userId
    
    // console.log(req.files)
    try{
        var jobDocs = []
            if(req.files.length>0)
            {
                req.files.forEach(el => {
                    jobDocs.push({url: `${el.path}`})
                });
            }
        req.body.jobFiles = jobDocs;
        
        const result = await JobPost.create(req.body)
        res.status(200).json(result)
    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }

};


const updateJobPost = async(req,res)=>{

    try{
            const updatedPost= await JobPost.findOneAndUpdate({_id: req.params.jobPostId},{$set: req.body},{new: true})
            res.status(200).json(updatedPost)
    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }


};


const deleteJobPost = async(req,res)=>{

    try{
            await JobPost.findOneAndRemove({_id: req.params.jobPostId})
            res.status(200).json({message: "Successfully Deleted!"})
    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }


};


module.exports = {readJobPost,createJobPost,updateJobPost,deleteJobPost,readAllUserJobPost, readAllJobs}

