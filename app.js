const express = require('express');
const appRouter = require('./routes');
const app = express();

// 
app.get('/', (req,res)=>{
    res.send({result: 'success'})
  })
  
  app.use('/api/v1', appRouter)





module.exports = app