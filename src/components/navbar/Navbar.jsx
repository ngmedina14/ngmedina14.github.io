import React,{useEffect, useState} from 'react'
import logo from '../../assets/images/logo/logo.png'
import {Link} from 'react-scroll'
import './Navbar.css'

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
      <div className="fixed w-screen bg-transparent z-40 text-lg translate-y-3 ease-in-out  delay-150 duration-300">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="relative flex items-center justify-between">
            <Link
              to="home"
              smooth={"easeInOutQuint"}
              offset={-100}
              className="inline-flex items-center cursor-pointer"
            >
              <img
                src={logo}
                alt=""
                className="w-36 h-auto absolute lg:-top-1 top-1 left-0"
              />
            </Link>
            <div className="hidden items-center lg:flex space-x-8">
              <div>
                <Link
                  to="home"
                  smooth={"easeInOutQuint"}
                  offset={-100}
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
                  offset={-100}
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
                  offset={-100}
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
                  offset={-100}
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
                  offset={-100}
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
                  offset={-100}
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
                  offset={-100}
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
                          offset={-100}
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
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                          >
                        <div className='py-2'>
                            Home
                        </div>
                          </Link>
                        <Link
                            to="skills"
                            smooth={"easeInOutQuint"}
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            >
                            <div className='py-2'>
                            Skills
                          </div>
                          </Link>
                          <Link
                            to="services"
                            smooth={"easeInOutQuint"}
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            >
                            <div className='py-2'>
                            Services
                          </div>
                          </Link>
                          <Link
                            to="project"
                            smooth={"easeInOutQuint"}
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            >
                            <div className='py-2'>
                            Projects
                          </div>
                          </Link>
                          <Link
                            to="experience"
                            smooth={"easeInOutQuint"}
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            >
                            <div className='py-2'>
                            Experience
                          </div>
                          </Link>
                          <Link
                            to="bio"
                            smooth={"easeInOutQuint"}
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            >
                            <div className='py-2'>
                            Bio
                          </div>
                          </Link>
                          <Link
                            to="blog"
                            smooth={"easeInOutQuint"}
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
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
              offset={-100}
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
                  offset={-100}
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
                  offset={-100}
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
                  offset={-100}
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
                  offset={-100}
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
                  offset={-100}
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
                  offset={-100}
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
                  offset={-100}
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
                          offset={-100}
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
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                          >
                        <div className='py-2'>
                            Home
                        </div>
                          </Link>
                        <Link
                            to="skills"
                            smooth={"easeInOutQuint"}
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            >
                            <div className='py-2'>
                            Skills
                          </div>
                          </Link>
                          <Link
                            to="services"
                            smooth={"easeInOutQuint"}
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            >
                            <div className='py-2'>
                            Services
                          </div>
                          </Link>
                          <Link
                            to="project"
                            smooth={"easeInOutQuint"}
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            >
                            <div className='py-2'>
                            Projects
                          </div>
                          </Link>
                          <Link
                            to="experience"
                            smooth={"easeInOutQuint"}
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            >
                            <div className='py-2'>
                            Experience
                          </div>
                          </Link>
                          <Link
                            to="bio"
                            smooth={"easeInOutQuint"}
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
                            >
                            <div className='py-2'>
                            Bio
                          </div>
                          </Link>
                          <Link
                            to="blog"
                            smooth={"easeInOutQuint"}
                            offset={-100}
                            className="font-medium tracking-wide text-portfolioMainText hover:text-portfolioPrimary duration-300 ease-in-out cursor-pointer"
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