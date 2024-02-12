import React from 'react'

const d = new Date();
let year = d.getFullYear();

function Footer() {
  return (
    <div className='bg-slate-200 py-20 text-center w-screen'>
      <p className='text-gray-600 tracking-widest text-lg'>COPYRIGHT © {year} IEM DRONE SCHOOL - ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer
