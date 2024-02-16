import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../page/Footer'

const Faq = () => {
  const navigate = useNavigate()
  return (
    <div >
       <nav className="mx-9  bg-green-50  border-green-400/35 rounded-full border-2 mt-5">
<div className="flex items-center justify-between">
  
  <ul className="flex gap-7 text-lg font-semibold">
    <li onClick={() => navigate('/makereservation')}  className="cursor-pointer hover:text-green-400">MAKE A RESERVATION</li>

    <li onClick={() => navigate('/rideboking')} className="cursor-pointer hover:text-green-400">BOOK A RIDE</li>
   
    
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
      <div className='relative z-10'>
        <span className="group absolute bottom-80 right-96 bg-green-50 w-1/5  h-screen my-5 rounded-b-full" />
        <span className="group absolute top-96 left-96  right-96 bg-green-400 w-1/5  h-screen my-5 rounded-full" />
        <span className="group absolute top-96 left-0 bg-pink-300 w-1/5  h-screen my-5 rounded-r-full" />
        <span className="group absolute top-36  right-60  bottom-2/4   bg-pink-100 w-1/5  h-screen my-5 rounded-full" />
      </div>
      <div className='flex flex-col gap-4 justify-center items-center '>
         <h2 className='font-semibold text-2xl text-center'>Frequently Asked Questions (FAQ)</h2>
          </div>
        
   
    
         <div className="grid grid-cols-3 z-30  mt-7 relative ">
     

      <div className='flex flex-col items-center justify-center mx-10 my-5 border bg-white border-zinc-400 p-4 rounded-md' >
        <h3 className='font-serif text-lg text-green-300'>1. How does the reservation process work?</h3>
        <p className='font-semibold text-base text-black'>
          .To make a reservation, simply log in to your account, choose the desired restaurant, select the date and time, and confirm your reservation. You'll receive a confirmation email with all the details.
        </p>
      </div>

      <div  className='flex flex-col items-center  bg-white justify-center mx-10 my-5 border border-zinc-400 p-4 rounded-md'>
        <h3 className='font-serif text-lg text-green-300'>2. Can I modify or cancel my reservation?</h3>
        <p className='font-semibold text-base text-black'>
          Yes, you can modify or cancel your reservation through your account. Please note that cancellation policies may vary depending on the restaurant.
        </p>
      </div>

      <div  className='flex flex-col items-center bg-white justify-center mx-10 my-5 border border-zinc-400 p-4 rounded-md'>
        <h3 className='font-serif text-lg text-green-300'>3. Is transportation provided to the restaurant?</h3>
        <p className='font-semibold text-base text-black'>
          Absolutely! We offer transportation services to and from the restaurant. During the reservation process, you can choose to include transportation, and our designated drivers will ensure you have a convenient and safe journey.
        </p>
      </div>

      <div  className='flex flex-col items-center bg-white justify-center mx-10 my-5 border border-zinc-400 p-4 rounded-md' >
        <h3 className='font-serif text-lg text-green-300'>4. How do I request transportation for my reservation?</h3>
        <p className='font-semibold text-base text-black'>When making a reservation, you'll find an option to add transportation services. Select this option, and our system will automatically arrange a driver for you.</p>
      </div>
      <div  className='flex flex-col items-center bg-white justify-center mx-10 my-5 border border-zinc-400 p-4 rounded-md'>
        <h3 className='font-serif text-lg text-green-300'>5. Are there additional charges for transportation services?</h3>
        <p className='font-semibold text-base text-black'>Yes, there may be additional charges for transportation. The cost will be displayed during the reservation process, allowing you to review and confirm before completing your booking.</p>
      </div>
      <div  className='flex flex-col items-center bg-white justify-center mx-10 my-5 border border-zinc-400 p-4 rounded-md'>
        <h3 className='font-serif text-lg text-green-300'>6. What types of vehicles are used for transportation?</h3>
        <p className='font-semibold text-base text-black'>We use a variety of vehicles, including standard cars and larger vehicles for group reservations. You can choose the vehicle type that best suits your needs during the reservation process.</p>
      </div>
      <div  className='flex flex-col items-center bg-white justify-center mx-10 my-5 border border-zinc-400 p-4 rounded-md'>
        < h3 className='font-serif text-lg text-green-300' >7. How do I contact the driver or transportation service?</h3>
        <p className='font-semibold text-base text-black'>Once your reservation is confirmed, you'll receive details about your assigned driver, including contact information. Feel free to reach out directly for any transportation-related inquiries.
</p>
      </div>
      <div  className='flex flex-col items-center bg-white justify-center mx-10 my-5 border border-zinc-400 p-4 rounded-md'>
        <h3 className='font-serif text-lg text-green-300'>8. Can I make a reservation for a large group?</h3>
        <p className='font-semibold text-base text-black'>Absolutely! Our system accommodates group reservations. Simply provide the number of guests and any specific requirements during the reservation process.</p>
      </div>
      

      <div  className='flex flex-col items-center bg-white justify-center mx-10 my-5 border border-zinc-400 p-4 rounded-md'>
        <h3 className='font-serif text-lg text-green-300'>9. How do I provide feedback about my experience?</h3>
        <div className='z-30   relative'>
        <p className='font-semibold text-base text-black mt-5'>
          Your feedback is valuable to us! You can leave a review through your account after your reservation. Additionally, our customer support team is available to assist with any concerns or feedback.
        </p></div>
      </div>
      
    </div>
   <div className='mt-14 relative z-30'>
    
   <p className='font-semibold text-base text-black   mx-10  text-center'>If you have any further questions or need assistance, please don't hesitate to contact our customer support team. We're here to make your dining experience enjoyable and stress-free!</p>
    <div className='flex justify-center items-center'>
    <button className='font-semibold text-lg flex justify-center items-center bg-slate-100
         text-green-300 p-3 hover:bg-neutral-600 rounded-md' onClick={() => navigate('/')}>back home </button>
        
    </div>
   </div>
      
    
    <Footer/>
    </div>
   
    
  )
}

export default Faq