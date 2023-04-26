const express = require('express');
const upload = require('../middleware/multerStorage')
const {readMessage,createMessage} = require('../controllers/message.controller')


const messageRoutes = express.Router();

messageRoutes.get('/:conversationId', readMessage)

messageRoutes.post('/create', createMessage)

module.exports = messageRoutes;