const express = require('express')
const userRoutes = require('./users.routes')
const appRouter = express.Router()


//please use this file for imports routes only

// example routes
appRouter.use('/users',userRoutes)






module.exports = appRouter