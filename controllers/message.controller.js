const Conversation = require('../models/Conversation');
const Message = require ('../models/Messages')


const readMessage = async(req,res) => {

    try{
        const messages = await Message.find({
            conversationId: req.params.conversationId
        }).populate(
            {
                path: 'conversationId',
                populate: {
                    path: 'members.sendersDetailId members.receiverDetailId',
                    model: 'UserDetail',
                    select: 'firstname lastname profileImage location about'
                }
            }
        )

        res.status(200).json(messages)

    }

    catch(error)
    {
        res.status(500).json({ massage: error.massage, type: error.name });
    }
}


const createMessage = async(req,res) => {

    try{
        const message = await Message.create(req.body)

        res.status(200).json(message)

    }

    catch(error)
    {
        res.status(500).json({ massage: error.massage, type: error.name });
    }
}

module.exports = {readMessage, createMessage}