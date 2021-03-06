import React,{useEffect, useState} from 'react'
import logo from '../../assets/images/logo/logo.png'
import {Link} from 'react-scroll'
import './Navbar.css'
import {motion} from 'framer-motion'


function Navbar({sNavWrapper,sCurrentSectionIndex}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollTop, setScrollTop] = useState(true);

    const handleScroll = () => {
      const position = window.pageYOffset;
      (position<=0)?setScrollTop(true):setScrollTop(false);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    if (scrollTop){
    return (
      <div className="select-none fixed w-screen bg-transparent z-40 text-lg translate-y-3 ease-in-out  delay-150 duration-300">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="relative flex items-center justify-between">
            <Link
              to="home"
              smooth={"easeInOutQuint"}
              offset={-65}
              className="inline-flex items-center cursor-pointer"
            >
              {/* <img
                src={logo}
                alt=""
                className="w-36 h-auto absolute lg:-top-1 top-1 left-0"
              /> */}
              <motion.svg drag dragElastic={1} dragConstraints={{left:0,right:0,top:0,bottom:0}} width="226" height="45" viewBox="0 0 226 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path d="M22.6 37L5.8 18.52H5.6L3.8 12L3.4 11.6H1.2V10.2H6.8L23.6 28.68H23.8V37H22.6ZM1.2 37V35.6H3.4L3.8 35.2V12L5.6 18.52V35.2L6 35.6H9.4V37H1.2ZM28.2 10.2V11.6H26L25.6 12V37H23.8V12L23.4 11.6H20V10.2H28.2ZM42.0634 35.4C43.3968 35.4 44.5968 35.08 45.6634 34.44C46.7568 33.8 47.6634 33.0933 48.3834 32.32L49.4634 33.24C48.9034 33.9067 48.2501 34.56 47.5034 35.2C46.7834 35.84 45.8768 36.3733 44.7834 36.8C43.6901 37.2 42.3034 37.4 40.6234 37.4C38.7834 37.4 37.0901 37.0133 35.5434 36.24C33.9968 35.44 32.7568 34.2933 31.8234 32.8C30.8901 31.3067 30.4234 29.5067 30.4234 27.4C30.4234 25.2933 30.8901 23.4933 31.8234 22C32.7568 20.5067 33.9968 19.3733 35.5434 18.6C37.0901 17.8 38.7834 17.4 40.6234 17.4C42.3568 17.4 43.9034 17.7333 45.2634 18.4C46.6234 19.0667 47.6901 20.1067 48.4634 21.52C49.2634 22.9333 49.6634 24.76 49.6634 27H35.4234V25.6H43.4634C43.3568 23.28 43.0368 21.5733 42.5034 20.48C41.9968 19.36 41.2368 18.8 40.2234 18.8C39.5034 18.8 38.8901 19.16 38.3834 19.88C37.8768 20.5733 37.4901 21.5733 37.2234 22.88C36.9568 24.16 36.8234 25.6667 36.8234 27.4C36.8234 29.1067 37.0101 30.56 37.3834 31.76C37.7834 32.9333 38.3701 33.84 39.1434 34.48C39.9168 35.0933 40.8901 35.4 42.0634 35.4ZM51.9813 37V35.6H53.9813L54.3813 35.2V19.6L53.9813 19.2H51.9813V17.8C52.6746 17.8 53.5013 17.8 54.4613 17.8C55.4213 17.7733 56.3679 17.7333 57.3013 17.68C58.2613 17.6 59.0879 17.5067 59.7813 17.4L60.1813 17.8V35.2L60.5813 35.6H62.5813V37H51.9813ZM57.2213 15.4C56.3146 15.4 55.5146 15.0667 54.8213 14.4C54.1546 13.7067 53.8213 12.9067 53.8213 12C53.8213 11.0667 54.1546 10.2667 54.8213 9.6C55.5146 8.93333 56.3146 8.6 57.2213 8.6C58.1546 8.6 58.9546 8.93333 59.6213 9.6C60.2879 10.2667 60.6213 11.0667 60.6213 12C60.6213 12.9067 60.2879 13.7067 59.6213 14.4C58.9546 15.0667 58.1546 15.4 57.2213 15.4ZM64.5891 37V35.6H66.5891L66.9891 35.2V9.6L66.5891 9.2H64.5891V7.8C65.2824 7.8 66.1091 7.8 67.0691 7.8C68.0291 7.77333 68.9757 7.73333 69.9091 7.68C70.8691 7.6 71.6957 7.50666 72.3891 7.4L72.7891 7.8V35.2L73.1891 35.6H75.1891V37H64.5891Z" fill="#293651"/>
              <motion.path d="M90.2 37L81.6 14.88H81.4L79.6 12L79.2 11.6H76.2V10.2H86.88L94.12 29H94.32L101.6 10.2V15.68H101.4L93.2 37H90.2ZM76.2 37V35.6H79.2L79.6 35.24V12L81.4 14.88V35.24L81.8 35.6H85.2V37H76.2ZM99 37V35.6H101.2L101.6 35.2V10.2H110.4V11.6H108L107.8 11.8V35.2L108.2 35.6H110.4V37H99ZM124.642 35.4C125.975 35.4 127.175 35.08 128.242 34.44C129.335 33.8 130.242 33.0933 130.962 32.32L132.042 33.24C131.482 33.9067 130.828 34.56 130.082 35.2C129.362 35.84 128.455 36.3733 127.362 36.8C126.268 37.2 124.882 37.4 123.202 37.4C121.362 37.4 119.668 37.0133 118.122 36.24C116.575 35.44 115.335 34.2933 114.402 32.8C113.468 31.3067 113.002 29.5067 113.002 27.4C113.002 25.2933 113.468 23.4933 114.402 22C115.335 20.5067 116.575 19.3733 118.122 18.6C119.668 17.8 121.362 17.4 123.202 17.4C124.935 17.4 126.482 17.7333 127.842 18.4C129.202 19.0667 130.268 20.1067 131.042 21.52C131.842 22.9333 132.242 24.76 132.242 27H118.002V25.6H126.042C125.935 23.28 125.615 21.5733 125.082 20.48C124.575 19.36 123.815 18.8 122.802 18.8C122.082 18.8 121.468 19.16 120.962 19.88C120.455 20.5733 120.068 21.5733 119.802 22.88C119.535 24.16 119.402 25.6667 119.402 27.4C119.402 29.1067 119.588 30.56 119.962 31.76C120.362 32.9333 120.948 33.84 121.722 34.48C122.495 35.0933 123.468 35.4 124.642 35.4ZM155.359 35.2L155.759 35.6H157.759V37C157.066 37 156.239 37 155.279 37C154.346 37.0267 153.399 37.0667 152.439 37.12C151.479 37.1733 150.653 37.2667 149.959 37.4L149.559 37V33.8C149.053 34.7333 148.279 35.5733 147.239 36.32C146.199 37.04 144.986 37.4 143.599 37.4C141.866 37.4 140.333 37 138.999 36.2C137.666 35.4 136.626 34.2667 135.879 32.8C135.133 31.3067 134.759 29.5333 134.759 27.48C134.759 25.4267 135.133 23.6533 135.879 22.16C136.626 20.64 137.666 19.4667 138.999 18.64C140.333 17.8133 141.866 17.4 143.599 17.4C145.093 17.4 146.333 17.7467 147.319 18.44C148.306 19.1067 149.053 19.96 149.559 21V9.6L149.159 9.2H147.159V7.8C147.853 7.8 148.679 7.8 149.639 7.8C150.599 7.77333 151.546 7.73333 152.479 7.68C153.439 7.6 154.266 7.50666 154.959 7.4L155.359 7.8V35.2ZM149.559 30.8V24C148.813 22.2933 148.026 21.1333 147.199 20.52C146.399 19.9067 145.653 19.6 144.959 19.6C143.839 19.6 142.919 20.1867 142.199 21.36C141.506 22.5067 141.159 24.3867 141.159 27C141.159 29.6133 141.506 31.64 142.199 33.08C142.919 34.4933 143.839 35.2 144.959 35.2C145.653 35.2 146.399 34.8933 147.199 34.28C148.026 33.6667 148.813 32.5067 149.559 30.8ZM159.911 37V35.6H161.911L162.311 35.2V19.6L161.911 19.2H159.911V17.8C160.604 17.8 161.431 17.8 162.391 17.8C163.351 17.7733 164.298 17.7333 165.231 17.68C166.191 17.6 167.018 17.5067 167.711 17.4L168.111 17.8V35.2L168.511 35.6H170.511V37H159.911ZM165.151 15.4C164.244 15.4 163.444 15.0667 162.751 14.4C162.084 13.7067 161.751 12.9067 161.751 12C161.751 11.0667 162.084 10.2667 162.751 9.6C163.444 8.93333 164.244 8.6 165.151 8.6C166.084 8.6 166.884 8.93333 167.551 9.6C168.218 10.2667 168.551 11.0667 168.551 12C168.551 12.9067 168.218 13.7067 167.551 14.4C166.884 15.0667 166.084 15.4 165.151 15.4ZM194.119 35.2L194.519 35.6H196.519V37H185.919V35.6H187.919L188.319 35.2V23C188.319 21.72 188.092 20.84 187.639 20.36C187.212 19.8533 186.612 19.6 185.839 19.6C185.012 19.6 184.225 19.9067 183.479 20.52C182.759 21.1333 181.972 22.2267 181.119 23.8V35.2L181.519 35.6H183.519V37H172.919V35.6H174.919L175.319 35.2V19.6L174.919 19.2H172.919V17.8C173.612 17.8 174.399 17.8 175.279 17.8C176.185 17.7733 177.079 17.7333 177.959 17.68C178.839 17.6 179.625 17.5067 180.319 17.4L180.719 17.8V21.2H181.119C181.732 20.1333 182.559 19.24 183.599 18.52C184.639 17.7733 186.079 17.4 187.919 17.4C189.359 17.4 190.532 17.64 191.439 18.12C192.372 18.5733 193.052 19.2 193.479 20C193.905 20.7733 194.119 21.64 194.119 22.6V35.2ZM215.574 37.4C214.668 37.4 213.881 37.2533 213.214 36.96C212.574 36.6667 212.014 36.1467 211.534 35.4V24.8C211.534 23.12 211.254 21.7733 210.694 20.76C210.161 19.72 209.094 19.2 207.494 19.2C206.908 19.2 206.361 19.2667 205.854 19.4C205.348 19.5067 204.841 19.68 204.334 19.92C204.761 20.1867 205.094 20.5333 205.334 20.96C205.601 21.3867 205.734 21.8667 205.734 22.4C205.734 23.2 205.468 23.8667 204.934 24.4C204.401 24.9333 203.734 25.2 202.934 25.2C202.134 25.2 201.468 24.9333 200.934 24.4C200.401 23.84 200.134 23.1067 200.134 22.2C200.134 21.3467 200.414 20.6267 200.974 20.04C201.561 19.4267 202.321 18.9333 203.254 18.56C204.188 18.16 205.188 17.8667 206.254 17.68C207.348 17.4933 208.388 17.4 209.374 17.4C210.734 17.4 212.014 17.6 213.214 18C214.441 18.4 215.428 19.0933 216.174 20.08C216.948 21.04 217.334 22.4133 217.334 24.2V32.84C217.334 33.2133 217.428 33.5733 217.614 33.92C217.801 34.24 218.108 34.4 218.534 34.4C218.828 34.4 219.094 34.32 219.334 34.16C219.601 33.9733 219.841 33.7467 220.054 33.48L221.134 34.4C220.814 34.8533 220.428 35.32 219.974 35.8C219.548 36.2533 218.988 36.64 218.294 36.96C217.601 37.2533 216.694 37.4 215.574 37.4ZM206.134 37.4C204.028 37.4 202.294 36.8933 200.934 35.88C199.601 34.8667 198.934 33.5067 198.934 31.8C198.934 30.12 199.601 28.7733 200.934 27.76C202.268 26.72 204.001 26.2 206.134 26.2C207.628 26.2 208.788 26.4267 209.614 26.88C210.468 27.3067 211.108 27.7467 211.534 28.2V30.12C210.974 29.4533 210.361 28.96 209.694 28.64C209.028 28.2933 208.361 28.12 207.694 28.12C206.708 28.12 205.961 28.4667 205.454 29.16C204.974 29.8267 204.734 30.7067 204.734 31.8C204.734 32.8667 204.974 33.7467 205.454 34.44C205.961 35.1333 206.708 35.48 207.694 35.48C208.361 35.48 209.028 35.32 209.694 35C210.361 34.6533 210.974 34.1467 211.534 33.48V35.4C211.108 35.8533 210.468 36.3067 209.614 36.76C208.788 37.1867 207.628 37.4 206.134 37.4Z" fill="#00A78E"/>
              </motion.svg>

            </Link>
            <div className="hidden items-center lg:flex space-x-8">
              <div>
                <Link
                  to="home"
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  className="py-5 font-medium tracking-wide text-portfolioLight relative cursor-pointer"
                >
                  Home
                  <span className="absolute bottom-2 left-0 h-[3px] bg-portfolioLight w-[60%] rounded-full nav-hover"></span>
                </Link>
              </div>
              <div>
                <Link
                  to="skills"
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  className="py-5 font-medium tracking-wide text-portfolioLight relative cursor-pointer group"
                >
                  Skills
                  <span className="absolute bottom-2 left-0 h-[3px] bg-portfolioLight w-0 rounded-full group-hover:w-[60%] ease-in-out duration-300 nav-hover"></span>
                </Link>
              </div>
              <div>
                <Link
                  to="services"
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  className="py-5 font-medium tracking-wide text-portfolioLight relative cursor-pointer group"
                >
                  Services
                  <span className="absolute bottom-2 left-0 h-[3px] bg-portfolioLight w-0 rounded-full group-hover:w-[60%] ease-in-out duration-300 nav-hover"></span>
                </Link>
              </div>
              <div>
                <Link
                  to="projects"
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  className="py-5 font-medium tracking-wide text-portfolioLight relative cursor-pointer group"
                >
                  Projects
                  <span className="absolute bottom-2 left-0 h-[3px] bg-portfolioLight w-0 rounded-full group-hover:w-[60%] ease-in-out duration-300 nav-hover"></span>
                </Link>
              </div>
              <div>
                <Link
                  to="experience"
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  className="py-5 font-medium tracking-wide text-portfolioLight relative cursor-pointer group"
                >
                  Experience
                  <span className="absolute bottom-2 left-0 h-[3px] bg-portfolioLight w-0 rounded-full group-hover:w-[60%] ease-in-out duration-300 nav-hover"></span>
                </Link>
              </div>
              <div>
                <Link
                  to="bio"
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  className="py-5 font-medium tracking-wide text-portfolioLight relative cursor-pointer group"
                >
                  Bio
                  <span className="absolute bottom-2 left-0 h-[3px] bg-portfolioLight w-0 rounded-full group-hover:w-[60%] ease-in-out duration-300 nav-hover"></span>
                </Link>
              </div>
              <div>
                <Link
                  to="blog"
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  className="py-5 font-medium tracking-wide text-portfolioLight relative cursor-pointer group"
                >
                  Blog
                  <span className="absolute bottom-2 left-0 h-[3px] bg-portfolioLight w-0 rounded-full group-hover:w-[60%] ease-in-out duration-300 nav-hover"></span>
                </Link>
              </div>
            </div>

            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          to="home"
                          smooth={"easeInOutQuint"}
                          offset={-65}
                          className="inline-flex items-center cursor-pointer"
                        >
                          <img
                            src={logo}
                            alt=""
                            className="w-36 h-auto absolute top-5 left-5"
                          />
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <div>
                          <Link
                            to="home"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                          >
                        <div className='py-2'>
                            Home
                        </div>
                          </Link>
                        <Link
                            to="skills"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <div className='py-2'>
                            Skills
                          </div>
                          </Link>
                          <Link
                            to="services"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <div className='py-2'>
                            Services
                          </div>
                          </Link>
                          <Link
                            to="project"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <div className='py-2'>
                            Projects
                          </div>
                          </Link>
                          <Link
                            to="experience"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <div className='py-2'>
                            Experience
                          </div>
                          </Link>
                          <Link
                            to="bio"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <div className='py-2'>
                            Bio
                          </div>
                          </Link>
                          <Link
                            to="blog"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <div className='py-2'>
                            Blog
                          </div>
                          </Link>
                      </div>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
    }else {
    return (
      <div className="fixed w-screen bg-portfolioLight z-40 text-lg mt-3 -translate-y-3 ease-in-out duration-100">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link
              to="home"
              smooth={"easeInOutQuint"}
              offset={-65}
              className="inline-flex items-center cursor-pointer"
            >
              <img
                src={logo}
                alt=""
                className="w-36 h-auto absolute lg:-top-1 top-1 left-0"
              />
            </Link>
            <ul className="hidden items-center lg:flex space-x-8 ">
              <li>
                <Link
                  activeClass="nav-active"
                  to="home"
                  spy={true}
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  spyThrottle={500}
                  className="py-5 font-medium tracking-wide text-portfolioMainText cursor-pointer hover:text-portfolioHighlight duration-300 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="nav-active"
                  to="skills"
                  spy={true}
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  spyThrottle={500}
                  className="py-5 font-medium tracking-wide text-portfolioMainText cursor-pointer hover:text-portfolioHighlight duration-300 ease-in-out"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  activeClass="nav-active"
                  to="services"
                  spy={true}
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  spyThrottle={500}
                  className="py-5 font-medium tracking-wide text-portfolioMainText cursor-pointer hover:text-portfolioHighlight duration-300 ease-in-out"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  activeClass="nav-active"
                  to="projects"
                  spy={true}
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  spyThrottle={500}
                  className="py-5 font-medium tracking-wide text-portfolioMainText cursor-pointer hover:text-portfolioHighlight duration-300 ease-in-out"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  activeClass="nav-active"
                  to="experience"
                  spy={true}
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  spyThrottle={500}
                  className="py-5 font-medium tracking-wide text-portfolioMainText cursor-pointer hover:text-portfolioHighlight duration-300 ease-in-out"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  activeClass="nav-active"
                  to="bio"
                  spy={true}
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  spyThrottle={500}
                  className="py-5 font-medium tracking-wide text-portfolioMainText cursor-pointer hover:text-portfolioHighlight duration-300 ease-in-out"
                >
                  Bio
                </Link>
              </li>
              <li>
                <Link
                  activeClass="nav-active"
                  to="blog"
                  spy={true}
                  smooth={"easeInOutQuint"}
                  offset={-65}
                  spyThrottle={500}
                  className="py-5 font-medium tracking-wide text-portfolioMainText cursor-pointer hover:text-portfolioHighlight duration-300 ease-in-out"
                >
                  Blog
                </Link>
              </li>
            </ul>

            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          to="home"
                          smooth={"easeInOutQuint"}
                          offset={-65}
                          className="inline-flex items-center cursor-pointer"
                        >
                          <img
                            src={logo}
                            alt=""
                            className="w-36 h-auto absolute top-5 left-5"
                          />
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                    <div>
                          <Link
                            to="home"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                          >
                        <div className='py-2'>
                            Home
                        </div>
                          </Link>
                        <Link
                            to="skills"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <div className='py-2'>
                            Skills
                          </div>
                          </Link>
                          <Link
                            to="services"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <div className='py-2'>
                            Services
                          </div>
                          </Link>
                          <Link
                            to="project"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <div className='py-2'>
                            Projects
                          </div>
                          </Link>
                          <Link
                            to="experience"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <div className='py-2'>
                            Experience
                          </div>
                          </Link>
                          <Link
                            to="bio"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <div className='py-2'>
                            Bio
                          </div>
                          </Link>
                          <Link
                            to="blog"
                            smooth={"easeInOutQuint"}
                            offset={-65}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <div className='py-2'>
                            Blog
                          </div>
                          </Link>
                      </div>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
            }
}

export default Navbar