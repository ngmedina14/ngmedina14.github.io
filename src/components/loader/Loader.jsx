import React from 'react'
import logo from '../../assets/images/logo/logo.png'


function Loader() {
  return (
    <div className='fixed z-50 w-screen h-screen flex items-center justify-center bg-portfolioLight overscroll-none'>
        <div className='h-28'>
        <img src={logo} alt="" className='w-48 h-auto animate-ping absolute inline-flex'/>
        <img src={logo} alt="" className='w-48 h-auto relative inline-flex'/>
        </div>
    </div>
  )
}

export default Loader