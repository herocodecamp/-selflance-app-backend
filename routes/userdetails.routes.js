const express = require('express');
const {createUserDetails,readUserDetails,updateUserDetails,deleteUserDetails} = require('../controllers/userdetail.controller')

const userDetailRoutes = express.Router();

// read
userDetailRoutes.get('/:userId',readUserDetails)


// create
userDetailRoutes.post('/:userId/create', createUserDetails)


// update
userDetailRoutes.put('/:userId/update',updateUserDetails)


// delete
userDetailRoutes.delete('/:userId/remove',deleteUserDetails)

module.exports = userDetailRoutes;