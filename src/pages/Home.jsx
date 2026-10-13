import React from 'react'
import Navbar from '../Componets/Navbar.jsx'
import Hero from '../Componets/Hero.jsx'
import WhyClassicCargo from '../Componets/WhyClassicCargo.jsx'
import WhyCargo2 from '../Componets/WhyCargo2.jsx'
import Services from '../Componets/Services.jsx'
import Footer from '../Componets/Footer.jsx'

const Home = () => {
  return (
    <div className='scroll-smooth'>
      <Navbar/>

      <section id='home'/>
       <Hero  />
      <section/>

      <section  id='features'>
       <WhyClassicCargo/>
      </section>

      <section >
      <WhyCargo2/>
      </section>

      <section id='services'>
       <Services/>
      </section>

      <section id='contact'>
       <Footer/>
      </section>
    </div>
  )
}

export default Home
