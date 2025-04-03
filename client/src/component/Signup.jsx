import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
const Signup = () => {
  const [user,setuser] = useState({
    fullname:"",
    email:"",
    password:"",
    newpassword:"",
    imageurl:"",
  })

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
  
  if(user.fullname.length <= 3){
    return alert('name must be at least 4 char')
  }
  else if(user.password.length <= 5){
    return alert('Password must be at least 6 char')
  }
  else if(user.password !== user.newpassword){
    return alert('Password is not match')
  }

  await axios.post('http://localhost:3000/api/auth/signup',user).then((res)=>{
    if(res.data){
      alert('user register successfully')
    }
    localStorage.setItem('userdata',JSON.stringify(res.data))
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
            <input onChange={handlechnage} value={user.fullname} name='fullname' required  className='w-full p-2 outline-none border-[1px]' type="text" placeholder='Fullname' />
            <input onChange={handlechnage} value={user.email} name='email' required  className='w-full mt-5 p-2 outline-none border-[1px]' type="email" placeholder='Email' />
            <input onChange={handlechnage} value={user.password} name='password' required   className='w-full mt-5 p-2 outline-none border-[1px]' type="password" placeholder='Password' />
            <input onChange={handlechnage} value={user.newpassword} name="newpassword" required  className='w-full mt-5 p-2 outline-none border-[1px]' type="password" placeholder='ConformPassword' />
            <input onChange={handlechnage} value={user.imageurl} name="imageurl" required  className='w-full mt-5 p-2 outline-none border-[1px]' type="text" placeholder='ImageUrl' />
            <button type='submit' className='cursor-pointer py-1 px-3 hover:text-blue-400 border-[1px] mt-5' >Signup</button>
          </form>
          <p className='text-[12px]'>You have an Account? <Link to={'/login'} className='text-sm  border-b-1'>Login</Link>
          </p>
      </div>
    </div>
  )
}

export default Signup
