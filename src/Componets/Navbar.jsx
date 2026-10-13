import React from 'react'
import assets from '../assets/assets.js'
import WhyCargo2 from './WhyCargo2.jsx'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between px-15 h-20 bg-[#0A2540] text-white md:fixed md:z-50 md:items-center top-0'>
      <div><img className="h-[70px] w-[70px] flex p-2 rounded-2xl" src={assets.logo} alt="Logo" /></div>
      <div className='flex gap-12 items-center'>
        <div className='flex gap-8 hidden md:flex'>
            <a  className="hover:text-[#F59E0B]" href="#home">Home</a>
            <a   className="hover:text-[#F59E0B]" href="#features">Features</a>
            <a  className="hover:text-[#F59E0B]" href="#services">Services</a>
        </div>
        <button  onClick={() =>
                document.getElementById('contact').scrollIntoView({
                behavior: 'smooth'
                  })
              } className="bg-[#F59E0B] hover:bg-[#FF6B35] text-center text-white font-bold py-2 px-4 rounded">Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar
