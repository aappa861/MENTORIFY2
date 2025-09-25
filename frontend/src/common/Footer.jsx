import React from 'react'
import {footerData} from '../data/FooterData'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GrSteps } from "react-icons/gr";


function Footer() {
  return (
     <footer className="bg-[#9CAFAA] text-white px-6 py-12 ">
 
  <div className="max-w-screen-xl mx-auto flex flex-col gap-12"> 
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12">
    
      <div className="text-center md:text-left"> 
        <h1 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2 text-[#134686] hover:text-yellow-200 transition-colors cursor-pointer">
          <GrSteps className="text-3xl" /> MENTOR_CONNECT
        </h1>
        <h2 className="text-lg font-medium mt-2 text-white/90">
          Connecting ambition with experience
        </h2>
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-8 text-center md:text-left"> 
        {footerData.map((element, index) => (
          <div key={index}>
            <h3 className="font-bold text-yellow-100 mb-3 text-lg">
              {element.title}
            </h3>
            <ul className="space-y-2">
              {element.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="text-white/80 hover:text-yellow-200 transition-colors cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

     
      <div className="flex justify-center md:justify-start gap-6 text-2xl"> {/* Align left on medium screens */}
        <a href="https://facebook.com" className="hover:text-yellow-200 transition-colors">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" className="hover:text-yellow-200 transition-colors">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" className="hover:text-yellow-200 transition-colors">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" className="hover:text-yellow-200 transition-colors">
          <FaLinkedinIn />
        </a>
      </div>
    </div>

   
    <div className="mt-12 border-t border-white/30 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
      <h3 className="font-bold text-yellow-100">
    🗿Contact us mentorify@gamil.com
      </h3>
      <p className="mt-2 md:mt-0 text-gray-600">All rights reserved</p>
    </div>
  </div> 
</footer>
  )
}

export default Footer