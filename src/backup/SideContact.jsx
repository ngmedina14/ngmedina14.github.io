import React from 'react'
import { SiDiscord,SiGithub,SiLinkedin,SiGmail } from "react-icons/si";

function SideContact() {
  return (
    <div>
      <div className='hidden md:flex flex-col items-center gap-5 fixed bottom-2 left-10'>
        <a href="mailto:ngmedina14@gmail.com" target="_blank" rel="noreferrer"><SiGmail className='text-portfolioAccent w-10 h-10'/></a>
        <a href="https://discord.com/users/Amulan#9110" target="_blank" rel="noreferrer"><SiDiscord className='text-portfolioAccent w-10 h-10'/></a>
        <a href="https://www.github.com/ngmedina14" target="_blank" rel="noreferrer"><SiGithub className='text-portfolioAccent w-10 h-10'/></a>
        <a href="https://www.linkedin.com/in/neil-medina-079740195/" target="_blank" rel="noreferrer"><SiLinkedin className='text-portfolioAccent w-10 h-10'/></a>
        <div className='h-14 w-0.5 bg-portfolioAccent'></div>
      </div>
      <div className='hidden md:flex flex-col items-center gap-3 fixed bottom-2 right-10 '>
        <span className='text-portfolioAccent text-xl pointer-events-none' style={{writingMode: 'vertical-rl'}}>Scroll</span>
        <div className='h-14 w-0.5 bg-portfolioAccent'></div>
      </div>
    </div>
    
  )
}

export default SideContact