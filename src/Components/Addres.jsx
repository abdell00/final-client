import React, { useState } from 'react';
import Footer from '../page/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addres = () => {
  const [Name, setName] = useState('');
  const [Local, setLocal] = useState('');
  const [type, settype] = useState('');
  const [description, setdescription] = useState('');
  const [RestoPic, setRestoPic] = useState(null);
  const [Tabel, setTabel] = useState('');
  const [menu, setmenu] = useState('');
  const [owner, setowner] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  
  const navigate = useNavigate();

  const addRestaurant = async () => {
 
    if (!Name || !Local || !type || !Phonenumber || !email || !password) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!RestoPic) {
      alert('Please upload an image.');
      return;
    }

    try {
     
      let imageData = new FormData();
      imageData.append('RestoPic', RestoPic);
      const res = await axios.post('http://localhost:4000/auth/restau/addimg', imageData);
      const url = res.data?.url;


      const result = await axios.post("http://localhost:4000/auth/restau/register", {
        Name,
        Local,
        email,
        Phonenumber,
        type,
        url,
        password,
        menu,
        description,
        Tabel,
        owner,
      });

      if (result.data) {
        navigate('/restologin');
      } else {
        alert('Registration failed.');
      }
  
} catch (err) {
  console.log(err);
  res.status(500).json({ error: err?.message });
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
     <label class="mb-1 block py-7 pr-4  font-extrabold text-lg text-gray-900 md:mb-0 md:text-right" for="inline-full-name"> RESTAURANT FORME </label>
          
       <form class="w-full grid grid-cols-2 gap-8   px-10">
         <div class="mb-6 md:flex gap-5 p-[1] md:items-center">
           <div class="md:w-1/3 ">
             <label class="mb-1 block  pr-4 font-bold text-gray-500 md:mb-0 md:text-right" for="inline-full-name"> RESTAURANT NAME </label>
           </div>
           <div class="md:w-2/3">
             <input
              onChange={e => setName(e.target.value)}
             placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text" />
           </div>
         </div>
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold  text-gray-500 md:mb-0 md:text-right"> RESTAURANT LOCAL </label>
           </div>
           <div class="md:w-2/3">
             <input
               onChange={e => setLocal(e.target.value)}
             placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text"  />
           </div>
         </div>
    
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> RESTAURANT TYPE </label>
           </div>
           <div class="md:w-2/3">
             <input
              onChange={e => settype(e.target.value)}
             placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text"  />
           </div>
         </div>
       
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> RESTAURANT DESCRIPTION </label>
           </div>
           <div class="md:w-2/3">
             <textarea
              onChange={e => setdescription(e.target.value)}
             placeholder='*********' class="w-full h-12 appearance-none rounded border-2 font-semibold border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text" ></textarea>
           </div>
         </div>
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             
             <label  class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> RESTAURANT image </label>
           </div>
           <div class="md:w-2/3 w-full appearance-none rounded border-2 border-green-200 px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:outline-none focus:bg-white cursor-pointer">
    <input 
    onChange={e => setRestoPic(e.target.files[0])}
    class="hidden" type="file" id="files" />
    <label class="font-semibold text-gray-700" for="files">Upload image</label>
    </div>
    
         </div>
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> RESTAURANT Tabel Avaible </label>
           </div>
           <div class="md:w-2/3">
           <input
            onChange={e => setTabel(e.target.value)}
           placeholder='*********' class="w-full h-12 appearance-none rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400  focus:bg-white focus:outline-none" type="text"  />
         </div>
         </div>
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> RESTAURANT  menu </label>
           </div>
           <div class="md:w-2/3">
           <input
            onChange={e => setmenu(e.target.value)}
           placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text"  />
         </div>
         </div>
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> RESTAURANT  owner </label>
           </div>
           <div class="md:w-2/3">
           <input
            onChange={e => setowner(e.target.value)}
           placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text"  />
         </div>
         </div>
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label
             class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> RESTAURANT Phonenumber </label>
           </div>
           <div class="md:w-2/3">
             <input 
              onChange={e => setPhonenumber(e.target.value)}
             placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text" />
           </div>
         </div>
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> RESTAURANT Email </label>
           </div>
           <div class="md:w-2/3">
             <input
              onChange={e => setemail(e.target.value)}
             placeholder='*********' class="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200  px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none" type="text" />
           </div>
         </div>
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> password </label>
           </div>
           <div class="md:w-2/3">
           <input
    onChange={(e) => setpassword(e.target.value)}
    placeholder='*********'
    className="w-full h-12 appearance-none font-semibold rounded border-2 border-green-200 px-4 py-2 leading-tight text-gray-700 focus:border-green-400 focus:bg-white focus:outline-none"
    type="password"
    />
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
             onClick={addRestaurant}
             class="focus:shadow-outline rounded bg-green-400 px-4 py-2 font-bold text-white shadow hover:bg-green-500 border-pink-300 border-spacing-3 focus:outline-none" type="button" >ADD RESTAURANT</button>
           <button
             className="font-mono text-pink-300 my-5  hover:text-pink-700 "
             onClick={() => navigate('/restologin')}
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
  );
};

export default Addres;


