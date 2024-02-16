import React, { useState } from 'react'

import Footer from '../page/Footer';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Store/authstore';

const login = () => {
  const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
   
    const { connexion, storeRefreshToken } = useAuth()
    const navigate = useNavigate()
    const signUp = async (e) => {
      e.preventDefault()
      try {
          const res = await axios.post('http://localhost:4000/auth/login', {
            email,
        password 
          })
          if(res.data.token) {
              alert('welcome')
              connexion(res.data.token, res.data.user)
              
              navigate('/') 
          }
          else {
              alert('email or passowrd worng')
          }
      } catch (err) {
          console.log(err)
          alert('something went wrong')
      }
  }
  return (
   

<div className=''>
<nav className="mx-9  bg-green-50  border-green-400/35 rounded-full p-5  z-30 border-2 mt-5">
<div className="flex items-center justify-between">
  
  <ul className="flex gap-7 text-lg font-semibold">
    <li onClick={() => navigate('/makereservation')}  className="cursor-pointer hover:text-green-400">MAKE A RESERVATION</li>

    <li onClick={() => navigate('/rideboking')} className="cursor-pointer hover:text-green-400">BOOK A RIDE</li>
   
    <li className="cursor-pointer hover:text-green-400" onClick={() => navigate('/FAQ')}>FAQ</li>
  </ul>
  <div  className='flex justify-center items-center'>

<span className="mx-1"></span> 
<div className='flex'>
<button className="rounded-full bg-black p-4 text-xl font-medium italic text-white hover:bg-white hover:text-black" onClick={() => navigate('/Register')}>SIGN UP</button>

</div>
</div>

</div>
</nav>
<div className='relative mb-44  z-10'>
        <span className="group absolute bottom-80 right-96 bg-green-50 w-1/5  h-screen my-5 rounded-b-full" />
        <span className="group absolute top-96 left-96  right-96 bg-green-400 w-1/5  h-screen my-5 rounded-full" />
        <span className="group absolute top-96 left-0 bg-pink-300 w-1/5  h-screen my-5 rounded-r-full" />
        <span className="group absolute top-36  right-60  bottom-2/4   bg-pink-100 w-1/5  h-screen my-5 rounded-full" />
      </div>

  

 <div className="flex flex-row gap-2 justify-center items-center mt-6 z-20 ">
        <div className="w-4 h-4 rounded-full bg-green-100 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-green-300 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-green-400 animate-bounce [animation-delay:-.5s]"></div>
      </div>
<div className="flex items-center justify-center z-30  relative ">

<div className="bg-white w-1/2 flex items-center flex-col justify-center gap-5  border-pink-200 shadow-lg  pb-3 border-r-2 border-b-2  mt-7 rounded-xl mb-10  ">
<p className="font-semibold   text-xl text-center mt-4 text-pink-700 ">
SINGIN TO YOUR ACCOUNT
</p>
<div className="flex flex-col justify-center items-center mt-5 gap-3">
<span className="text-xl font-semibold">email</span>
<input
type="text"
className="bg-slate-100 p-4 text-lg font-medium  hover:bg-white w-full rounded-xl  "
onChange={e => setemail(e.target.value)}
/>
<span className="text-xl font-semibold">password</span>
<input
type="text"
className="bg-slate-100 p-4 text-lg font-medium  hover:bg-white w-full rounded-xl  "
onChange={e => setpassword(e.target.value)}
/>
<button className='bg-pink-300 font-semibold w-full rounded-xl  text-xl p-4 hover:bg-pink-500'  onClick={signUp}>
  SINGIN
</button>
<button className="font-mono hover:text-pink-700 " onClick={() => navigate('/Register')}>
i don't have an account
</button>
</div>
</div>


</div>
<div className='z-20 mt-8 relative'>
<Footer  ></Footer>
</div>

</div>
  )
}

export default login