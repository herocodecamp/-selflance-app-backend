const express = require('express');
const upload = require('../middleware/multerStorage')

const {getJobResponse,createJobResponse,updateJobResponse,deleteJobResponse} = require('../controllers/jobresponse.controller')

const jobResponseRouter = express.Router();



jobResponseRouter.get('/:userId/:jobResponseId',getJobResponse)

jobResponseRouter.post('/:userdetailId/:jobPostId/create', upload.array('files', 3), createJobResponse)

jobResponseRouter.put('/:userId/:jobResponseId',updateJobResponse)

jobResponseRouter.delete('/:jobResponseId',deleteJobResponse)



module.exports = jobResponseRouter;