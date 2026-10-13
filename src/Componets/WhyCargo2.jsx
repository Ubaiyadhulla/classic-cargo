import React from 'react'
import assets from '../assets/assets.js'
import { RiTargetLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";

const WhyCargo2 = () => {
  return (
    <div className=' flex flex-col md:flex-row lg:flex-row gap-10 items-center justify-center mt-10 bg-[#0A2540] h-content w-full p-7 text-white scroll-animate'>
      <div className=' flex-2 '><img className='rounded-md'  src={assets.whyCargoBanner} alt="Why Classic Cargo" /></div>
      <div className ='flex-1'>
        <p className='text-lg my-5 font-Lato'>With over a decade of experience in the logistics industry, we understand the importance of reliable and efficient cargo movement. Our expertise helps us handle every shipment with care and precision. From planning to final delivery, we focus on smooth operations. Our experienced team is equipped to manage diverse logistics needs. We build strong relationships through trust, transparency, and reliability. With proven expertise, we continue to deliver solutions that businesses can depend on.Experience you can trust, service you can rely on.</p>
        <div className='flex w-full justify-around'>
            <div  className='flex flex-col gap-2 md:gap-4 lg:*:gap-4 '>
            <div className='flex items-center gap-2 md:gap-4 lg:*:gap-4 font-Anta'>
               <RiTargetLine  size={50}/>
                <div className='h-9 w-2 bg-[#F59E0B] '></div>
                <h2 className='text-3xl text-[#F59E0B]'>10 +</h2>
            </div>
            <h5 className='text-lg'>Years of Experience</h5>
            </div>
          
            <div className='flex flex-col gap-2 md:gap-4 lg:*:gap-4 '>
            <div className='flex items-center gap-2 md:gap-4 lg:*:gap-4 font-Anta'>
                
                 <BiWorld  size={50}/>
                <div className='h-9 w-2 bg-[#F59E0B] '></div>
                <h2 className='text-3xl text-[#F59E0B]'>110 +</h2>
            </div>
            <h5 className='text-lg '>Countries Covered</h5>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default WhyCargo2
