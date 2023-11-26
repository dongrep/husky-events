import React from 'react'
import DefaultLayout from '../components/Layout/DefaultLayout'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import Contact from '../components/Layout/Contact';

const About = () => {
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },  
        {
          url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

  return (
    <DefaultLayout>
    <div className='w-screen py-[10rem] px-4 bg-white'>
        <div className="col-12 text-center">
            <h1 className="text-8xl font-semibold font-serif ">About Us</h1>
            <div className="line h-1 w-20 bg-blue-300 my-4 mx-auto"></div>
            <p className='text-5xl font-serif mb-6'>Howling Good Times: Unleash Memorable Moments with Husky Events!</p>
        </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              {/*<img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />*/}
              <h2 className='text-2xl font-bold text-center py-8'>Stem Outreach Program</h2>
              <p className='text-center text-4xl font-bold'>Educational</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Workshops and events to promote STEM education. Engaging with local schools and communities</p>
                  <p className='py-2 border-b mx-8'>Richard Hall</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Join the STEM Squad!</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              {/*<img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />*/}
              <h2 className='text-2xl font-bold text-center py-8'>Cultural Event</h2>
              <p className='text-center text-4xl font-bold'>Cultural</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>International food festivals. Cultural performances and exhibition reprresenting across the globe</p>
                  <p className='py-2 border-b mx-8'>Blackmann Auditorium</p>
              </div>
              <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Register Now!</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              {/*<img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />*/}
              <h2 className='text-2xl font-bold text-center py-8'>Sports Tournaments</h2>
              <p className='text-center text-4xl font-bold'>Intramural</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Intramural or intercollegiate competitions. Fitness challenges and recreational sports events.</p>
                  <p className='py-2 border-b mx-8'>Carter Field</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Join the Action!</button>
          </div>
      </div>
    </div>
    <div className='w-screen py-[10rem] justify-center text-center m-auto px-4 relative group'>
            <div>
                <h1 className='text-6xl font-bold font-serif text-center'>Memory Collage</h1><br></br>
                <p className='text-2xl font- gap-2 text-center'> Empowering Your Campus Experience: Navigate, Discover, and Engage with Ease through the Husky Events.</p><br></br>   
            </div>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='h-[500px] rounded-2xl bg-center bg-cover duration-500'
        ></div>

        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
            
        {/* Dots */}
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
    </div>
    <div className="relative flex flex-wrap justify-center gap-32 font-serif text-3xl w-screen">
        <img
        src={"/counter.jpg"}
        className="absolute inset-0 object-cover w-full h-[100px] bg-blue-400 bg-opacity-200 bg-origin-content"
        alt="event"
        />
        <div className="relative col-lg-3 col-sm-6 text-center z-10">
            <h1 className="text-white display-4">20+</h1>
            <h6 className="text-uppercase mb-0 mt-3 text-white">Husky Events</h6>
        </div>
        <div className="relative col-lg-3 col-sm-6 text-center z-10">
            <h1 className="text-white display-4">2000+</h1>
            <h6 className="text-uppercase mb-0 mt-3 text-white">University Students</h6>
        </div>
        <div className="relative col-lg-3 col-sm-6 text-center z-10">
            <h1 className="text-white display-4">150+</h1>
            <h6 className="text-uppercase mb-0 mt-3 text-white">Registered Students</h6>
        </div>
        <div className="relative col-lg-3 col-sm-6 text-center z-10">
            <h1 className="text-white display-4">58+</h1>
            <h6 className="text-uppercase mb-0 mt-3 text-white">Team Members</h6>
        </div>
    </div>
    <Contact />
    </DefaultLayout>
  )
}

export default About