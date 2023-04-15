const express = require('express')
const appRouter = express()
const gigRoutes = require('./gig.routes')
const userRoutes = require('./user.routes')
const userDetailRoutes = require('./userdetails.routes')
const jobPostRoutes = require('./jobpost.routes')
const blogRouter = require('./blog.routes');
const jobResponseRouter = require('./jobresponse.routes')
const customsuppportRouter = require('./customsupport.routes')
const sellerOfferRouter = require('../routes/sellerOffer.routers');
const buyerOrderProcessRouter = require('../routes/BuyerOrderProcess.routers');
const paymentRouter = require('../routes/payment.routes')
const buyerSearchRouter = require('../routes/buyer.search.routes')
//please use this file for imports routes only

// example routes
appRouter.use('/user',userRoutes)
appRouter.use('/gig',gigRoutes)
appRouter.use('/user/userDetails',userDetailRoutes);
appRouter.use('/jobpost',jobPostRoutes)
appRouter.use('/blog', blogRouter)
appRouter.use('/sellerOffer', sellerOfferRouter)
appRouter.use('/buyerOrderProcess', buyerOrderProcessRouter)
appRouter.use('/payment', paymentRouter)
appRouter.use('/jobresponse',jobResponseRouter)
appRouter.use('/cs',customsuppportRouter)
appRouter.use('/searchGigs',buyerSearchRouter)

module.exports = appRouter;