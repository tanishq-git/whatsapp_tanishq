import React, { useEffect, useState } from 'react'
import useconversation from '../../zustand/useconversation';

const Mess = ({mess}) => {
  const user = JSON.parse(localStorage.getItem('userdata'));
  const {selectedconversation} = useconversation();

  const itsme = mess?.senderid === user?.userdata?._id;
  const chatname = itsme?"chat-end":"chat-start";
  const formattedTime = new Date(mess.updatedAt).toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  return (
  <>
  {
    chatname === "chat-end" ? <div className={`chat p-2 chat-end`}>
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS chat bubble component"
          src={user?.userdata?.imageurl} />
      </div>
    </div>
    <div className="chat-header capitalize">
      {user?.userdata?.fullname}
      <time className="text-xs opacity-50">{formattedTime}</time>
    </div>
    <div className="chat-bubble">{mess?.message}</div>
   </div> 
   :
   <div className={`chat p-2 chat-start`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={selectedconversation?.imageurl} />
        </div>
      </div>
      <div className="chat-header capitalize">
        {selectedconversation?.fullname}
        <time className="text-xs opacity-50">{formattedTime}</time>
      </div>
      <div className="chat-bubble">{mess?.message}</div>
    </div>
  }
  </>
  )
}

export default Mess
