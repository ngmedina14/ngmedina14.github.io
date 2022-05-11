import React from 'react'
import './HeroSection.css'
import picture from '../../assets/images/image1.png'
import {motion} from 'framer-motion'


const elementVariant = {
  hidden:{y:-150, opacity:0},
  visible:{y:0, opacity:1,transition:{delayChildren: 1.1, staggerChildren:0.1}},
}
const imageElement = {
  hidden:{x:150, opacity:0},
  visible:{ x: 0, opacity:1, transition:{duration: 1, ease:"easeInOut"}}
}

const childElement = {
  hidden:{y:50, opacity:0},
  visible:{ y: 0, opacity:1, transition:{duration: 1, ease:"easeInOut"}}
}

function HeroSection({sID}) {
  return (
    <div id={sID} className="relative">
      <motion.div
        variants={elementVariant}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 grid-flow-row lg:grid-cols-2 lg:grid-rows-1 "
      >
        <motion.div 
          drag dragElastic={1} dragConstraints={{left:0,right:0,top:0,bottom:0}}
          className="pt-20 pb-7 lg:pb-0 flex flex-col lg:justify-center gap-8 lg:h-screen">
          <motion.h1 variants={childElement} className='hidden lg:block font-bold text-6xl text-portfolioMainText'>Neil Medina</motion.h1>
          <motion.p variants={childElement} className='text-portfolioMainText text-2xl lg:text-3xl'>Professional Web Developer</motion.p> 
          <motion.p  variants={childElement}className='block text-portfolioSubText text-xl lg:text-2xl lg:pr-20'>Filipino, self-taught, 24 years old. I like to be one of the contributor in the better world!</motion.p>
          <motion.div variants={childElement} className='hidden lg:block text-portfolioSubText text-lg'>
            <p >🤖 Dream like Elon Musk </p>
            <p >🧠 Reasoning like Jordan Peterson </p>
            <p >🌗 Rationality like Ben Shapiro </p>
            <p >💼 Action like Dale Carnegie </p>
          </motion.div>

          <motion.button variants={childElement} className='w-max mx-auto lg:mx-0  shadow-lg shadow-neutral-400 text-portfolioLight font-bold rounded-lg px-7 py-3 bg-gradient-to-tr from-portfolioPrimary to-portfolioHighlight animate-bounce'>Let's get things done.</motion.button>
            
        </motion.div>

        <motion.img
          variants={imageElement}
          className="lg:pt-28 lg:px-10 w-full h-auto z-10 pointer-events-none"
          src={picture}
          alt=""
        />
      </motion.div>
      <div className="h-full w-1/2 absolute right-0 top-0 hidden lg:block custom-shape"></div>
    </div>
  );
}

export default HeroSection