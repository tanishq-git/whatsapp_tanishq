import mongoose from "mongoose";
import { User } from "./authmodel.js";
import { Message } from "./messagemodel.js";
const conversationschema = new mongoose.Schema({
    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:User
        }
    ],
    messages:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:Message,
        default:[]
        }
    ]
},{timestamps:true});

export const Conversation = mongoose.model('Conversation',conversationschema)