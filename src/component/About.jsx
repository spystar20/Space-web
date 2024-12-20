import React from 'react'
import { FaReact } from "react-icons/fa6";
import { FaSatellite } from "react-icons/fa6";
import { GrLaunch } from "react-icons/gr";
const About = () => {
  return (
    <div className='bg-black w-full relative z-50 text-white'>
<div className='px-4 py-2 gap-8 md:pt-4 grid grid-cols-1 md:grid-cols-3'>
    <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center  backdrop-blur-sm items-center flex-col text-center gap-3 px-5 py-7 rounded-lg bg-sky-900/60 '>
< FaReact className='text-7xl' />
<h1 className='text-2xl '>HST</h1>
<h2 className='text-2xl'>300-1500km</h2>
<p className='text-sm'>Used for astronomical observations, capturing stunning images of the universe.</p></div>
<div data-aos="fade-up" data-aos-duration="1500" className='flex justify-center items-center backdrop-blur-sm flex-col text-center gap-3 px-5 py-7 rounded-lg bg-sky-900/60 '>
 <FaSatellite className='text-7xl' />
<h1 className='text-2xl '>ISS</h1>
<h2 className='text-2xl'>500-1500km</h2>
<p className='text-sm'>, it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory
</p></div>
<div data-aos="fade-up" data-aos-duration="2000" className='flex justify-center items-center backdrop-blur-sm flex-col text-center gap-3 px-5 py-7 rounded-lg bg-sky-900/60 '>
< GrLaunch className='text-7xl' />
<h1 className='text-2xl '>GPS</h1>
<h2 className='text-2xl'>300-1500km</h2>
<p className='text-sm'>Part of the Global Positioning System (GPS) used for navigation</p></div>

</div>
       <img className='w-full mix-blend-screen relative object-cover -translate-y-24 h-[200px]' src="https://raw.githubusercontent.com/dilshad-ahmed/space-web/e597b818234cf3f80bde9b4f6827e7c3fa556cce/src/assets/wave%20Gif.gif" alt="" />
    </div>
  )
}

export default About