import { createContext, useState, useEffect, useContext } from 'react'
import io from 'socket.io-client'
const Socketcontext = createContext();

export const Socketprovider = ({children}) => {
    const [socket,setsocket] = useState(null);
    const data = JSON.parse(localStorage.getItem('userdata'));
    useEffect(()=>{
        if(data){
            const socket = io('http://localhost:3000',{
                query:{
                    userid:data.userdata._id,
                  }
            });
            setsocket(socket)
        }
    },[data ])
return (
   <Socketcontext.Provider value={{socket}} >
       {children}
   </Socketcontext.Provider>
)
}

// export const Usesocket = () => {
//     return useContext(Socketcontext)
// }