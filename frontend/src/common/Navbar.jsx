import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/image.png"
import ProfileDropdown from './ProfileDropDown';
import { Navbarlinks } from '../data/NavbarData';

function Navbar() {
  return (
    <div className='w-full h-20 bg-[#BBDCE5] flex justify-between items-center px-4'> 
    <div>
      <img src={logo} alt='logo' className='min-w-24 h-24 rounded-2xl'></img>
    </div>
     
       <div className='flex gap-6 mr-48'>
        {Navbarlinks.map((element, index) => (
          <Link 
            key={index} 
            to={element.path} 
            className="hover:text-yellow-400 transition"
          >
            {element.title}
          </Link>
        ))}
      </div>


      <div className='flex flex-row items-center gap-8 mr-10'>
        <ProfileDropdown/>
     </div>
    
    </div>
  )
}

export default Navbar