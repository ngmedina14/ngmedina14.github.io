import React from 'react'
import './HeroSection.css'

function HeroSection({sID}) {
  return (
    
    <div id={sID} className='h-screen relative'>
      <div className='h-full w-1/2 absolute right-0 top-0 hidden lg:block z-0 custom-shape'></div>
    </div>
    
  )
}

export default HeroSection