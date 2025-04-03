import React, { useEffect, useState } from 'react'
import User from './User'
import axios from 'axios'
import Logout from './Logout'

const Users = () => {
  const [data,setData] = useState([]);
  const user = JSON.parse(localStorage.getItem('userdata'));

  const getdata = async () => {
    await axios.get('https://whatsapp-tanishq.onrender.com/api/auth/users',{
      headers:{
        Authorization:`bearer ${user?.token}`,
      }
     }).then((res)=>{
      setData(res.data)
     })
     .catch((error)=>{
      console.log(error)
     })
  }

  useEffect(()=>{
   getdata()
  },[data])

  return (
    <>
     <div className='w-full overflow-y-auto h-[70%]'>
      {
        data.map((items,index)=>(
        <User key={index} data={items} />
        ))
      }
    </div>
    <Logout/>
    </>
   
  )
}

export default Users
