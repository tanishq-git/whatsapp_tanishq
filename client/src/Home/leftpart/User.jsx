import React, { useEffect, useState } from 'react'
import useconversation from '../../zustand/useconversation.js'

const User = ({data}) => {
  const {selectedconversation,setselectedconversation} = useconversation()
  const isselected = selectedconversation?._id===data._id;
  
  return (
    <div onClick={()=>setselectedconversation(data)} className={`hover:bg-slate-600 duration-300 ${isselected?'bg-slate-700':""}`} >
      <div  className='flex w-full cursor-pointer hover:bg-slate-700 transition-all duration-300 hover:px-2 space-x-4 px-3 py-2  border-b-[1px] border-zinc-600 items-center'>
      <div className="avatar ">
       <div className="lg:w-15 w-23 rounded-full">
        {
          data.imageurl ? <>
          <img className='object-cover w-full h-full' src={`${data?.imageurl}`}/>
          </> : <>
          <img className='object-cover w-full h-full' src={`https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}/>
          </>
        }
       </div>
      </div>
      <div>
        <h1>{data.fullname}</h1>
        <p className='text-[12px]' >{data.email}</p>
      </div>
    </div>
    </div>
  )
}

export default User
