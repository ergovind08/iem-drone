import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Hero2 from '../components/Hero2.jsx/Hero2'
import Features from '../components/Feartures/Features'
import Media from '../components/Media/Media'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Academy from '../components/Academy/Academy'
import Gallery from '../components/Gallery/Gallery'
import Mentor from '../components/Mentor/Mentor'
import Faculty from '../components/Faculty/Faculty'

function Home() {
  return (
    
    <div className='max-w-full overflow-x-hidden'>
     <Navbar/>
     <Hero/>
     <Hero2/>
     <About/>
     <Features/>
     <Media/>
     <Academy/>
     <Mentor/>
     <Faculty/>
     <Gallery/>
     <Contact/>
     <Footer/> 
    </div>

  )
}

export default Home
