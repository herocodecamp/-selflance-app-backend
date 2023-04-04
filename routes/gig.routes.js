const express = require('express');
const { readGig,createGig,updateGig,deleteGig} = require('../controllers/gig.controller');
const upload = require('../middleware/multerStorage')


const gigRoutes = express.Router();



gigRoutes.get('/:gigId',readGig)


gigRoutes.post('/:userId/create',upload.array('gigImage', 5),createGig)


gigRoutes.put('/:gigId/update',upload.array('gigImage',5),updateGig)


gigRoutes.delete('/:gigId/remove', deleteGig) 





module.exports = gigRoutes;