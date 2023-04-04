const express = require('express');
const {createUserDetails,readUserDetails,updateUserDetails,deleteUserDetails} = require('../controllers/userdetail.controller');
const upload = require('../middleware/multerStorage')



const userDetailRoutes = express.Router();

// read
userDetailRoutes.get('/:userId',readUserDetails)


// create
userDetailRoutes.post('/:userId/create', upload.single("profileImage"), createUserDetails)


// update
userDetailRoutes.put('/:userId/update',upload.single("profileImage"), updateUserDetails)


// delete
userDetailRoutes.delete('/:userId/remove',deleteUserDetails)

module.exports = userDetailRoutes;