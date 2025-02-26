import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen]=useState(false);
    const handleMenuToggler=()=>{
      setIsMenuOpen(!isMenuOpen)
    }

    const navItems=[
      {path: '/', title: 'start a search'},
      {path: '/my-job', title: 'My Jobs'},
      {path: '/salary', title: 'Salary Estimated'},
      {path: '/post-job', title: 'Post A Job'},
    ]

  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
            <a href='/'className='flex items-center gap-2 text-2xl text-black'>
              <svg src='images.png' width='29' height='30' viewBox='0 0 29 30'>
                <circle cx='12.0143' cy='12.0143' fill='#3575E2' fillOpacity='0.4'/>
              </svg>
              <span>Job Portal</span>
              </a>
              <ul className='hidden md:flex gap-12'>
                {
                  navItems.map(({path,title})=>(
                    <li key={path} className='text-base text-primary'>
                      <NavLink
                      to={path}
                      className={({ isActive}) =>
                        isActive? "active": ""
                      }
                      >
                        {title}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
                {/* large devices */}
              <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                <Link to="/login" className='py-2 px-5 border rounded'>Log In</Link>
                <Link to="/register" className='py-2 px-5 border rounded bg-blue text-white'>Sing Up</Link>
              </div>
                {/* mobile divece */}
                <div className='md:hidden block'>
                  <button onClick={handleMenuToggler}>{
                    isMenuOpen? <FaXmark className='w-5 h-5 text-primary'/> : <FaBarsStaggered className='w-5 h-5 text-primary'/>
                  }</button>
                </div>
            
        </nav>
        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
            <ul>
            {
                  navItems.map(({path,title})=>(
                    <li key={path} className='text-base text-white first:text-white py-1'>
                      <NavLink
                      to={path}
                      className={({ isActive}) =>
                        isActive? "active": ""
                      }
                      >
                        {title}
                      </NavLink>
                    </li>
                  ))
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar


// https://www.figma.com/file/LTTCZIPu4vfNZ8DR4bOUzd/Job-offer-platform-(Community)?type=design&node-id=17-108&mode=design&t=00o2nHsuhG9WlhDb-0