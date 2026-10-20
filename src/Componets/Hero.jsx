import React from 'react'
import assets from '../assets/assets.js'
import { slides } from '../assets/assets.js'
import { useState,useEffect} from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentSlide((prevSlide)=>(prevSlide +1)%slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval) // Clear interval on component unmount
  },[])

  return (
    <div className='flex w-full justify-center items-center md:mt-15 '>
      <div className='w-full md:w-[90%] lg:w-[80%]
h-[500px] sm:h-[520px] md:h-[550px] lg:h-[600px] md:my-6 my-5 lg:my-10   relative rounded-2xl overflow-hidden '>
        <img className='w-full h-full object-cover' src={slides[currentSlide].image} alt="Hero Image" />
        <div className='absolute inset-y-0 left-0 w-full md:w-[75%] bg-gradient-to-r from-black/70 via-black/35 to-transparent'></div>
        <div className='z-10 absolute top-0 left-0 w-full md:w-[70%] lg:w-[50%] h-full flex flex-col justify-center gap-5 px-5 md:px-10'>
            <h2 className ='font-Anta text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F59E0B] leading-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]'>{slides[currentSlide].title}</h2>
          <p className='font-Lato text-lg md:text-xl lg:text-2xl text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]'>{slides[currentSlide].description}</p>
        </div>  
        <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex'>
          <div className={`w-3 h-3  rounded-full m-2 ${currentSlide === 0 ? 'bg-white' : 'bg-gray-400'}`}></div>
          <div className={`w-3 h-3  rounded-full m-2 ${currentSlide === 1 ? 'bg-white' : 'bg-gray-400'}`}></div>
          <div className={`w-3 h-3  rounded-full m-2 ${currentSlide === 2 ? 'bg-white' : 'bg-gray-400'}`}></div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
