const Gig = require("../models/Gig");

exports.postGig= async(req,res)=>{
   
    console.log(req.body)
    // console.log(req)
    console.log(req.hasOwnProperty('body'))

    try {

        res.json({...req.body})
        // const createGig = await Gig.create({...req.query})
        // console.log(createGig)
        // res.json(createGig)
      
    } catch (error) {
        res.status(500).json({ massage: error.massage, type: error.name });  
    }

}

