import React, { useState } from 'react'
import useconversation from '../zustand/useconversation';
import axios from 'axios'
const usesendmessage = () => {
    const [loading,setLoading] = useState(false);
    const {message,setmessage,selectedconversation} = useconversation();
    const user = JSON.parse(localStorage.getItem('userdata'));
    const sendmessage = async (mess) => {
        setLoading(true);
          try {
            const res = await axios.post(
                `https://whatsapp-tanishq.onrender.com/api/message/send/${selectedconversation._id}`, 
                { message: mess }, 
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `bearer ${user?.token}`,
                  },
                }
              );
            setmessage([...message,res.data]);
            setLoading(false);
          } catch (error) {
            console.log('Error in send message',error)
          }
      }
  return {loading,sendmessage}
}

export default usesendmessage
