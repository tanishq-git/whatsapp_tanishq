import express from 'express'
import dotenv from 'dotenv'
import connectdb from './utils/DB.js';
import router from './routes/authrouter.js';
import cors from 'cors'
import messagerouter from './routes/messageroute.js'
// import {app,server} from './socket/server.js'
import path from 'path';
const app = express();
const port = 3000 || 3004;

const _dirname = path.resolve();

dotenv.config();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:'https://whatsapp-tanishq.onrender.com',
    credentials:true
}));

app.use('/api/auth',router);
app.use('/api/message',messagerouter);

app.use(express.static(path.join(_dirname,'/client/dist')));
app.get('*',(req,res)=>{
   res.sendFile(path.resolve(_dirname,'client','dist','index.html'));
});

connectdb().then(()=>{
    app.listen(port,()=>{
        console.log('server is running on port ',port)
    });
})

