import React, { useState } from 'react'
import {VscMenu} from 'react-icons/vsc'
import logo from '../asset/image/logo-outline.png'
import resume from '../asset/pdf/Resume.pdf'

function Navbar() {
  const [isActive,setIsActive] = useState(false);
  return (
    <nav className='w-full px-6 fixed inset-x-0 top-2 flex justify-end items-center md:justify-center'>
      <div className='md:bg-portfolioDark p-0 rounded-2xl'>
        <div className='md:w-800 bg-portfolioSecondary bg-opacity-10 rounded-2x1 flex items-center rounded-2xl shadow-2xl'>
          {/* <img src="" alt="" /> */}
          <div className='hidden md:flex items-center gap-6 ml-6 flex-1 p-4'>
            <a href="#History" className='text-portfolioAccent font-medium tracking-wider hover:text-portfolioSecondary cursor-not-allowed duration-500 ease-in-out'>History</a>
            <a href="#Professional" className='text-portfolioAccent font-medium tracking-wider hover:text-portfolioSecondary cursor-not-allowed duration-500 ease-in-out'>Professional</a>
            <a href="#Projects" className='text-portfolioAccent font-medium tracking-wider hover:text-portfolioSecondary cursor-not-allowed duration-500 ease-in-out'>Projects</a>
            <a href="#Events" className='text-portfolioAccent font-medium tracking-wider hover:text-portfolioSecondary cursor-not-allowed duration-500 ease-in-out'>Events</a>
            <a href="#Life" className='text-portfolioAccent font-medium tracking-wider hover:text-portfolioSecondary cursor-not-allowed duration-500 ease-in-out'>Life</a>
            <a href={resume} download="Neil-Medina-Resume.pdf" className='rounded-xl px-5 py-3 text-portfolioDark  bg-gradient-to-br from-portfolioAccent to-portfolioComponent font-normal hover:text-black hover:shadow-black shadow-md duration-500 ease-in-out'>Download CV</a>
          </div>
          {isActive && (
            <div className=' w-full py-4 bg-portfolioDark rounded-2xl fixed top-0 left-0 flex flex-col items-center justify-center gap-6 md:hidden'>
              <img src={logo} alt="logo" width='100' height='100' className='mb-4'/>
              <a href="#History" className='text-portfolioAccent text-2xl font-medium tracking-wider hover:text-portfolioSecondary cursor-not-allowed duration-500 ease-in-out' onClick={()=>{setIsActive(false)}}>History</a>
              <a href="#Professional" className='text-portfolioAccent text-2xl font-medium tracking-wider hover:text-portfolioSecondary cursor-not-allowed duration-500 ease-in-out' onClick={()=>{setIsActive(false)}}>Professional</a>
              <a href="#Projects" className='text-portfolioAccent text-2xl font-medium tracking-wider hover:text-portfolioSecondary cursor-not-allowed duration-500 ease-in-out' onClick={()=>{setIsActive(false)}}>Projects</a>
              <a href="#Events" className='text-portfolioAccent text-2xl font-medium tracking-wider hover:text-portfolioSecondary cursor-not-allowed duration-500 ease-in-out' onClick={()=>{setIsActive(false)}}>Events</a>
              <a href="#Life" className='text-portfolioAccent text-2xl font-medium tracking-wider hover:text-portfolioSecondary cursor-not-allowed duration-500 ease-in-out' onClick={()=>{setIsActive(false)}}>Life</a>
            </div>
          )}

          <div className='block z-10 md:hidden bg-portfolioDark rounded-2xl ml-auto cursor-pointer p-4' onClick={()=>{setIsActive(!isActive)}}>
            <VscMenu className='text-portfolioAccent'/>
          </div>

          
        </div>
      </div>
    </nav>
  )
}

export default Navbar