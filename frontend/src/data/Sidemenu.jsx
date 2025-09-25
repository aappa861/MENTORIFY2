import { CgProfile } from "react-icons/cg";
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import {  MdAddBox, MdDashboard, MdMonitor } from "react-icons/md";
import { SlUserFollow } from "react-icons/sl";



export const userMenu = [
    { id: "Dashboard", icon: <CgProfile />, label: "DashBoard", path: "/Dashboard" },
    { id: "Watchlist", icon: <SlUserFollow />, label: "Watchlist", path: "/user/watchlist" },
    { id: "setting", icon: <IoIosSettings />, label: "Setting", path: "/user/setting" },
   
  ];

 export  const mentorMenu = [
    { id: "profile", icon: <CgProfile />, label: "My Profile", path: "/Dashboard" },
    { id: "dashboard", icon: <MdDashboard />, label: "Dashboard", path: "/mentors/InDashboard" },
    { id: "addSesion", icon: <MdAddBox />, label: "Add Session", path: "/mentors/AddSession" },
     { id: "setting", icon: <IoIosSettings />, label: "Setting", path: "/mentors/setting" },
   
  ];