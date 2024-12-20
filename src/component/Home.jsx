import React from 'react'
import Aos from 'aos'
import { useEffect
 } from 'react'
import  'aos/dist/aos.css'
const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
    },[])
  return (
    <div className='absolute z-50 w-full top-0 h-full  flex items-center px-8 justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div  className='grid grid-cols-1   gap-4 text-left text-pretty text-white '>
            <h1 data-aos="fade-up" className='text-5xl uppercase font-bold'>Orbite The Earth</h1>
            <p  data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea dolorem eius accusamus beatae. Nulla quis beatae quo, possimus tempora similique dignissimos repellat aperiam veniam culpa consequatur repudiandae asperiores saepe.
</p>
<div><button data-aos="fade-up" className='bg-blue-400 px-4 py-2 rounded-md'>Learn More
    </button></div>
    <div></div>
    </div>
        </div>
        <div className='brightness-50 z-50 absolute right-0 bottom-0 w-full'><img className=' shadow-inner' src="https://raw.githubusercontent.com/dilshad-ahmed/space-web/e597b818234cf3f80bde9b4f6827e7c3fa556cce/src/assets/moon-surface-hd.png" alt="" /></div>
<div className='w-full h-[70px] z-10 md:h-[250px] bg-gradient-to-b from-transparent from-10% to-black to-90%   absolute bottom-0'></div>
    </div>
  )
}

export default Home