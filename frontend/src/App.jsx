import React from 'react'
import './App.css'
 import { Routes, Route } from 'react-router-dom';
 import Navbar from './common/Navbar.jsx';
 import Home from './pages/HomePage.jsx'
 import Signup from './pages/Signup.jsx';
 import Login from './pages/login.jsx';
 import Profile from './pages/Profile.jsx';
 import Footer from './common/Footer.jsx'
 import Dashbord from '../userPages/Dashbord.jsx';

const App = () => {
  console.log('Hello from React!')
  return (
    <div className='bg-[#EDEFE1] min-h-screen'>
     
      <Navbar/>
 <Routes>
  <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup />} />
   <Route path="/profile" element={<Profile />} />


   {/* userroutes */}
   <Route path='/Dashboard' element={<Dashbord/>}></Route>


 </Routes>
 <Footer/>
      
    </div>
  )
}

export default App
