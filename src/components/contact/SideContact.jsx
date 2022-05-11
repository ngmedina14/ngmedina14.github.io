import React from 'react'
import {motion} from 'framer-motion'
import {SiDiscord,SiLinkedin,SiGmail,SiGithub} from 'react-icons/si'

const socialmedia = {
  hidden:{
    x:-100,
  },
  visible:{
    x:0,
    transition:{duration:0.5,delay:2,type:"spring",delayChildren:1.5,staggerChildren:0.1}
  }
}
const icons = {
  hidden:{
    x:-100,
    opacity:0
  },
  visible:{
    x:0,
    opacity:1,
    transition:{duration:2}
  }
}

function SideContact() {
  return (
    <motion.div variants={socialmedia} initial='hidden' animate='visible' drag="y" dragElastic={1} dragDirectionLock dragConstraints={{top:0,bottom:0,left:0,right:0,}} className='fixed hidden w-10  top-[40%] left-4 py-4 px-2 rounded-full border xl:flex flex-col gap-8'>
        <motion.a href='mailto:ngmedina14@gmail.com' variants={icons}><SiGmail title='Gmail' className='w-full h-full text-portfolioIcons hover:text-portfolioHighlight hover:scale-125 duration-300 ease-in-out'/></motion.a>
        <motion.a href='https://github.com/ngmedina14/' variants={icons}><SiGithub title='Github' className='w-full h-full text-portfolioIcons hover:text-portfolioHighlight hover:scale-125 duration-300 ease-in-out'/></motion.a>
        <motion.a href='https://www.linkedin.com/in/neil-medina-079740195/' variants={icons}><SiLinkedin title='LinkedIn' className='w-full h-full text-portfolioIcons hover:text-portfolioHighlight hover:scale-125 duration-300 ease-in-out'/></motion.a>
        <motion.a href='https://discord.gg/tjAV9A3R5Z' variants={icons}><SiDiscord title='Discord' className='w-full h-full text-portfolioIcons hover:text-portfolioHighlight hover:scale-125 duration-300 ease-in-out'/></motion.a>
    </motion.div>
  )
}

export default SideContact