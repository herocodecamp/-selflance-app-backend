const express = require('express')
const appRouter = express()
const gigRoutes = require('./gig.routes')
const userRoutes = require('./user.routes')
const userDetailRoutes = require('./userdetails.routes')
const jobPostRoutes = require('./jobpost.routes')
const blogRouter = require('./blog.routes');
const jobResponseRouter = require('./jobresponse.routes')
const agreementRouter = require('../routes/agreement.routes');
//please use this file for imports routes only

// example routes
appRouter.use('/user',userRoutes)
appRouter.use('/gig',gigRoutes)
appRouter.use('/user/userDetails',userDetailRoutes);
appRouter.use('/user',jobPostRoutes)
appRouter.use('/blog', blogRouter)
appRouter.use('/agreement', agreementRouter)
appRouter.use('/jobresponse',jobResponseRouter)

module.exports = appRouter;