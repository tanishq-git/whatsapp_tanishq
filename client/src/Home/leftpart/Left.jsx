import React from 'react'
import Search from './Search'
import Users from './Users'

const Left = () => {
  return (
    <div className='bg-[#111B21] text-white w-[30%]' >
      <Search/>
      <Users/>
    </div>
  )
}

export default Left
