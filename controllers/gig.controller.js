const Gig = require("../models/Gig");



const readGig =async(req,res)=>{
    try{
            const gigData = await Gig.findById({_id: req.params.gigId})
            res.status(200).json(gigData)
    }
    catch(error)
    {
        res.status(500).json({ message: error.massage, type: error.name }); 
    }
};


const createGig =async(req,res)=>{
    
    try{
            var images = []
            if(req?.files.length>0)
            {
                req.files.forEach(el => {
                    images.push({url: `${el.path}`})
                });
            }

            req.body.userId = req.params.userId
            
            
            
            req.body.gigImages = images;

            // START:(Req from the postman) Below are some methods to make the Schema work with postman...during client data we may remove them as we will be getting the required data
            // const packagesArr =[]
            // req.body.packages.forEach(el=>{
            //     packagesArr.push(JSON.parse(el))
            // })
            
            // req.body.packages = packagesArr

            // const gigFAQarr=[]
            // req.body.gigFAQ.forEach(el=>{
            //     gigFAQarr.push(JSON.parse(el))
            // })
            // req.body.gigFAQ = gigFAQarr

            // const gigReq = []
            // req.body.gigRequirement.forEach(el=>{
            //     gigReq.push(JSON.parse(el))
            // })
            // req.body.gigRequirement = gigReq

            // END...You may remove this till there

            // Req from the client Side
            // req.body.tags && (req.body.tags = JSON.parse(req.body.tags))
            // req.body.packages && (req.body.packages = JSON.parse(req.body.packages))
            // req.body.gigFAQ && (req.body.gigFAQ = JSON.parse(req.body.gigFAQ))
            // req.body.videos && (req.body.videos = JSON.parse(req.body.videos))
            // req.body.gigRequirement && (req.body.gigRequirement = JSON.parse(req.body.gigRequirement))
            req.body.tags = req.body.tags ? JSON.parse(req.body.tags) : []
            req.body.packages = req.body.packages ? JSON.parse(req.body.packages) : []
            req.body.gigFAQ = req.body.gigFAQ ? JSON.parse(req.body.gigFAQ) : []
            req.body.videos = req.body.videos ? JSON.parse(req.body.videos) :[]
            req.body.gigRequirement = req.body.gigRequirement ? JSON.parse(req.body.gigRequirement) :[]
            req.body.title = req.body.title ? req.body.title : ''
            req.body.category = req.body.category ? req.body.category : ''
            req.body.subCategory = req.body.subCategory ? req.body.subCategory : ''
            req.body.serviceDescription = req.body.serviceDescription ? req.body.serviceDescription : ''

            const newGig = await Gig.create(req.body)

            res.status(200).json(newGig)
    }
    catch(error)
    {
        res.status(500).json({ message: error.massage, type: error.name }); 
        console.log("error", error)
    }
};


const updateGig =async(req,res)=>{
    try{
        var images = []
        if(req.files.length>0)
        {
            req.files.forEach(el => {
                images.push({url: `${el.path}`})
            });
        }    
        req.body.gigImages = images;

        // START: Below are some methods to make the Schema work with postman...during client data we may remove them as we will be getting the required data
        const packagesArr =[]
        if(req.body.packages.length>0)
        {
            req.body.packages.forEach(el=>{
                packagesArr.push(JSON.parse(el))
            })
            
            req.body.packages = packagesArr

        }
        
        const gigFAQarr=[]
        if(req.body.gigFAQ.length>0)
        {

            req.body.gigFAQ.forEach(el=>{
                gigFAQarr.push(JSON.parse(el))
            })
            req.body.gigFAQ = gigFAQarr
        }
        
        

        const gigReq = []
        if(req.body.gigRequirement.length > 0)
        {
            req.body.gigRequirement.forEach(el=>{
                gigReq.push(JSON.parse(el))
            })
            req.body.gigRequirement = gigReq

        }

        console.log(req.body)  

        // END...You may remove this till there

        const updatedGig = await Gig.findByIdAndUpdate({_id: req.params.gigId},{$set: req.body}, {new: true})
        res.status(200).json(updatedGig)
    }
    catch(error)
    {
        res.status(500).json({ message: error.massage, type: error.name }); 
    }
};


const deleteGig =async(req,res)=>{
    try{
            await Gig.findOneAndRemove({_id: req.params.gigId})

            res.status(200).json({message: "sccessfully removed"})
    }
    catch(error)
    {
        res.status(500).json({ message: error.massage, type: error.name }); 
    }
};


module.exports = {readGig,createGig,updateGig,deleteGig}

