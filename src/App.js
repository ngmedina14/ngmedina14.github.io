import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import Loader from './components/loader/Loader';
import Navbar from './components/navbar/Navbar'
import {Route,Routes,useLocation} from 'react-router-dom';
import Portfolio from './components/portfolio/Portfolio';
import SideContact from './components/contact/SideContact';
import {motion, AnimatePresence} from 'framer-motion'
// axios.defaults.baseURL="http://192.168.254.123:5000/";

function App() {
  const location = useLocation();
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
    setLoading(false)
    },1000)
  },[])
  return (
    <>
    <div className='bg-portfolioLight overflow-hidden'>
      {loading?<Loader/>:<></>}
      <Navbar/>
      <SideContact/>
      <AnimatePresence exitBeforeEnter onExitComplete={()=>{}}>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Portfolio/>}/>
          <Route path='/case' element={<Portfolio/>}/>
        </Routes>
      </AnimatePresence>
      
      </div>
    </>
  );
}

export default App;
