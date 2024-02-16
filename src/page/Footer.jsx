import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div>
         <footer>
    <div className='flex gap-32 justify-between absolute bg-gray-200 px-40 pt-10 items-center  rounded-2xl pb-9 mt-80'>
      <div className='flex flex-col items-center justify-center gap-3 mb-4'>
          <p className='font-bold'>contact</p>
          <div className='flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" dataSlot="icon" className="w-6 h-6">
<path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>
<p>123 Marrakech ,</p>
          </div>
          <div className='flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" dataSlot="icon" className="w-6 h-6">
<path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
</svg>
<p>+1737638292969</p>
          </div>
          <div className='flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
<p>jgsvsdvdyu@gmail.com</p>
          </div>

      </div>
      <div className='flex flex-col justify-center items-center'>
          <p className='font-bold mb-6'>Quick link</p>
        <div className='flex gap-4 '>
        <button className='font-semibold'>Home</button>
          <button  className='font-semibold'>About</button>
          <button className='font-semibold'>Services</button>
          <button className='font-semibold'>contact</button>
          <button  onClick={() => navigate('/addres')} className='font-semibold'>join us as a restorant</button>
        </div>
          
      </div>
      <div >
     <p className='font-bold mb-6'>social media</p>
     <div className='flex gap-4'>
     <button>
     <FaFacebookSquare />
     </button>
    
     <button>
     <FaInstagramSquare />
   
     </button>
     <button>
     <FaYoutubeSquare />
     </button>
     </div>
     </div>
  </div>
    </footer>
    </div>
  )
}

export default Footer