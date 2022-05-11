import React from 'react'
import Services from '../services/Services'
import Projects from '../projects/Projects'
import Experience from '../experience/Experience'
import Bio from '../bio/Bio'
import Blog from '../blog/Blog'
import HeroSection from '../hero-section/HeroSection';
import Skills from '../skills/Skills';
import {motion} from  'framer-motion'

const containerVariants = {
  hidden:{opacity:0},
  visible:{opacity:1, transition:{delay:1.5, duration:1.5}},
  exit:{x:'-100vw',transition:{ease:'easeInOut'}}
}

function Portfolio() {
  return (
    <motion.div variants={containerVariants} exit='exit' className='container mx-auto px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
        <HeroSection sID='home'/>
        <Skills sID='skills'/>
        <Services sID='services'/>
        <Projects sID='projects'/>
        <Experience sID='experience'/>
        <Bio sID='bio'/>
        <Blog sID='blog'/>
    </motion.div>
  )
}

export default Portfolio