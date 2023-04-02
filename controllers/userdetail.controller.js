const UserDetail = require('../models/UserDetails');

const readUserDetails = async(req,res)=>{
    try{
        UserDetail.findOne({user: req.params.userId}).then((result)=>{
            // later replace user:req.user._id 
            // if(err) { res.status(500).json({ message: err.message, type: err.name });}
            res.statusCode = 200;
            res.json(result)
        })
    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }      

}


const createUserDetails = async(req,res)=>{
    
    if(req.body){
        req.body.user = req.params.userId
        console.log(req.body)
        try{
            UserDetail.create(req.body).then((result)=>{
                res.statusCode = 200;
                res.json(result)
            }).catch((err)=>res.status(500).json({ message: err.message}))
        }
        catch(error){
         res.status(500).json({ message: error.message, type: error.name });
        }
     }
     else
     {
         res.status(500).json({ message: 'No Data Found'});
     }
}


const updateUserDetails = async(req,res)=>{
    try{
            UserDetail.findOneAndUpdate({user: req.params.userId},{$set: req.body},{new: true}).then((result)=>{
                // if(err) {res.status(500).json({ message: err.message, type: err.name })}
                res.statusCode = 200;
                res.json(result)
            });
    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }
}


const deleteUserDetails = async(req,res)=>{
    try{
        UserDetail.findOneAndRemove({user: req.params.userId}).then((result)=>{
            // if(err){res.status(500).json({ message: err.message, type: err.name })}

            res.statusCode = 200;
            res.json(result)
        })
    }
    catch(error)
    {
        res.status(500).json({ message: error.message, type: error.name });
    }
}

module.exports = {readUserDetails,updateUserDetails,createUserDetails,deleteUserDetails}