const express = require('express');
const upload = require('../middleware/multerStorage')
const {readConversation, createConversation, readTwoUsersConversation} = require('../controllers/conversation.controller')

const conversationRoutes = express.Router();

// a single user conversations
conversationRoutes.get('/:userId', readConversation)

// two userIds conversation
conversationRoutes.get('/find/:firstUserId/:secondUserId', readTwoUsersConversation)


conversationRoutes.post('/create', createConversation)


module.exports = conversationRoutes;