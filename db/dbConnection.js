const mongoose = require('mongoose');

const dbConnection = ()=>{

    mongoose.connect(`${process.env.DB_URL}`)

}





module.exports=dbConnection;