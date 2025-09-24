import React from 'react'
import './App.css'
 import { Routes, Route } from 'react-router-dom';
 import Navbar from './common/Navbar.jsx';
 import Signup from './pages/Signup.jsx';
 import Login from './pages/login.jsx';
 import Profile from './pages/Profile.jsx';

const App = () => {
  console.log('Hello from React!')
  return (
    <div className='bg-[#EDEFE1] min-h-screen'>
     
      <Navbar/>
 <Routes>
   <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup />} />
   <Route path="/profile" element={<Profile />} />
 </Routes>
      
    </div>
  )
}

export default App
