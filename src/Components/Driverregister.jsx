import React, { useState } from 'react';
import Footer from '../page/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Driverregister = () => {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [DriverID, setDriverID] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [IdentificationCard, setIdentificationCard] = useState('');
  const [facePic, setfacePic] = useState(null);
  const [car, setcar] = useState('');
  const [experience, setexperience] = useState('');
  const [carimg, setcarimg] = useState(null);

  const navigate = useNavigate();

  const register = async () => {
    try {
      
      let imageData = new FormData();
      imageData.append('facePic', facePic);
      const res = await axios.post('http://localhost:4000/Drivers/addimg', imageData);
      const url = res.data?.url;


      
      const result = await axios.post('http://localhost:4000/Drivers/register', {
        Firstname,
        Lastname,
        DriverID,
        email,
        Phonenumber,
        IdentificationCard,
        password,
        facePic,
        car,
        experience,
        //carimg: carimgUrl,
      });
  
      if (result.data) {
        alert('Registration successful.');
        navigate('/restologin');
      } else {
        alert('Registration failed.');
      }
    } catch (err) {
      console.log(err)
      alert('something went wrong')
    }
  };

  return (
    <div className=' '>
    
    <div className='relative p-20 z-10'>
       <span className="group absolute bottom-80 right-96 bg-green-50 w-1/5  h-screen my-5 rounded-b-full" />
       <span className="group absolute top-96 left-96  right-96 bg-green-400 w-1/5  h-screen my-5 rounded-full" />
       <span className="group absolute top-96 left-0 bg-pink-300 w-1/5  h-screen my-5 rounded-r-full" />
       <span className="group absolute top-36  right-60  bottom-2/4   bg-pink-100 w-1/5  h-screen my-5 rounded-full" />
     </div>
       <div class="flex flex-col items-center justify-center p-44 m-24">
         
    <div class="card bg-slate-50/75 text-gray-300 w-2/3  border-green-50 mt-20 transition-all cursor-pointer group bg-gradient-to-tl   border-r-2 border-t-2 absolute z-30 m-4 rounded-lg overflow-hidden ">
    <div class=" ">
     
     <div class="mt-7 flex flex-col items-center justify-center">
     <label class="mb-1 block py-7 pr-4  font-extrabold text-lg text-gray-900 md:mb-0 md:text-right" for="inline-full-name"> 
     DRIVER FORME </label>
          
       <form class="w-full grid grid-cols-2 gap-8   px-10">
         <div class="mb-6 md:flex gap-5 p-[1] md:items-center">
           <div class="md:w-1/3 ">
             <label class="mb-1 block  pr-4 font-bold text-gray-500 md:mb-0 md:text-right" for="inline-full-name"> Firstname </label>
           </div>
           <div class="md:w-2/3">
             <input
             onChange={e => setFirstname(e.target.value)}
             placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text" />
           </div>
         </div>
         <div class="mb-6 md:flex gap-5 p-[1] md:items-center">
           <div class="md:w-1/3 ">
             <label class="mb-1 block  pr-4 font-bold text-gray-500 md:mb-0 md:text-right" for="inline-full-name"> Lastname </label>
           </div>
           <div class="md:w-2/3">
             <input
             onChange={e => setLastname(e.target.value)}
             placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text" />
           </div>
         </div>
        
    
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> DriverID </label>
           </div>
           <div class="md:w-2/3">
             <input
             onChange={e => setDriverID(e.target.value)}
             placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text"  />
           </div>
         </div>
       
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> Email </label>
           </div>
           <div class="md:w-2/3">
             <input
             onChange={e => setemail(e.target.value)}
             placeholder='*********' class="w-full h-12 appearance-none rounded border-2 font-semibold border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text" />
           </div>
         </div>
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             
             <label  class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> facePic </label>
           </div>
           <div class="md:w-2/3 w-full appearance-none rounded border-2 border-green-200 px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:outline-none focus:bg-white cursor-pointer">
    <input 
   onChange={e => setfacePic(e.target.files[0])}
    class="hidden" type="file" id="files" />
    <label class="font-semibold text-gray-700" for="files">Upload image</label>
    </div>
    
         </div>
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> Phonenumber </label>
           </div>
           <div class="md:w-2/3">
           <input
            onChange={e => setPhonenumber(e.target.value)}
           placeholder='*********' class="w-full h-12 appearance-none rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400  focus:bg-white focus:outline-none" type="text"  />
         </div>
         </div>
      
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> Identification Card </label>
           </div>
           <div class="md:w-2/3">
           <input
          onChange={e => setIdentificationCard(e.target.value)}
           placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text"  />
         </div>
         </div>
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> CAR description </label>
           </div>
           <div class="md:w-2/3">
           <input
          onChange={e => setcar(e.target.value)}
           placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text"  />
         </div>
         </div>
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label
             class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> EXPERIENCE  </label>
           </div>
           <div class="md:w-2/3">
             <input 
              onChange={e => setexperience(e.target.value)}
             placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text" />
           </div>
         </div>
         {/*
         <div class="mb-6 md:flex md:items-center">
           <div class="md">
             <label
             class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> CAR IMAGE  </label>
           </div>
           <div class="md:w-2/3 w-full appearance-none rounded border-2 border-green-200 px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:outline-none focus:bg-white cursor-pointer">
             <input 
              onChange={e => setcarimg(e.target.files)}
             
    class="hidden" type="file" id="files" />
    <label class="font-semibold text-gray-700" for="files">Upload image</label></div>
         </div>*/ }
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label
             class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> PASSWORD  </label>
           </div>
           <div class="md:w-2/3">
             <input 
              onChange={e => setpassword(e.target.value)}
             placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text" />
           </div>
         </div>
        
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3"></div>
         </div>
         <div class="md:flex md:items-center">
           <div class="md:w-1/3"></div>
         
         </div>
         
       </form>
       <div class="md:w-2/3 flex  flex-col justify-center mb-5 items-center">
             <button
             
             class="focus:shadow-outline rounded bg-green-400 px-4 py-2 font-bold text-white shadow hover:bg-green-500 border-pink-300 border-spacing-3 focus:outline-none" type="button" 
             onClick={register}>REGISTER AS DRIVER</button>
           <button
             className="font-mono text-pink-300 my-5  hover:text-pink-700 "
             onClick={() => navigate('/driverslogin') 
            }
           >
             already have an account!
           </button>
           </div>
     </div>
    
    </div>
    </div>
    </div>
    <div className='z-20 relative'>
    <Footer  ></Footer>
    </div>
    </div>
  )
}

export default Driverregister