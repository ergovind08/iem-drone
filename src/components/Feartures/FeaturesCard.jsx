import React from 'react'

function FeaturesCard({feature}) {
  return (
    
      <div className='flex flex-col gap-y-4 justify-center items-center text-center py-2 shadow-2xl hover:shadow-black hover:scale-105 transistion-all duration-200 rounded-md '>
        <div className=' w-[100%] h-[400px]' >
          <img src={feature.image} alt="features" className="w-[100%] h-[100%] object-cover"  />
        </div>
        <p className='text-[24px] font-normal w-[90%] '>{feature.title}</p>
      </div>
    
  )
}

export default FeaturesCard
