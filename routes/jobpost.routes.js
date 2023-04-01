const express = require('express');
const {readJobPost,createJobPost,deleteJobPost,updateJobPost} = require('../controllers/jobPost.controller')

const jobPostRoutes = express.Router();

jobPostRoutes.get('/:userId/jobpost/:postId',readJobPost)


jobPostRoutes.post('/:userId/jobpost/create',createJobPost)


jobPostRoutes.put('/:userId/jobpost/:postId',updateJobPost)


jobPostRoutes.delete('/:userId/jobpost/:postId',deleteJobPost)


module.exports = jobPostRoutes;