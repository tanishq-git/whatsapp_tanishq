import React from 'react'
import useconversation from '../../zustand/useconversation'

const Chatuser = () => {
  const {selectedconversation} = useconversation();
  return (
    <div className='px-3 py-2 bg-slate-900' >
      <div className='flex items-center space-x-4' >
      <div className={`avatar`}>
       <div className="w-13 rounded-full">
        {
          selectedconversation?.imageurl ? <img src={`${selectedconversation.imageurl}`} /> : <img src="" alt="" />
        }
       </div>
      </div>
      <div className='' >
       {selectedconversation?.fullname?<h1>{selectedconversation.fullname}</h1>:<h1></h1>}
       {/* {selectedconversation && <p className='text-[12px]'>Online</p>}  */}
      </div>
      </div>
    </div> 
  
  )
}

export default Chatuser
