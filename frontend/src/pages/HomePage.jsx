import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../assets/mentorBanner1.png'
import {homeData} from '../data/HomePageData'

function HomePage() {
  return (
    <div>
        <div>
            <img src={Banner} alt='homePage' className='w-full h-[600px]'></img>
        </div>
        <div className='text-center mt-10 px-20 '>
            <h1 className='text-4xl font-bold text-[#4FB7B3]'>Core Features</h1>
            <p className='text-xl font-semibold text-gray-900'>Elevate your journey with Mentorify. Find the right mentor for strategic advice and encouragement, gaining <br></br>
                real-world wisdom to accelerate your progress and build the future you envision.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 px-20 '>
      {homeData.map((item,index)=>(
        <div key={index} className='bg-[#D9C4B0] rounded-md p-4'>
            <div className='text-4xl text-[#4FB7B3] mb-5'>{item.icon}</div>
            <h1 className='text-xl font-bold text-gray-900 mb-3'>{item.title}</h1>
            <p className='text-md font-semibold text-gray-900'>{item.info}</p>
        </div>
      ))} 

        </div>
        <div className=' flex-col items-center py-4 text-center mt-10 px-20 '>
        <h1 className='text-4xl font-bold text-[#4FB7B3] text-center mt-10'>Ready To Connect?</h1>
        <p>Join mentor connect today and start your journey towards professional success</p>
       <Link to={"/mentors"}> <button className='bg-blue-400 px-7 py-3 rounded-md text-xl font-bold text-white '>Get Mentor</button>
      </Link>
       
         </div>
    </div>
  )
}

export default HomePage