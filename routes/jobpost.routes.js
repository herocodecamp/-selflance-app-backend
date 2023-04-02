const express = require('express');
const {readJobPost,createJobPost,deleteJobPost,updateJobPost} = require('../controllers/jobPost.controller')

const jobPostRoutes = express.Router();

jobPostRoutes.get('/:userId/jobpost/:jobPostId',readJobPost)


jobPostRoutes.post('/:userId/jobpost/create',createJobPost)


jobPostRoutes.put('/:userId/jobpost/:jobPostId',updateJobPost)


jobPostRoutes.delete('/:userId/jobpost/:jobPostId',deleteJobPost)


module.exports = jobPostRoutes;