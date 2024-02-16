import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../page/Footer';

const Driverslogin = () => {
    const navigate = useNavigate();
  return (  <div>
    <div className='mb-8'>
 <div className='relative pb-16  z-10'>
    <span className="group absolute bottom-80 right-96 bg-green-50 w-1/5  h-screen my-5 rounded-b-full" />
    <span className="group absolute top-96 left-96  right-96 bg-green-400 w-1/5  h-screen my-5 rounded-full" />
    <span className="group absolute top-96 left-0 bg-pink-300 w-1/5  h-screen my-5 rounded-r-full" />
    <span className="group absolute top-36  right-60  bottom-2/4   bg-pink-100 w-1/5  h-screen my-5 rounded-full" />
  </div>
    <div className="flex items-center justify-center z-30  relative ">
    

<div className="bg-white w-1/2 flex items-center flex-col justify-center gap-5  border-pink-200 shadow-lg  pb-3 border-r-2 border-b-2  mt-7 rounded-xl mb-10  ">
<p className="font-semibold   text-xl text-center mt-7 text-pink-700 ">
SINGIN TO YOUR RESTERANT ACCOUNT
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
<button className='bg-pink-300 font-semibold w-full rounded-xl  text-xl p-4 hover:bg-pink-500'

  >
SINGIN
</button>
<button className="font-mono hover:text-pink-700 " onClick={() => navigate('/driversregistation')}>
i don't have an account
</button>
</div>
</div>
</div>

</div>
<div className='z-30 mt-8 relative'>
<Footer  ></Footer>
</div>
</div>
  )
}

export default Driverslogin