/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const TestimonialCard = ({ imgSrc, professorName, message }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-50 w-full object-cover md:w-48"
            src={imgSrc}
            alt={`${professorName}'s Image`}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-md text-indigo-500 font-semibold">
            Professor
          </div>
          <p className="block text-2xl mt-1 leading-tight font-medium font-serif text-black">
            {professorName}
          </p>
          <p className="mt-2 text-gray-500 font-sans">{message}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      imgSrc: './Prof1.jpeg',
      professorName: ' Dr. Gregory D. Abowd',
      message:
        'Excited to be part of this years Husky Event at NEU Its a fantastic opportunity for students to engage beyond the classroom, fostering a sense of community and exploration. Looking forward to inspiring discussions and memorable experiences.',
    },
    {
      imgSrc: './Prof2.jpeg',
      professorName: 'Dr. George G. Adams',
      message:
      'Thrilled to support the upcoming Husky Event a hub of knowledge, creativity, and collaboration. These events showcase the diverse talents of our students and reinforce the spirit of innovation that defines our university. Cant wait to see the energy and ideas that unfold!',
    },
  ];

  return (
    <div className='w-full'>
    <h1 className='text-5xl text-centerfont-bold text-center mb-10 mt-24'>
      MESSAGE FROM OUR PROFESSORS
    </h1>
    <div className="line h-1 w-20 bg-blue-300 mx-auto mb-8"></div>
    <div className="grid grid-cols-2 gap-4 mt-4 mx-auto w-full text-center rounded-3xl">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  </div>
  
  );
};

export default Testimonial;
