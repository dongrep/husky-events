import React from 'react'
import DefaultLayout from '../components/Layout/DefaultLayout'

const Contact = () => {
  return (
    <DefaultLayout>
    <div id='contact' className='lg:w-full p-4 py-16 text-center mt-7 border-b shadow-2xl shadow-purple-400'>
        <h2 className='text-5xl font-semibold font-serif mb-4 text-gray-800'>NEED HELP? JUST SEND US A MESSAGE</h2>
        <div className="line h-1 w-20 bg-blue-300 my-4 mx-auto"></div>
        <p className='text-2xl text-gray-700 mb-8'>Let's Create Memorable Moments Together - Reach Out and Plan Your Perfect Event with Us!</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <img 
                src={"/counter.jpg"}
                alt='/'
                className='w-full object-contain p-2 max-h-[700px] mt-8 ml-8'
            />
            <form className='flex flex-wrap w-full max-w-[600px] mx-auto'>
                <input className='border m-2 p-3 w-full' type='text' placeholder='First Name' />
                <input className='border m-2 p-3 w-full' type='text' placeholder='Last Name' />
                <input className='border m-2 p-3 w-full' type='email' placeholder='Email-ID' />
                <input className='border m-2 p-3 w-full' type='tel' placeholder='Phone' />
                <textarea className="border col-span-3 m-2 p-2 w-full" placeholder='Your Message' rows='5'></textarea>
                <button className="m-2 px-8 py-3 rounded-md bg-primary text-white mt-5 mb-5 text-xl">Submit</button>
            </form>
        </div>
    </div>

    <div className='mt-12 text-left flex flex-wrap gap-20 justify-center items-center'>
        <div className="flex flex-col">
            <h3 className='text-2xl font-bold mb-2'>Visit Us</h3>
            <p className='text-lg text-gray-700 mb-2'>360 Huntington Ave,</p>
            <p className='text-lg text-gray-700 mb-2'>Boston, Massachusetts,</p>
            <p className='text-lg text-gray-700 mb-4'>Zip Code: 02115</p>
        </div>

        <div className="flex flex-col">
            <h3 className='text-2xl font-bold mb-2'>Call Us</h3>
            <p className='text-lg text-gray-700 mb-2'>Telephone: <a href="tel:+16173732000" className="text-blue-500 hover:underline">+1 (617) 373-2000</a></p>
            <p className='text-lg text-gray-700 mb-2'>Phone: <a href="tel:+16173732001" className="text-blue-500 hover:underline">+1 (617) 373-2001</a></p>
            <p className='text-lg text-gray-700 mb-4'>Mobile: <a href="tel:+16173732002" className="text-blue-500 hover:underline">+1 (617) 373-2002</a></p>
        </div>

        <div className="flex flex-col mb-14">
            <h3 className='text-2xl font-bold mb-2'>Email Us</h3>
            <p className='text-lg text-gray-700 mb-2'>Email: <a href='mailto:huskyevents@northeastern.edu' className='text-blue-500 hover:underline'>huskyevents@northeastern.edu</a></p>
            <p className='text-lg text-gray-700'>Website: <a href='https://www.northeastern.edu' className='text-blue-500 hover:underline'>https://www.northeastern.edu/</a></p>
        </div>
    </div>
    </DefaultLayout>
  )
}

export default Contact