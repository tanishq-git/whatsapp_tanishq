import { createContext, useContext, useState } from "react";

export const Createcontext = createContext();

export const Contextprovider = ({children}) => {
    const [present,setPresent] = useState(false)
  return (
    <Createcontext.Provider value={{present,setPresent}} >
      {children}
    </Createcontext.Provider>
  )
}

export const Usecontext = () => {
    return useContext(Createcontext)
}