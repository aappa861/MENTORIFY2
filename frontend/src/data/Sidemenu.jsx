import { CgProfile } from "react-icons/cg";
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import {  MdAddBox, MdDashboard, MdMonitor } from "react-icons/md";



export const userMenu = [
    { id: "profile", icon: <CgProfile />, label: "Profile", path: "/Dashboard" },
    { id: "Watchlist", icon: <BsFillCartPlusFill />, label: "Add", path: "/student/watchlist" },
    { id: "setting", icon: <IoIosSettings />, label: "Setting", path: "/student/setting" },
   
  ];

 export  const mentorMenu = [
    { id: "profile", icon: <CgProfile />, label: "My Profile", path: "/Dashboard" },
    { id: "dashboard", icon: <MdDashboard />, label: "Dashboard", path: "/instructor/InDashboard" },
    { id: "addSesion", icon: <MdAddBox />, label: "Add Sesion", path: "/instructor/AddSesion" },
     { id: "setting", icon: <IoIosSettings />, label: "Setting", path: "/student/setting" },
   
  ];