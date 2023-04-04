const CustomSupport = require('../models/CustomSupportSchema');
const { create } = require('../models/JobPostResponse');



const readQuery = async(req,res)=>{
    try{
        const data = await CustomSupport.findById({_id: req.params.csId})
        res.status(200).json(data)

    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }

};


const createQuery = async(req,res)=>{
    try{
        req.body.userId = req.params.userId
        const response = await create(req.body)
        res.status(200).json(response)
    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }

};


const updateQuery = async(req,res)=>{
    try{
            const updatedData = await CustomSupport.findByIdAndUpdate({_id: req.params.csId},{$set: req.body}, {new: true})
            res.status(200).json(updatedData)
    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }

};


const removeQuery = async(req,res)=>{
    try{

        await CustomSupport.findOneAndRemove({_id: req.params.csId})

        res.status(200).json({message: "Successfully Deleted"})

    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }

};


module.exports = {readQuery,createQuery,updateQuery,removeQuery}