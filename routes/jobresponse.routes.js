const express = require('express');

const {getJobResponse,createJobResponse,updateJobResponse,deleteJobResponse} = require('../controllers/jobresponse.controller')

const jobResponseRouter = express.Router();



jobResponseRouter.get('/:userId/:jobResponseId',getJobResponse)

jobResponseRouter.post('/:userId/:jobPostId/create', createJobResponse)

jobResponseRouter.put('/:userId/:jobResponseId',updateJobResponse)

jobResponseRouter.delete('/:jobResponseId',deleteJobResponse)



module.exports = jobResponseRouter;