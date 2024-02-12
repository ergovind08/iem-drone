import React from 'react'
import dronebg2 from './dronebg2.jpg'

function Hero() {
  return (
    <div className='w-screen h-screen bg-slate-900 relative flex flex-col justify-end items-center overflow-x-hidden '>
    <img src={dronebg2} alt="drone bg" className='w-screen h-screen absolute z-0 opacity-40' />
      <h1 className='z-10 text-6xl mb-16 font-bold text-white'>IEM DRONE SCHOOL</h1>
    </div>
  )
}

export default Hero
