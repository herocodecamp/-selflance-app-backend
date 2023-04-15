const express = require('express');
const {readJobPost,createJobPost,deleteJobPost,updateJobPost, readAllJobPost} = require('../controllers/jobPost.controller')
const upload = require('../middleware/multerStorage')



const jobPostRoutes = express.Router();

jobPostRoutes.get('/:userId/jobposts',readAllJobPost)

jobPostRoutes.get('/:userId/jobpost/:jobPostId',readJobPost)


jobPostRoutes.post('/:userId/create',upload.array('jobFiles', 3),createJobPost)


jobPostRoutes.put('/:userId/jobpost/:jobPostId',updateJobPost)


jobPostRoutes.delete('/:userId/jobpost/:jobPostId',deleteJobPost)


module.exports = jobPostRoutes;