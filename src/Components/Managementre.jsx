import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useAuth } from '../Store/authstore'
import Footer from '../page/Footer';


const Managementre = () => {
  const { auth } = useAuth()
  const { logout } = useAuth();

  const [isPopupVisible, setPopupVisible] = useState(false);
  
    const [type, settype] = useState('')
    const [description, setdescription] = useState('')
    const [RestoPic, setRestoPic] = useState(null);
    const [Tabel, setTabel] = useState('')
    const [menu, setmenu] = useState('')
 
    const [Phonenumber, setPhonenumber] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [restau, setRestau] = useState([]);
     
    const togglePopup = () => {
      setPopupVisible(!isPopupVisible);
    };
    
    const getRestau = async () => {
        try {
          const res = await axios.get('http://localhost:4000/auth/restau/register', {
            headers: {
              Authorization: auth.token,
            },
          });
          if(!res.data.msg) {
            console.log(res.data)
            setRestau(res.data);
            settype(res.data.type)
            setdescription(res.data.description)
          
            setTabel(res.data.Tabel)
            setmenu(res.data.menu)
            setPhonenumber(res.data.Phonenumber)
            setemail(res.data.email)
            setpassword(res.data.password)


          } else {
            console.error('No data received from the server.');
          }
        } catch (err) {
          console.error('Error fetching data:', err.message);
        }
      };
      const handleSubmit = async (e) => {
        try {
          let imageData = new FormData();
          imageData.append('RestoPic', RestoPic);
          const imgUploadResponse = await axios.post('http://localhost:4000/auth/restau/addimg', imageData);
          const imgUrl = imgUploadResponse.data?.url;
      
         
          const response = await axios.put(
            'http://localhost:4000/auth/restau/update',
            {
              email,
              Phonenumber,
              type,
              RestoPic: imgUrl, 
              password,
              menu,
              description,
              Tabel,
            },
            {
              headers: {
                Authorization: auth.token,
              },
            }
          );
      
          console.log(response.data);
      
          if (response.status === 200 || response.status === 201) {
            console.log('Restaurant updated successfully', response.data);
          }
        } catch (error) {
          if (error.response) {
            console.log(error.response.data);
            setError(error.response.data.error);
          } else {
            console.error('Error:', error.message);
          }
        }
        setPopupVisible(false);
      };
      
  
      const handleLogout = () => {
        logout();
        
      };
  
    useEffect(() => {
      getRestau();
    }, []);
  return (
    <div className=''>
      <div>
        
        <div className='bg-fixed z-20'>
<span className="group absolute bottom-64 right-96 bg-green-50 w-1/5  h-screen my-5 rounded-b-full" />
<span className="group absolute top-64 left-96  right-96 bg-green-400 w-1/5  h-screen my-5 rounded-full" />
<span className="group absolute top-64 left-0   bg-pink-300 w-1/5  h-screen my-5 rounded-r-full" />

<span className="group absolute top-36  right-60  bottom-2/4 mb-20  bg-pink-100 w-1/5  h-screen my-5 rounded-full"  />
  

</div>
       <nav className="mx-9  bg-green-50 border-none rounded-full border-2 mt-1 relative p-5  z-30 ">
    
    <div className="flex items-center justify-center">
      
      
      <div  className='flex justify-center items-center'>
        <div className='flex relative'>
        <button className="italicborder-solid rounded-full border-2 border-black p-4 text-xl font-medium hover:bg-black hover:text-white " onClick={() => {navigate('/restologin'); handleLogout}}> logout </button>
        <span className="absolute top-0 bottom-0 left-20 mt-2 ml-2 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
     </span>
    </div>
    <span className="mx-1"></span> 
    <div className='flex relative'>
      <button className="rounded-full bg-black p-4 text-xl font-medium italic text-white hover:bg-white hover:text-black" onClick={() => navigate('/')}>
        contact us
      </button>
      <span className="absolute top-0 bottom-0 left-20 mt-2 ml-2 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
      </span>
    </div>
    </div>
    
    </div>
    </nav>
    <div className=' flex items-center justify-center'>
      
         <div  className=" z-30  group mx-10 cursor-pointer group overflow-hidden relative text-gray-50   mt-8 p-[1] w-1/2 rounded-2xl hover:duration-700 duration-700">
          <div className="w-56 h-72 flex items-center justify-center text-gray-800">
            <div className="flex flex-row ">
                <img src={restau?.RestoPic} alt="Restaurant Image" className='rounded-xl' />
             
            </div>
          </div>
          <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span className="text-lime-400 font-bold text-xs">{restau?.Name}</span>
            <span className="text-gray-800 font-bold text-3xl">dispo table you offre: {restau?.Tabel}</span>
            <p className="text-neutral-800">reservation</p>
            <p className="text-neutral-800 hover:text-pink-300" onClick={togglePopup}> make update </p>
            
          </div>
        </div>
        </div>
<div>       {isPopupVisible && (
        <div className="popup-overlay">
        
           <div class=" relative z-30 mt-7 flex flex-col items-center justify-center bg-slate-200/40 rounded-xl mx-10">
     <label class="mb-1 block py-7 pr-4  font-extrabold text-lg text-gray-900 md:mb-0 md:text-right" for="inline-full-name"> UPDATE FORME </label>
          
       <div class="w-full grid grid-cols-2 gap-8   px-10">
        
    
         <div class="mb-6 md:flex md:items-center">
           <div class="md:w-1/3">
             <label class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"> RESTAURANT TYPE </label>
           </div>
           <div class="md:w-2/3">
             <input
             value={type}
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
             value={description}
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
           value={Tabel}
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
           value={menu}
            onChange={e => setmenu(e.target.value)}
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
             value={Phonenumber}
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
             value={email}
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
         
       </div>
       <div class="md:w-2/3 flex  flex-col justify-center mb-5 items-center">
             <button
             onClick={() => {
              handleSubmit();
              togglePopup();
            }}
             class="focus:shadow-outline rounded bg-green-400 px-4 py-2 font-bold text-white shadow hover:bg-green-500 border-pink-300 border-spacing-3 focus:outline-none" type="button" > handleSubmit</button>
          
           </div>
     </div>
     </div>
      )}
</div> </div>
 <div className='z-30  relative'>
    <Footer></Footer>
    </div>
    </div>
  )
}

export default Managementre