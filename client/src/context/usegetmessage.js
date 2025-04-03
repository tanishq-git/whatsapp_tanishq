import React, { useEffect, useState } from 'react'
import useconversation from '../zustand/useconversation.js';
import axios from 'axios'
const usegetmessage = () => {
    const [loading,setLoading] = useState(false);
    const {message,setmessage,selectedconversation} = useconversation();
    const user = JSON.parse(localStorage.getItem('userdata'));
    useEffect(()=>{
      const getmessage = async () => {
        setLoading(true);
        if(selectedconversation && selectedconversation._id){
          try {
            const res = await axios.get(`https://whatsapp-tanishq.onrender.com/api/message/get/${selectedconversation._id}`,{
              headers:{
                Authorization:`bearer ${user?.token}`,
              }
             })
            setmessage(res.data);
            setLoading(false);
          } catch (error) {
            console.log('Error in getting message',error)
          }
        }
      }
            getmessage()
    },[selectedconversation,setmessage]);
  return {loading,message};
}

export default usegetmessage
