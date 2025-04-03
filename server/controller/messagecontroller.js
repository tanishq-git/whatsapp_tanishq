import { Conversation } from "../model/conversationmodel.js";
import { Message } from "../model/messagemodel.js";
export const sendmessage = async (req,res) => {
  try {
    const {message} = req.body;
    const {id:receiverid}= req.params;
    const senderid = req.userid;
    let conversation = await Conversation.findOne({
        members:{$all:[senderid,receiverid]}
    })
    if(!conversation){
        conversation = await Conversation.create({
            members:[senderid,receiverid]
        })
    }
    const newmessage = new Message({
        senderid,
        receiverid,
        message
    })

    if(newmessage){
        conversation.messages.push(newmessage._id);
    }
    // await conversation.save();
    // await newmessage.save();
    await Promise.all([
        conversation.save(),
        newmessage.save()
    ]);

    res.status(201).json(newmessage);
  } 
  catch (error) {
    console.log('Error in SendMessage',error);
    res.status(500).json({error:'Internal server error'});
  }
}

export const getmessage = async (req,res) => {
    try {
        const {id:chatuser} = req.params;
        const senderid = req.userid;
        let conversation = await Conversation.findOne({
            members:{$all:[senderid,chatuser]}
        }).populate('messages')

        if(!conversation){
            return res.status(201).json([])
        }

        const message = conversation.messages;
        res.status(201).json(message)
    } catch (error) {
        console.log('Error in getmessage',error);
        res.status(500).json({error:"Internal server error"})
    }
}