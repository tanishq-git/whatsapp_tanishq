import React from 'react'

const Search = () => {
  return (
    <>
    <h1 className='p-5 text-3xl '>ᴛᴀɴɪꜱʜq</h1>
    <div className='p-3'>
     <form className='flex items-center w-full bg-[#1D232A] rounded-md py-1 px-2' action="">
     <input type="text" placeholder='search' className='w-full outline-none border-none' />
     <i class="ri-search-line cursor-pointer text-2xl"></i>
     </form>
    </div>
    <h1 className='px-4 py-1 border-zinc-600 border-b-[1px] bg-[#1D232A] text-white'>Messages</h1>
    </>
   
  )
}

export default Search
