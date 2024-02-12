import React from 'react'
import main from './main.jpg'

function Hero2() {
  return (
    <div className='w-screen h-screen flex flex-col justify-evenly items-center my-[100px] pt-2 gap-y-5 '>
    <img src={main} alt="" className='w-[80%] h-[80%] object-contain' />
    <div className='text-center p-4 text-2xl w-[70%] flex flex-col gap-y-4'>
        <h1>GREEN TECHNOLOGY AWARD FROM GOVERNMENT OF WEST BENGAL</h1>
        <p>Additional Chief Secretary Sri.Hyrdesh Mohan and Honourable Minister of Science & Technology Sri.Ujjal Biswas awarding our Founder for our contribution in green technology sector</p>
    </div>
      
    </div>
  )
}

export default Hero2
