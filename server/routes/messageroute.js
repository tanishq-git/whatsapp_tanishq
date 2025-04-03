import express from 'express';
import {sendmessage} from '../controller/messagecontroller.js'
import { checktoken } from '../middleware/checktoken.js';
import { getmessage } from '../controller/messagecontroller.js';
const router = express.Router();

router.route('/send/:id').post(checktoken,sendmessage);
router.route('/get/:id').get(checktoken,getmessage);

export default router;