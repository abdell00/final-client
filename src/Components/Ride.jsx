import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Footer from '../page/Footer';


const Ride = () => {
  
  const navigate = useNavigate()
  return (
    <div>
  <nav className="mx-9  bg-green-50  border-green-400/35 rounded-full border-2 mt-5">
  <div className="flex items-center justify-between">
    
    <ul className="flex gap-7 text-lg font-semibold">
      <li onClick={() => navigate('/makereservation')} className="cursor-pointer hover:text-green-400">MAKE A RESERVATION</li>
     
      <li className="cursor-pointer hover:text-green-400" onClick={() => navigate('/FAQ')}>FAQ</li>
    </ul>
    <div  className='flex justify-center items-center'>
    <div className='flex relative'>
    <button className="italicborder-solid rounded-full border-2 border-black p-4 text-xl font-medium hover:bg-black hover:text-white " onClick={() => navigate('/login')}>LOG IN</button>
    <span className="absolute top-0 bottom-0 left-20 mt-2 ml-2 flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-200 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
 </span>
</div>
<span className="mx-1"></span> 
<div className='flex relative'>
  <button className="rounded-full bg-black p-4 text-xl font-medium italic text-white hover:bg-white hover:text-black" onClick={() => navigate('/Register')}>
    SIGN IN
  </button>
  <span className="absolute top-0 bottom-0 left-20 mt-2 ml-2 flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-200 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
  </span>
</div>
</div>

  </div>
</nav>
<section >
<div className='relative  z-10'>
        <span className="group absolute bottom-80 right-96 bg-green-50 w-1/5  h-screen my-5 rounded-b-full" />
        <span className="group absolute top-48 left-96  right-96 bg-green-400 w-1/5  h-screen my-5 rounded-full" />
        <span className="group absolute top-32 left-0 bg-pink-300 w-1/6  h-screen my-5 rounded-r-full" />
        <span className="group absolute top-5   right-16    bg-pink-100 w-1/5  h-screen my-5 rounded-full" />
      </div>
        <div className="flex mt-8 justify-evenly items-center  z-20 relative mx-4 gap-7">
        <img className='w-1/2  rounded-xl object-cover' src= "https://cdn.dribbble.com/users/542624/screenshots/2400307/media/7a138270bcc92833d9d9d468a07d3fa2.png?resize=800x600&vertical=center" alt="" />
        
        <div className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-slate-900  hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
  <div
    className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-slate-700"
    alt="image here"
  />
  <div className="">
    <p className="text-white
      text-xl font-semibold">
    Our driver takes the task of delivering you from your place of residence to your place of reservation with full respect for all quality standards
    </p>
  </div>
  <button className="relative border hover:border-red-900 duration-500 group cursor-pointer ml-7 text-white overflow-hidden h-14 mt-7 w-56 rounded-md bg-pink-50 p-2 flex justify-center items-center font-extrabold">
    <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-pink-100 delay-150 group-hover:delay-75" />
    <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-pink-200 delay-150 group-hover:delay-100" />
    <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-pink-300 delay-150 group-hover:delay-150" />
    <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-pink-400 delay-150 group-hover:delay-200" />
    <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-pink-500 delay-150 group-hover:delay-300" />
    <p className="z-10">Discover More</p>
  </button>
</div>


        </div>
           
       
        
       
      </section>
      <div className='relative h-auto  z-30'>
<Footer/></div>
     
    </div>
  )
}

export default Ride