import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import Footer from '../page/Footer';

const Food = () => {
    const navigate = useNavigate()
  return (
    <div>
      
      <nav className="mx-9 z-20 bg-green-50  border-green-400/35 rounded-full border-2 mt-5">
<div className="flex items-center justify-between">
  
  <ul className="flex gap-7 text-lg font-semibold">
   
    <li onClick={() => navigate('/rideboking')} className="cursor-pointer hover:text-green-400">BOOK A RIDE</li>
 
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
        <div className='relative mb-16 z-10'>
        <span className="group absolute bottom-80 right-96 bg-green-50 w-1/5  h-screen my-5 rounded-b-full" />
        <span className="group absolute top-96 left-96  right-96 bg-green-400 w-1/5  h-screen my-5 rounded-full" />
        <span className="group absolute top-96 left-0 bg-pink-300 w-1/5  h-screen my-5 rounded-r-full" />
        <span className="group absolute top-36  right-60  bottom-2/4   bg-pink-100 w-1/5  h-screen my-5 rounded-full" />
      </div>
      <div className='flex  justify-between items-center gap-7 mx-3 z-20 relative mt-8'>
            <div className=''>
                <img className='rounded-lg' src="https://cdn.dribbble.com/users/39753/screenshots/14410895/media/68676feefc1b807568fcb70f4963dcd9.png?resize=1200x900&vertical=center" alt="" />
            </div>
        <div className="service-card w-1/3 shadow-xl mr-16 cursor-pointer snap-start shrink-0 py-8 px-6 bg-green-300 flex flex-col items-start gap-3 rounded-xl transition-all duration-300 group hover:bg-[#76a975]">
  <svg
    fill="#000000"
    width="123px"
    height="123px"
    viewBox="-84.79 -84.79 292.46 292.46"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ enableBackground: "new 0 0 122.88 73.91" }}
    xmlSpace="preserve"
    stroke="#000000"
    strokeWidth="0.0012288"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      {" "}
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: "  .st0{fill-rule:evenodd;clip-rule:evenodd;}  "
        }}
      />{" "}
      <g>
        {" "}
        <path
          className="st0"
          d="M97.31,36.95c0,9.92-3.49,18.39-10.48,25.38c-7,7-15.46,10.5-25.38,10.5c-9.88,0-18.34-3.49-25.35-10.5 c-7-6.99-10.52-15.46-10.52-25.38c0-9.89,3.51-18.32,10.52-25.34c7.03-7,15.48-10.52,25.35-10.52c9.92,0,18.38,3.51,25.38,10.52 C93.81,18.63,97.31,27.06,97.31,36.95L97.31,36.95L97.31,36.95L97.31,36.95z M16.37,30.34c3.15-2.15,4.73-4.96,4.46-11.39V2.42 c-0.03-2.31-4.22-2.59-4.43,0l-0.16,13.41c-0.01,2.51-3.78,2.59-3.77,0l0.16-13.87c-0.05-2.48-4.05-2.73-4.1,0 c0,3.85-0.16,10.02-0.16,13.87c0.2,2.43-3.3,2.75-3.21,0L5.32,2.05C5.23,0.18,3.17-0.49,1.77,0.39C0.28,1.34,0.58,3.25,0.52,4.86 L0,20.68c0.08,4.6,1.29,8.34,4.89,9.93c0.55,0.24,1.31,0.43,2.19,0.56L5.84,69.75c-0.07,2.29,1.8,4.16,3.99,4.16h0.5 c2.47,0,4.56-2.11,4.49-4.68l-1.09-38.07C14.88,30.98,15.83,30.71,16.37,30.34L16.37,30.34z M106.74,68.59l-0.06-34.65 c-12.15-7.02-8.28-34.07,3.88-33.92c14.78,0.17,16.53,30.48,3.82,33.81l0.94,34.9C115.5,75.33,106.75,75.94,106.74,68.59 L106.74,68.59z M82.33,36.92c0,5.78-2.03,10.71-6.12,14.8c-4.08,4.07-9.01,6.12-14.79,6.12c-5.74,0-10.67-2.05-14.75-6.12 c-4.08-4.09-6.12-9.02-6.12-14.8c0-5.74,2.04-10.67,6.12-14.74c4.09-4.07,9.01-6.12,14.75-6.12C73.03,16.07,82.33,25.3,82.33,36.92 L82.33,36.92L82.33,36.92z M87.22,36.92c0-7.1-2.5-13.17-7.53-18.2s-11.12-7.53-18.27-7.53c-7.13,0-13.2,2.5-18.2,7.53 c-5.03,5.03-7.56,11.1-7.56,18.2c0,7.12,2.53,13.19,7.56,18.24c5,5.04,11.07,7.57,18.2,7.57c7.14,0,13.23-2.53,18.27-7.57 C84.71,50.1,87.22,44.03,87.22,36.92L87.22,36.92L87.22,36.92L87.22,36.92z"
        />{" "}
      </g>{" "}
    </g>
  </svg>
  <p className="font-bold text-2xl group-hover:text-white text-black/80">
    our restaurant partners
  </p>
  <p className="text-gray-700 text-sm">
    Trust, quality, service, organization and experience all this and more is a
    reason for a pleasant experience with&nbsp;our&nbsp;partnersne.
  </p>
  <p
    style={{ WebkitTextStroke: "1px gray", WebkitTextFillColor: "transparent" }}
    className="text-5xl font-bold self-end"
  >
    01
  </p>
  <button
  className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#a97596] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
  BOOK
</button>

</div>
</div>
</section>
<div className='relative z-20'>
<Footer/></div>
    </div>
  )
}

export default Food