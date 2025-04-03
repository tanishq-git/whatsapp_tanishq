import React, { useEffect, useRef } from 'react';
import Mess from './Mess';
import usegetmessage from '../../context/usegetmessage.js';
import Loading from '../../component/Loading.jsx';

const Message = () => {
  const { loading, message } = usegetmessage();
  const lastref = useRef(null);

  useEffect(() => {
    if (lastref.current) {
      lastref.current.scrollTo({
        top: lastref.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [message]); // Runs when new messages are added

  return (
    <div ref={lastref} className="h-[82%] w-full overflow-y-auto">
      {loading ? (
        <Loading />
      ) : (
        message.length > 0 &&
        message.map((mess, index) => <Mess key={index} mess={mess} />)
      )}
      {!loading && message.length === 0 && (
        <div className="text-white flex justify-center mt-60">
          <p>Say hi to start the conversation</p>
        </div>
      )}
    </div>
  );
};

export default Message;
