import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white mt-20">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-13">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">

            <h2 className="font-Anta text-4xl">
              Classic <span className="text-[#F59E0B]">Cargo</span>
            </h2>

            <p className="font-Lato text-gray-300 mt-5 max-w-md leading-7">
              Moving your business beyond boundaries with reliable,
              efficient and seamless logistics solutions.
            </p>

            {/* CTA */}
            <a
  href="https://wa.me/919952999234"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="inline-flex items-center justify-center mt-8 w-14 h-14 bg-[#25D366] text-white rounded-full hover:bg-[#1DA851] hover:scale-110 transition-all duration-300 shadow-lg"
>
  <BsWhatsapp className="text-3xl" />
  
</a>

          </div>git add src/Componets/Footer.jsx


          {/* Quick Links */}
          <div>

            <h3 className="font-Lato font-bold text-lg mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <a
                  href="#home"
                  className="hover:text-[#F59E0B] transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="hover:text-[#F59E0B] transition-colors"
                >
                  Features
                </a>
              </li> 

              <li>
                <a
                  href="#services"
                  className="hover:text-[#F59E0B] transition-colors"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-[#F59E0B] transition-colors"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* Services */}
          <div>

            <h3 className="font-Lato font-bold text-lg mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>Air Freight</li>
              <li>Sea Freight</li>
              <li>Road Freight</li>
              <li>Warehousing</li>

            </ul>

          </div>

        </div>


        {/* Contact Information */}
        <div className="
          mt-14
          pt-8
          border-t border-white/10
          grid grid-cols-1 md:grid-cols-3
          gap-6
          text-gray-300
        ">

          <div>
            <p className="text-sm text-gray-400 mb-1">
              Visit Us
            </p>

            <p>
              Chennai, Tamil Nadu, India
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-400 mb-1">
              Email Us
            </p>

            <p>
              info@classiccargo.com
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-400 mb-1">
              Call Us
            </p>

            <p>
              +91 XXXXX XXXXX
            </p>
          </div>

        </div>


        {/* Bottom */}
        <div className="
          mt-10
          pt-6
          border-t border-white/10
          flex flex-col md:flex-row
          justify-between
          items-center
          gap-4
          text-sm
          text-gray-400
        ">

          <p>
            © 2026 Classic Cargo. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer