import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1240px] m-auto w-screen p-4 py-16 items-center'>
        <h2 className=' text-4xl text-center text-gray-900'>SEND US A MESSAGE</h2>
        <div className="line h-1 w-20 bg-blue-300 my-4 mx-auto"></div>
        <p className='text-2xl text-center text-gray-700'>Let's Create Memorable Moments Together - Reach Out and Plan Your Perfect Event with Us!</p>
        <div className='grid md:grid-cols-2'>
            <img 
                src={"/counter.jpg"}
                alt='/'
                className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
            />
            <form>
                <div>
                    <input className='border m-2 p-2' type='text' placeholder='First Name' />
                    <input className='border m-2 p-2' type='text' placeholder='Last Name' />
                    <input className='border m-2 p-2' type='email' placeholder='Email-ID' />
                    <input className='border m-2 p-2' type='tel' placeholder='Phone' />
                    <textarea className="border col-span-3 m-2 p-2" cols='50' rows='10'></textarea>
                    <button className="m-2 px-44 py-3 rounded-md bg-[#4e57d4] text-black font-bold hover:text-[#fff] mt-10 mb-5">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact