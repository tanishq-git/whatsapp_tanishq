import mongoose from 'mongoose';

const  URL = 'mongodb+srv://Chatapp:chatapp@cluster0.toqls.mongodb.net/chatapp?retryWrites=true&w=majority&appName=Cluster0'
const connectdb = async () => {
    try {
        await mongoose.connect(URL);
        console.log('Mongodb connected successfully');
    } catch (error) {
        console.log('Mongodb not connected');
        process.exit(0);
    }
}

export default connectdb