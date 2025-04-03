import React, { useState } from 'react'
import { Usecontext } from '../../context/Context';
import usesendmessage from '../../context/usesendmessage';
import { useNavigate } from 'react-router-dom';

const Sendmessage = () => {
  const user = JSON.parse(localStorage.getItem('userdata'));
  const {present,setPresent} = Usecontext();
  const {loading,sendmessage} = usesendmessage();
  const [mess,setMess] = useState('');
  const naviagte = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault()
    await sendmessage(mess);
    setMess('')
     naviagte('/profile')
  }
  
  return (
    <div className='h-[10%]  bg-[#0F172B]' >
    <div className='p-3 flex  justify-between space-x-3 items-center'>
    <div className='flex space-x-3 items-center'>
      <form className='flex items-center w-80 bg-[#1D232A] rounded-md py-1 px-2' action="">
     <input value={mess} onChange={(e)=>setMess(e.target.value)} type="text" placeholder='Type your message...' className='w-full h-7 outline-none border-none' />
     </form>
     <i onClick={(e)=>handlesubmit(e)} class="ri-send-plane-2-line text-2xl cursor-pointer"></i>
    </div>
    <div className='flex items-center '>
        <span className='text-sm  flex items-center' >Hey!<p className='px-1 text-sm capitalize' >{user?.userdata?.fullname}</p></span> 
        <div className='w-10 h-10 overflow-hidden rounded-full bg-white' >
        <img onClick={()=>setPresent(!present)} className='w-full cursor-pointer h-full outline-none object-cover' src={user?.userdata?.imageurl} alt="" />
    </div>
    </div>
    </div> 
    </div>
  )
}

export default Sendmessage

