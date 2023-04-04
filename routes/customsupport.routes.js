const express = require('express');
const {readQuery,createQuery,updateQuery,removeQuery} = require('../controllers/customsupport.controller')



const customsuppportRouter = express.Router()

customsuppportRouter.get('/:csId',readQuery)

customsuppportRouter.post('/:userId',createQuery)

customsuppportRouter.put('/:userId/:csId',updateQuery)

customsuppportRouter.delete('/:userId/:csId',removeQuery)




module.exports = customsuppportRouter;