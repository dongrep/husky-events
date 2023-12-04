import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className=' m-auto lg-w-full p-4 py-16 items-center text-center'>
        <h2 className=' text-5xl text-center text-gray-900'>SEND US A MESSAGE</h2>
        <div className="line h-1 w-20 bg-blue-300 my-4 mx-auto"></div>
        <p className='text-2xl text-center text-gray-700'>Let's Create Memorable Moments Together - Reach Out and Plan Your Perfect Event with Us!</p>
        <div className='grid md:grid-cols-2 mt-6'>
            <img 
                src={"/counter.jpg"}
                alt='/'
                className='w-full sm:h-full object-cover p-2 max-h-[500px] h-[200px]'
            />
            <form>
                <div className="flex flex-wrap w-auto">
                    <input className='border m-2 p-2 w-full ' type='text' placeholder='First Name' />
                    <input className='border m-2 p-2 w-full' type='text' placeholder='Last Name' />
                    <input className='border m-2 p-2 w-full' type='email' placeholder='Email-ID' />
                    <input className='border m-2 p-2 w-full' type='tel' placeholder='Phone' />
                    <textarea className="border col-span-3 m-2 p-2" cols='100' rows='5'></textarea>
                    <button className="m-2 px-80 py-3 md:px-8 xl:px-10 rounded-md bg-[#3f49d9] text-black font-bold hover:text-[#fff] mt-8 mb-5 text-xl">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact