import { useEffect, useState} from 'react';
import axios from 'axios';
import HeroSection from './components/hero-section/HeroSection';
import Skills from './components/skills/Skills';
import Loader from './components/loader/Loader';
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Bio from './components/bio/Bio'
import Blog from './components/blog/Blog'

// axios.defaults.baseURL="http://192.168.254.123:5000/";

function App() {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
    setLoading(false)
    },1000)
  },[])
  return (
    <div className='bg-portfolioLight overflow-hidden'>
      {loading?<Loader/>:<></>}
      <Navbar/>
      <HeroSection sID='home'/>
      <Skills sID='skills'/>
      <Services sID='services'/>
      <Projects sID='projects'/>
      <Experience sID='experience'/>
      <Bio sID='bio'/>
      <Blog sID='blog'/>
    </div>
  );
}

export default App;
