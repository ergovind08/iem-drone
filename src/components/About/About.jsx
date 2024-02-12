import React from 'react'
import drone from './drone.jpg'

function About() {
  return (
    <div className='w-screen h-[100vh] flex flex-col justify-evenly gap-y-10 items-center  bg-black/90 text-white'>
      <h1 className='text-6xl font-medium'>About Us</h1>

      <div className='flex gap-x-24 w-[80%] '>
        <img 
        className='max-w-[600px] h-3/5'
        src={drone} alt="drone" />
        <div className=' justify-start items-center text-center flex flex-col gap-y-8 '>
            <p className='font-medium text-3xl leading-[40px]'>Incubated by Science & Technology Entrepreneurs Park (STEP) IIT Kharagpur and supported by Department of Scientific & Industrial Research ,Government of India with vision to Develop Aeronautics and Aerospace in the Country.</p>
            <p className='text-2xl leading-[40px]'>We are a research & Development company committed to serve our nation India through our Innovation .We have developed India's First Fire Fighter Drone Prototype AB 001 which will help to extinguish fire in high rise buildings.Our Fire Fighter Drone Prototype is recognised and registered by Department of Scientific & Industrial Research ,Government of India</p>
        </div>
      </div>
    </div>
  )
}

export default About
