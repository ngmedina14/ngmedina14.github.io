import React from 'react'
import Spline from '@splinetool/react-spline';
import SideContact from './SideContact';
import Navbar from '../navbar/Navbar';
import PhoneContact from './PhoneContact';
import resume from '../asset/pdf/Resume.pdf'

function HeroSection() {
  return (
    <div className='relative overflow-hidden'>
      <PhoneContact/>
      <div className='md:hidden absolute bottom-[5%] left-0 w-full flex justify-center'>
        <a href={resume} download="Neil-Medina-Resume.pdf" className='rounded-xl px-5 py-3 shadow-black shadow-md bg-gradient-to-br from-portfolioAccent to-portfolioComponent font-normal'>Download CV</a>
      </div>
      <div className='pointer-events-none absolute top-1/2 -left-40 select-none rounded-full w-[75vh] h-[75vh] opacity-30 filter blur-xl' style={{backgroundColor:'#559CAD',cursor:`url("../logo.svg")`}}></div>
      <div className='hidden md:block pointer-events-none absolute -top-40 left-40 select-none -rotate-45 w-1/2 opacity-10' style={{backgroundColor:'#559CAD',height:'2000px'}}></div>
      <Spline className='overflow-hidden justify-center' scene="https://prod.spline.design/7eIRb1PmVtdbtLsE/scene.spline" />
      <SideContact/>
      
      <Navbar/>
    </div>
  )
}

export default HeroSection