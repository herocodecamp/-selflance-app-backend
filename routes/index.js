const express = require('express')
const userRoutes = require('./user.routes')
const appRouter = express.Router()


//please use this file for imports routes only

// example routes
appRouter.use('/user',userRoutes)






module.exports = appRouter