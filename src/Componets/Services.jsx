
import React from 'react'
import assets from '../assets/assets'

const Services = () => {
  return (
    <div className='scroll-animate'>
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mt-10">
        <span className="inline-flex items-center gap-4">
          <div className="w-8 h-1 bg-[#F59E0B]"></div>
          Our Services
          <div className="w-8 h-1 bg-[#F59E0B]"></div>
        </span>
      </h1>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-7 mt-10 m-10">

        {/* Service 1 */}
        <div className="relative overflow-hidden rounded-2xl md:col-span-6 h-125">
          <img
            className="w-full h-full object-cover"
            src={assets.service1}
            alt="Air Freight"
          />

          {/* Dark bottom gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Text */}
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl font-bold">
              Air Freight
            </h2>

            <p className="mt-2 text-gray-200 max-w-md">
             Fast and reliable air freight solutions for time-sensitive shipments, connecting your cargo to destinations worldwide.
            </p>
          </div>
        </div>


        {/* Service 2 */}
        <div className="relative overflow-hidden rounded-2xl md:col-span-4 h-125">
          <img
            className="w-full h-full object-cover"
            src={assets.service2}
            alt="Sea Freight"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl font-bold">
              Sea Freight
            </h2>

            <p className="mt-2 text-gray-200">
              Cost-effective and dependable sea freight services for efficient transportation of cargo across global markets.
            </p>
          </div>
        </div>


        {/* Service 3 */}
        <div className="relative overflow-hidden rounded-2xl md:col-span-4 h-125">
          <img
            className="w-full h-full object-cover"
            src={assets.service3}
            alt="Road Freight"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl font-bold">
              Warehousing
            </h2>

            <p className="mt-2 text-gray-200">
              Secure and organized warehousing solutions designed to keep your goods safe, accessible, and efficiently managed.
            </p>
          </div>
        </div>


        {/* Service 4 */}
        <div className="relative overflow-hidden rounded-2xl md:col-span-6 h-125">
          <img
            className="w-full h-full object-cover"
            src={assets.service4}
            alt="Warehousing"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl font-bold">
              Customs Clearance
            </h2>

            <p className="mt-2 text-gray-200 max-w-md">
              Hassle-free customs clearance support to help your shipments move smoothly through import and export procedures.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services
