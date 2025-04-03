import React, { useEffect, useState } from 'react'
import Left from '../Home/leftpart/Left.jsx'
import Right from '../Home/rightpart/Right.jsx'
import { Link } from 'react-router-dom'
const Profile = () => {
    const data = localStorage.getItem('userdata');
    const [login,setLogin] = useState(false)
    useEffect(()=>{
     if(data){
        setLogin(true)
     }
    },[login,setLogin,data]);



  return (
    <div className='select-none' >
    {
     login === true ? <>
     <div className='flex h-[100vh] overflow-hidden'>
      <Left/>
      <Right/>
     </div>
    </> : <>
    <div className='w-full h-screen flex flex-col justify-center items-center bg-black text-white'>
      <h1>Page not found 404!</h1>
      <h1 className='text-[12px]' >You Need to first singup if you already signup so you can login</h1>
      <div className='flex space-x-5' >
      <Link className='bg-white px-3 py-1 text-black rounded mt-5' to={'/'}>Signup</Link>
      <Link className='bg-white px-3 py-1 text-black rounded mt-5' to={'/login'}>Login</Link>
      </div>
    </div>
    </>
    }
    </div>
  )
}

export default Profile
