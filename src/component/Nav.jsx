import React from 'react'

const Navbar = () => {
  return (
    <div data-aos="slide-down" className='w-full z-[99]  flex fixed top-0 text-white bg-white/5 backdrop-blur-sm bg-opacity-5 px-4 py-4 sm:py-2 justify-between md:justify-between'>
      <div className='flex gap-3'>
        <div><img className='w-10' src="https://tcj-space.netlify.app/assets/logo-2zKhl-C6.png" alt="" /></div>
        <h2 className='text-2xl font-bold'>TCJ-SPACE</h2>
      </div>
      <div className='md:block hidden'>
      <ul className='  md:flex gap-7 justify-center text-xl '>
        <li>
          About
        </li>
        <li>
          Technology

        </li>
        <li>
          Galaxy

        </li>
        <li>
          Satelite

        </li>
      </ul>
      </div>
      <div>
        <button className='px-3 rounded-lg py-1 outline outline-2'>Login</button>
      </div>
    </div>
  )
}

export default Navbar