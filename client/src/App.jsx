import React from 'react'
import Signup from './component/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Profile from './component/Profile'
import Nofound from './component/Nofound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}

export default App
