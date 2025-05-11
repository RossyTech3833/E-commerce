import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

function Footer() {
  return (
    <div className=' flex flex-col justify-center py-4 p-10 bg-orange-900 '>
      <div className='flex flex-row justify-center gap-4 p-8'>
      <h1 className='text-white text-2xl'>Roses's world</h1>
      <p className='flex gap-4 font-bold m-3'>contact me here: <FaArrowRight className='m-1'/>
        <a href="https://wa/me/2348138332117?text=Hi%20welcome%20to%Rossy's%20page%20AHow%20can%20i%20be%20of%20help">
          <FaWhatsapp className='text-2xl text-white'/></a>
         </p>
      </div>
        <h4 className='text-white sm:text-base md:text-1xl font-bold m-4'>&copy;copyright @RossyTech-2025</h4>
    </div>
  )
}

export default Footer