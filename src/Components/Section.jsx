import React, { useEffect, useState } from 'react'
import Footer from '../page/Footer';
import { useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { useAuth } from '../Store/authstore'
const Section = () => {
  const navigate = useNavigate()
  const [restau, setRestau] = useState([]);
  
  const { auth } = useAuth()
  const getRestau = async () => {
    try {
      const res = await axios.get('http://localhost:4000/auth/restau/all', {
        headers: {
          Authorization: auth.token,
        },
      });
      if (!res.data.msg) {
        console.log(res.data);
        setRestau(res.data);
      } else {
        console.error('No data received from the server.');
      }
    } catch (err) {
      console.error('Error fetching data:', err.message);
    }
  };
    
    



  useEffect(() => {
    getRestau();
  }, []);
  return (
    <div>
    <div className='bg-fixed z-20'>
<span className="group absolute bottom-80 right-96 bg-green-50 w-1/5  h-screen my-5 rounded-b-full" />
<span className="group absolute top-96 left-96  right-96 bg-green-400 w-1/5  h-screen my-5 rounded-full" />
<span className="group absolute top-96 left-0 bg-pink-300 w-1/5  h-screen my-5 rounded-r-full" />

<span className="group absolute top-36  right-60  bottom-2/4   bg-pink-100 w-1/5  h-screen my-5 rounded-full"  />
  

</div>

       <div>
        
    <section>
    <nav className="mx-9  bg-green-50 border-none rounded-full border-2 mt-1 relative p-5  z-30 ">
    
<div className="flex items-center justify-between">
  
  <ul className="flex gap-7 text-lg font-semibold">
    <li onClick={() => navigate('/makereservation')}  className="cursor-pointer hover:text-green-400">MAKE A RESERVATION</li>

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
<section className='relative  '>

 




<div className="mt-7  mx-5  flex gap-4 ">
 <div className=' flex justify-between gap-7'>
 <div className=" relative w-1/3 z-10 row-span-3">
 <div className='p-3  py-5 pt-10    mx-10 w-full rounded-xl shadow-md '>
    <div className="flex mx-4 w-1/3  gap-1">
      <div className=" ">
        <span className="bg-green-100 inline-block center w-3 h-3 rounded-full" />
      </div>
      <div className="circle">
        <span className="bg-green-300 inline-block center w-3 h-3 rounded-full" />
      </div>
      <div className="circle">
        <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full" />
      </div>
    </div>
    <div className="card__content py-7 mt-10">
      <div className="flex flex-col items-center mx-5 gap-6">
        <h1 className="text-center text-2xl font-bold ">Make special memories</h1>
        <div>
        <p className='font-semibold text-lg '>
        Our integrated services offer seamless luxury, with professional drivers ensuring a smooth journey and restaurant partnerships guaranteeing exceptional dining experiences. Together, we create unforgettable moments for you, blending exceptional transportation and dining.</p>
 
        </div>
      </div>
    </div>
  </div>
  {restau.map((n) => (
                  <div  className="group mx-10 cursor-pointer overflow-hidden relative text-gray-50 mt-8 p-[1] w-1/2 rounded-2xl hover:duration-700 duration-700">
                    <div className="w-56 h-72 flex items-center justify-center text-gray-800">
                      <div className="flex flex-row">
                        <img src={n.RestoPic} alt="Restaurant Image" className='rounded-xl' />
                      </div>
                    </div>
                    <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                      <span className="text-lime-400 font-bold text-xs">{n.Name}</span>
                      <span className="text-gray-800 font-bold text-3xl">dispo table now : {n.Tabel}</span>
                      <p className="text-neutral-800 hover:text-pink-300">make a reservation </p>
                    </div>
                  </div>
                ))}
  
  </div>
  
   
  
  <div className='w-1/3 mx-10 flex-initial gap-5 '>
  <div className='grid grid-cols-2 gap-2' >
    <img
      src="https://mamounia.com/media/cache/jadro_resize/rc/qFioXGMR1706018528/jadroRoot/medias/653fcee154467/653fd5fb4a6e3/653fd789ea079/bar-majorelle-bar.jpeg"
      className='h-auto w-full col-span-2 rounded-3xl object-cover'
      alt="Special Memories"
    />
    <div className='flex gap-3'>
      <img
        className='w-full h-auto rounded-xl object-cover'
        src="https://mamounia.com/media/cache/jadro_resize/rc/j5lmgIbV1706018511/jadroRoot/medias/611cabf4dfa80/611cd24dd0037/mamounia_ajm_poolbar_hd.jpg"
        alt=""
      /> 
      <img
        className='w-full h-auto  rounded-xl object-cover'
        src="https://mamounia.com/media/cache/jadro_resize/rc/yKIs0gj71706018525/jadroRoot/medias/653fcee154467/653fcef9a050a/653fcf0f34061/653fcf2e36e88/l-italien-par-jean-georges-exterieurs-1-.jpeg" alt="" />
    </div>
    <img
      className='w-full h-auto col-span-2 rounded-xl object-cover'
      src="https://www.royalmansour.com/wp-content/uploads/2023/10/RM-marrakech-gallery-112.jpg"
      alt=""
    />
    <img
      className='w-full h-auto col-span-2  rounded-xl object-cover'
      src="https://mamounia.com/media/cache/jadro_resize/rc/oFBse0TT1706018527/jadroRoot/medias/653fcee154467/653fcef9a050a/restaurant-l-asiatique-par-jean-georges-01-.jpeg"
      alt=""
    />
    <img
      className='w-full h-auto  rounded-xl object-cover'
      src="https://dgbbszqt.elementor.cloud/wp-content/uploads/2021/01/restaurant-a-marrakech.jpeg"
      alt=""
    />
    <img
      className='w-full h-auto  rounded-xl object-cover'
      src="https://dgbbszqt.elementor.cloud/wp-content/uploads/2021/01/cuisine-marocaine-marrakech.jpeg"
      alt=""
    />
  </div>
  <div className='grid grid-cols-1 gap-2  ' >
    <img
      src="http://luxuryinmarrakech.com/wp-content/uploads/2022/12/Downloader.la-639077f108a01.jpg"
      className='h-35 w-45 col-span-2 rounded-3xl object-cover'
      alt=""
    />
  
    <img
      className='w-45 h-35 col-span-3  rounded-xl object-cover'
      src="https://luxuryrideusa.com/wp-content/uploads/2023/04/Luxury-Ride-NYC-Chauffeur-service-1920x750-min.jpg"
      alt=""
    /> 
    <img
      className='w-45 h-35  col-span-2 rounded-xl object-cover'
      src="https://www.imperialride.com/images/business-chauffeur/business-meetings2.jpg" alt="" />
    
    <img
      className='w-45 h-35 col-span-2 rounded-xl object-cover'
      src="https://mbktaxi.com/wp-content/uploads/2023/05/why-us-3.webp"
      alt=""
    />
  </div>
</div>
 </div>
  
 
</div>
</section>


    </section>
    
   <Footer/>
   </div>
  </div>
  
  
  )
}

export default Section