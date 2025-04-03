import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
 const navigate = useNavigate()
 const handlelogout = () => {
    localStorage.removeItem('userdata')
    navigate('/login')
  }
  return (
    <div className='p-3 border-t-[1px] flex justify-between border-zinc-600'>
      <i onClick={handlelogout} class="ri-logout-circle-line cursor-pointer text-2xl"></i>
      
    </div>
  )
}

export default Logout
