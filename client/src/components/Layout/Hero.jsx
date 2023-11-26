import React from 'react'
import DefaultLayout from "./DefaultLayout";

const Hero = () => {
  
  return (
    <DefaultLayout>
      <div className='relative w-screen h-screen text-center flex flex-col justify-center bg-local mt-5'>
        <img
          src={"/hero1.jpeg"}
          className="absolute inset-0 w-full h-full object-cover bg-blue-200 bg-opacity-200 bg-origin-content"
          alt="event"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className='text-8xl font-bold font-serif text-white mt-[-90px]'>Husky Events</h1>
          <h5 className='text-5xl font-serif text-white mt-[70 px]'>Unleash the Spirit, Ignite the Community: Explore a World of Husky Events Tailored for You!</h5>
          <div className='flex justify-center items-center space-x-4'>
            <button className='px-8 py-3 rounded-md bg-[#4e57d4] text-black font-bold hover:text-[#fff] mt-10 mb-3'>Get Started</button>
            <button className='px-8 py-3 rounded-md bg-[#4e57d4] text-black font-bold hover:text-[#fff] mt-10 mb-3'>Learn More</button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Hero