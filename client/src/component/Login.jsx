import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [user,setuser] = useState({
      email:"",
      password:"",
    })
  const navigate = useNavigate()
    const handlechnage = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setuser({
         ...user,
         [name]:value
      })
    }
    const handlesubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://whatsapp-tanishq.onrender.com/api/auth/login',user).then((res)=>{
      if(res.data){
        alert('user login successfully')
      }
      localStorage.setItem('userdata',JSON.stringify(res.data))
      navigate('/profile')
      window.location.reload();
    }).catch((error)=>{
      console.log('responce not found',error);
      alert(error?.response?.data.error)
    })  
    }
    
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='h-fit p-3 w-80 flex flex-col items-center border-2'>
          <h1 className='text-2xl' >WhatsApp</h1>
          <form onSubmit={handlesubmit} className='py-3 w-full flex flex-col items-center justify-center' action="">
          <input onChange={handlechnage} value={user.email} name='email' required  className='w-full mt-5 p-2 outline-none border-[1px]' type="email" placeholder='Email' />
          <input onChange={handlechnage} value={user.password} name='password' required   className='w-full mt-5 p-2 outline-none border-[1px]' type="password" placeholder='Password' />
            <button type='submit' className='cursor-pointer py-1 px-3 hover:text-blue-400 border-[1px] mt-5' >Login</button>
          </form>
          <p className='text-[12px]'>You Don't have an Account? <Link to={'/'} className='text-sm  border-b-1'>Signup</Link>
          </p>
      </div>
    </div>
  )
}

export default Login
