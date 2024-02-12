import React from 'react'
// import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import drone from './drone-bg.jpg'

function Contact() {
  return (
    <div className='w-screen h-screen relative  flex flex-col justify-center items-center'>
    <img src={drone} alt=""  className='absolute z-0 w-screen h-screen opacity-90' />
      <h1 className='text-6xl mb-20 z-20 font-bold text-white'>Contact us</h1>

      <div className='bg-white z-20 text-black w-[90%] md:w-[60%] md:h-[60%] h-[40%] flex flex-col justify-evenly items-center text-center shadow-xl shadow-white '>
        <h3 className='text-4xl w-[80%] font-medium'>PS Srijan Corporate Park GP Block, Sector-V Unit No 1102.Tower, No-1, 11th Floor,Kolkata 700-091</h3>
        <h2 className='text-3xl font-medium'>Contact us : 123456789 </h2>

      {/* whatsapp button */}
        <div className='flex justify-center items-center gap-x-3 w-[180px] h-[75px]  bg-slate-500 hover:cursor-pointer hover:bg-slate-600 hover:scale-105 transistion-all duration-200 rounded-2xl'>
            <span className='text-green-400 text-3xl'><IoLogoWhatsapp /></span>
            <p className='text-white font-semibold text-2xl'>Whatsapp</p>       
        </div>
        
      </div>

    </div>
  )
}

export default Contact
