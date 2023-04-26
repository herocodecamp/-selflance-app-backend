const Conversation = require('../models/Conversation');
const Message = require ('../models/Messages')


const readConversation = async(req,res) => {


    try{
        const conv = await Conversation.find({
            // members:{$in: [req.params.userId]}
            members: {
                $elemMatch:{
                    $or: [
                        {sendersDetailId: req.params.userId},
                        {receiverDetailId: req.params.userId}
                    ]
                }
            }

        }).populate({
            path: 'members.sendersDetailId members.receiverDetailId',
            select: 'firstname lastname profileImage location about'
        }
         )

        res.status(200).json(conv)

    }

    catch(error)
    {
        res.status(500).json({ massage: error.massage, type: error.name });
    }
}


const readTwoUsersConversation = async(req,res) => {


    try{
        const conv = await Conversation.find({
            members:{$all: [req.params.firstUserId, req.params.secondUserId]}

        })

        res.status(200).json(conv)

    }

    catch(error)
    {
        res.status(500).json({ massage: error.massage, type: error.name });
    }
}


const createConversation = async (req,res) => {

    // const membersArr = [req.body.senderId, req.body.receiverId]
    const membersArr=[]
    
    const obj = {
        sendersDetailId: req.body.senderId,
        receiverDetailId: req.body.receiverId
    }

    membersArr.push(obj)

    req.body.members= membersArr;

    try{
            const qResult = await Conversation.create(req.body)

            res.status(200).json(qResult)
    }

    catch(error)
    {
        res.status(500).json({ massage: error.massage, type: error.name });
    }
}

module.exports = {readConversation, createConversation, readTwoUsersConversation}