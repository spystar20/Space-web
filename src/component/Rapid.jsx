import React from 'react'

const Rapid = () => {
    return (
        <div className='w-full relative z-50'>
            <div className='grid grid-cols-1 bg-black text-white px-4 gap-10 pb-9 md:pt-10 md:px-10 lg:px-20'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:items-center'>
                    <div data-aos="zoom-in" ><img src="https://tcj-space.netlify.app/assets/satelite1-9FDVE2Hv.jpg" alt="" /></div>
                    <div className='grid grid-cols-1  gap-2 px-4 py-5 border-b-2 text-left border-r-2 border-r-sky-800 border-b-sky-800'>
                        <h1 data-aos="fade-up"  className='uppercase text-base text-sky-800'>
                            Our Mission
                        </h1>
                        <h2 data-aos="fade-up"  className='text-5xl  uppercase'>Rapidcast
                        </h2>
                        <p data-aos="fade-up" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt.
                        </p>
                        <div><button data-aos="fade-up" className='bg-blue-400 px-4 py-2 rounded-md'>Learn More
                        </button></div>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:items-center'>
                   
                    <div className='grid grid-cols-1  gap-2 px-4 py-5 border-b-2 text-left border-l-2 border-l-sky-800 border-b-sky-800'>
                        <h1 data-aos="fade-up" className='uppercase text-base text-sky-800'>
                            Our Mission
                        </h1>
                        <h2 data-aos="fade-up" className='text-5xl  uppercase'>Rapidcast
                        </h2>
                        <p data-aos="fade-up">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt.
                        </p>
                        <div><button data-aos="fade-up" className='bg-blue-400 px-4 py-2 rounded-md'>Learn More
                        </button></div>
                       
                    </div>
                    <div><img data-aos="zoom-in" src="https://tcj-space.netlify.app/assets/satelite2-XDeSyoH2.jpg" alt="" /></div>
                    </div>
            </div>
        </div>
    )
}

export default Rapid