import React from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import Testimonial from "../components/Event/Testimonial";

const About = () => {
  const slides = [
    {
      Path: "./stock17.jpg",
    },
    {
      Path: "./stock13.jpg",
    },
    {
      Path: "./stock19.jpg",
    },
    {
      Path: "./stock15.jpg",
    },
    {
      Path: "./stock21.jpg",
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
      {/* Card Style component*/}
      <div className="mt-10 py-5 lg:py-[10rem] px-5 lg:px-4 bg-white">
        <div className="col-12 text-center">
          <h1 className="text-2xl lg:text-5xl font-semibold ">ABOUT US</h1>
          <div className="line h-1 w-20 bg-blue-300 my-4 mx-auto"></div>
          <p className="text-xl lg:text-4xl mb-6">
            Howling Good Times: Unleash Memorable Moments with Husky Events!
          </p>
        </div>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            {/*<img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />*/}
            <h2 className="text-2xl font-bold text-center py-8">
              Stem Outreach Program
            </h2>
            <p className="text-center text-4xl font-bold">Educational</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Workshops and events to promote STEM education. Engaging with
                local schools and communities
              </p>
              <p className="py-2 border-b mx-8">Richard Hall</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Join the STEM Squad!
            </button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            {/*<img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />*/}
            <h2 className="text-2xl font-bold text-center py-8">
              Cultural Event
            </h2>
            <p className="text-center text-4xl font-bold">Cultural</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                International food festivals. Cultural performances and
                exhibition reprresenting across the globe
              </p>
              <p className="py-2 border-b mx-8">Blackmann Auditorium</p>
            </div>
            <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Register Now!
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            {/*<img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />*/}
            <h2 className="text-2xl font-bold text-center py-8">
              Sports Tournaments
            </h2>
            <p className="text-center text-4xl font-bold">Intramural</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Intramural or intercollegiate competitions. Fitness challenges
                and recreational sports events.
              </p>
              <p className="py-2 border-b mx-8">Carter Field</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Join the Action!
            </button>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="w-full py-[10rem] justify-center text-center m-auto px-4 relative group">
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold text-center">
            MEMORY COLLAGE
          </h1>
          <br></br>
          <div className="line h-1 w-20 bg-blue-300 my-4 mx-auto"></div>
          <p className="text-lg lg:text-3xl font- gap-2 text-center">
            Empowering Your Campus Experience: Navigate, Discover, and Engage
            with Ease through the Husky Events.
          </p>
          <br></br>
        </div>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].Path})` }}
          className="h-[400px] lg:h-[900px] rounded-2xl bg-cover duration-500"></div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        {/* Dots */}
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer">
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {/* Counter */}
      <div className="relative flex flex-wrap justify-center items-center gap-32 h-[120px] rounded-lg overflow-clip text-3xl w-full">
        <img
          src={"/counter.jpg"}
          className="absolute inset-0 object-cover w-full h-[120px] bg-blue-400 bg-opacity-200 bg-origin-content justify-center"
          alt="event"
        />
        <div className="relative col-lg-3 col-sm-6 text-center z-10">
          <h1 className="text-white display-4">20+</h1>
          <h6 className="text-uppercase mb-0 mt-3 text-white">Husky Events</h6>
        </div>
        <div className="relative col-lg-3 col-sm-6 text-center z-10">
          <h1 className="text-white display-4">2000+</h1>
          <h6 className="text-uppercase mb-0 mt-3 text-white">
            University Students
          </h6>
        </div>
        <div className="relative col-lg-3 col-sm-6 text-center z-10">
          <h1 className="text-white display-4">150+</h1>
          <h6 className="text-uppercase mb-0 mt-3 text-white">
            Registered Students
          </h6>
        </div>
        <div className="relative col-lg-3 col-sm-6 text-center z-10">
          <h1 className="text-white display-4">58+</h1>
          <h6 className="text-uppercase mb-0 mt-3 text-white">Team Members</h6>
        </div>
      </div>
      <Testimonial />
    </DefaultLayout>
  );
};

export default About;
