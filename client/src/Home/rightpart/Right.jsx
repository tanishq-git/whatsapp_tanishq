import React, { useEffect } from 'react'
import Chatuser from './Chatuser'
import Message from './Message'
import Sendmessage from './Sendmessage'
import { Usecontext } from '../../context/Context'
import useconversation from '../../zustand/useconversation'
import Loading from '../../component/Loading'

const Right = () => {
  const {present,setPresent} = Usecontext();
  const user = JSON.parse(localStorage.getItem('userdata'));
  const {selectedconversation,setselectedconversation} = useconversation();

  useEffect(()=>{
    return setselectedconversation(null);
  },[setselectedconversation]);
  return (
    <>
    {
    !selectedconversation ? <>
    <Nochatselected/>
    </> : 
    <>
    <div style={ present === false ? {backgroundImage:'url(https://4kwallpapers.com/images/walls/thumbs_3t/16935.png)',backgroundPosition:'center',backgroundSize:"cover",opacity:'1'} : {backgroundImage:`url(${user?.userdata?.imageurl})`,backgroundPosition:'center',backgroundSize:"cover",opacity:'1'} }   className='bg-slate-900 w-[70%] text-white' >
     <Chatuser/>
     <Message/>
     <Sendmessage/>
    </div>
    </>
    }
    </>
  )
}

export default Right


const Nochatselected = () => {
  const user = JSON.parse(localStorage.getItem('userdata'));
  return (
    <div className='flex h-screen items-center w-full justify-center bg-[#192b35]'>
     <h1 className='text-center' >Welcome <span className='capitalize' >{user?.userdata?.fullname}</span>👋  <br /> No Chat Selected Please start conversation by selecting anyone to your contacts 🔥</h1>
    </div>
  )
}