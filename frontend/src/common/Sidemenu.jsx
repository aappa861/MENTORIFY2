import React,{useState,useEffect} from 'react'
import {userMenu,mentorMenu} from '../data/Sidemenu'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Sidemenu() {
    const { accountType, logout } = useContext(AuthContext); 
     const menuItems = accountType === "Mentor" ? mentorMenu : userMenu;

  const [active, setActive] = useState("profile");

 
  useEffect(() => {
    const current = menuItems.find(item => location.pathname.startsWith(item.path));
    if (current) setActive(current.id);
  }, [location.pathname]);
  return (
<div className="flex flex-col bg-[#D9C4B0] w-[240px] h-[100vh] py-10 gap-2"> 
  {menuItems.map((item, index) => (
    <div
      key={index}
      className={`
        flex flex-row text-richblack-800 text-lg font-medium font-inter items-center
        px-8 py-3 gap-3 cursor-pointer transition-all duration-200 ease-in-out
        ${active === item.id 
          ? "bg-[#F3EADF] text-richblack-900 border-l-4 border-[#B08968] font-semibold shadow-sm" 
          : "hover:bg-[#EAE0D3] hover:text-richblack-900" 
        }`}
      onClick={() => {
        setActive(item.id);
        if (item.action) item.action();
      }}
    >
      {!item.action ? (
        <Link to={item.path} className="flex flex-row items-center gap-2 w-full">
          {item.icon}
          {item.label}
        </Link>
      ) : (
        <button className="flex flex-row items-center gap-2 w-full text-left">
          {item.icon}
          {item.label}
        </button>
      )}
    </div>
  ))}
</div>
  )
}

export default Sidemenu