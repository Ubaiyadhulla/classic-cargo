import React from 'react'
import { advantages } from '../assets/assets.js'

const WhyClassicCargo = () => {
  return (
    <div className='scroll-animate'> 
      <div className='flex flex-col items-center gap-5 text-center mt-10 font-Anta'>
        <h4 className='text-xl font-bold text-[#F59E0B] flex items-center gap-4'><div className='w-6 h-1 bg-[#F59E0B]'> </div> OUR ADVANTAGES <div className='w-6 h-1 bg-[#F59E0B]'></div></h4>
        <h2 className='text-4xl font-bold text-black'>Why Classic Cargo?</h2>
        <p>Build on reliability, speed and care - here what sets our logistics services apart</p>
      </div >
      <div className='flex flex-wrap gap-10 justify-center mt-10 animate-fade-in'>

             {advantages.map((advantage, index) => {
             const Icon = advantage.image;

              return (
               <div key={index} className='flex flex-col items-start gap-5 w-[300px] bg-[#0A2540] p-5 rounded-lg text-white font-Lato'>
               <Icon className='bg-white text-[#F59E0B] w-15 h-15 p-2 rounded-2xl ' />
                <h3 className='text-xl font-semibold '>{advantage.title}</h3>
               <p className='text-gray-300'>{advantage.description}</p>
               </div>
        )
      })}
      </div>

    </div>
  )
}

export default WhyClassicCargo
