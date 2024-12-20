import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
<div className='bg-gray-800 w-full relative z-50 text-white'>

<div className='grid grid-cols-1 px-6 md:px-2   ' >
    <div className='flex flex-col gap-3 py-14 px-2 '>
        <h1 className='text-xl font-bold'>Be Ready To Grow</h1>
        <h1 >Get Exclusive Updates straight to your inbox.</h1>
        <div className='flex'><input className='bg-transparent px-5  border-white border-2' type="text" placeholder='Email' />  <div><button className='bg-blue-400 px-4 py-2 rounded-md'>ok
        </button></div></div>
    </div>
    <div className='grid grid-cols-2 px-3 gap-5 md:grid-cols-3 md:gap-3 md:px-1'>
    <div>
        <ul className='flex flex-col gap-3 py-6 '>
            <h2 className='text-xl font-bold'>Quick Links</h2>
            <li>Home</li>
            <li>About
            </li>
            <li>Services</li>
            <li>Login</li>
        </ul>
    </div>
    <div>
        <ul  className='flex flex-col gap-3 py-6'>
            <h2 className='text-xl font-bold'>Quick Links</h2>
            <li>Home</li>
            <li>About
            </li>
            <li>Services</li>
            <li>Login</li>
        </ul>
    </div>
    <div>
      <ul  className='flex flex-col gap-3 py-6 '>
        <h2 className='text-xl font-bold'>Contact Us</h2>
        <li className='flex gap-2 '><IoLocationSharp className='text-2xl md:text-lg ' /><h2>Noida, U.P</h2></li>
        <li className='flex gap-1 '><MdMessage className='text-lg md:text-lg' />
        <h2>abc@gmail.com</h2></li>
        <li className='flex gap-1 '><FaPhoneAlt className='text-lg md:text-lg' />
        <h2>91 123456789+</h2></li>
      </ul>
    </div>
</div>
</div>

<div className='px-3 md:px-6'>
    <div className='w-full h-0.5 bg-slate-100 text-xl '></div>
    <div className='flex justify-between items-center md:py-10  py-6 gap-4'>
        <h2 >copyright © 2024 by TCJ</h2>
        <div className='flex text-2xl md:text-4xl gap-2 md:px-6 '>
        <IoLogoInstagram />
        <FaLinkedin /><FaFacebook />
        </div>
        <div className='flex text-xs gap-2'><h2>Privacy Policy</h2><h2>Terms & Conditions</h2></div>
    </div>
</div>
</div>
  )
}

export default Footer