
import React, { useState, useRef, useEffect, useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { CiLogin, CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { IoPerson } from "react-icons/io5";

function ProfileDropDown() {
const { auth, setAuth } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



     const logoutHandler = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    setAuth({ email: null, token: null, address: null });
   // alert("Logout successful");
    setIsOpen(false);
  };
  return (
    <div> 
         <CgProfile
        className="text-3xl cursor-pointer hover:text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      />
        
        
         {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <ul className="py-1">
            {!auth?.email && (
              <li>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex flex-row items-center gap-1"
                  onClick={() => setIsOpen(false)}
                >
                  <CiLogin />
                  Login
                </Link>
              </li>
              
            )}
        <li>
                  <Link to={"/profile"}>
                  
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex flex-row items-center gap-1" >
                    <IoPerson />
                    My Profile
                  </button>
                  </Link>
                </li>

            {auth?.email && (
              <>
                
                <li>
                  <button
                    onClick={logoutHandler}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex flex-row items-center gap-1"
                  >
                    <CiLogout />
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}</div>
  )
}

export default ProfileDropDown