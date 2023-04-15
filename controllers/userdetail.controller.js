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
    console.log(req.files)
    
    const checkResult = userCheck(req,res).then((result)=>{
        // console.log(result, "check")
        if(result === null)
    {
        
        if(req.body || req.file){
    
           console.log("file is: ", req.file) 
            try{
    
                // const obj = {
                //     img: {
                //         data: fs.readFileSync(path.join(__dirname,"..","images", req.file.filename)),
                //         contentType: "image/png"
                //     }
                // }
                // console.log(req.file.path);
                if(req.file){req.body.profileImage =req.file.path}
                
                req.body.user = req.params.userId
                req.body.education = JSON.parse(req.body.education)
                req.body.skills = JSON.parse(req.body.skills)
                req.body.experience = JSON.parse(req.body.experience)
                req.body.certificates = JSON.parse(req.body.certificates)
    
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
             res.status(500).json({ message: 'No Data Found in the request body'});
         }

    }
    else
    {
        res.status(500).json({message: "Request not supported. Details already exists please update instead"})
    }

    })
    
    


}


const updateUserDetails = async(req,res)=>{
    try{
        if(req.file){
           
            console.log(req.file.path);
            req.body.profileImage =req.file.path
        }
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


// checking userdetails already exists or not

const userCheck = async(req,res)=>{
    console.log(req.params.userId.trim())
    try{
        const check = await UserDetail.findOne({user: req.params.userId.trim()})
        return check
    }
    catch(err)
    {
        console.log(err)
    }
}


module.exports = {readUserDetails,updateUserDetails,createUserDetails,deleteUserDetails}