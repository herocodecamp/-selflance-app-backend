const express = require('express')
const appRouter = express()
const gigRoutes = require('./gig.routes')
const userRoutes = require('./user.routes')



//please use this file for imports routes only

// example routes
appRouter.use('/user',userRoutes)
appRouter.use('/gig',gigRoutes)






module.exports = appRouter