import React from 'react'
import { SiDiscord,SiGmail,SiGithub,SiInstagram,SiLinkedin } from "react-icons/si";

function PhoneContact() {
  return (
    <>
        <a href="https://discord.com/users/Amulan#9110" target="_blank" rel="noreferrer"><SiDiscord className='md:hidden text-portfolioAccent w-10 h-10 absolute bottom-[20%] left-[75%]'/></a>
        <a href="https://www.github.com/ngmedina14" target="_blank" rel="noreferrer"><SiGithub className='md:hidden text-portfolioAccent w-10 h-10 absolute bottom-[20%] left-[55%]'/></a>
        <a href="https://www.linkedin.com/in/neil-medina-079740195/" target="_blank" rel="noreferrer"><SiLinkedin className='md:hidden text-portfolioAccent w-10 h-10 absolute bottom-[20%] right-[55%]'/></a>
        <a href="mailto:ngmedina14@gmail.com" target="_blank" rel="noreferrer"><SiGmail className='md:hidden text-portfolioAccent w-10 h-10 absolute bottom-[20%] right-[75%]'/></a>
    </>
  )
}

export default PhoneContact