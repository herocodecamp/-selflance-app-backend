// const express = require('express');
// const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const app = require('./app');
const port = process.env.PORT || 8000;



app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})