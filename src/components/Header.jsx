import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Bars3BottomRightIcon,
  XMarkIcon
} from '@heroicons/react/24/solid'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='bg-violet-50 px-5 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-20'>
      <div className='relative flex items-center justify-between'>
        <Link to='/' className='inline-flex items-center'>
          <img className='w-7 h-8' src="/public/business.svg" alt="" />
          <span className='ml-2 text-2xl font-bold tracking-wide text-gray-800'>
            LinkUp
          </span>
        </Link>

        {/* Nav Items Section */}
        <div className='items-center hidden space-x-8 lg:flex'>
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/appliedJobs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blogs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        </div>
        <div className='hidden lg:block'><Link><button className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 p-3 rounded-md text-white">Star Applying</button></Link></div>
        
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        LinkUp
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/statistics'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/appliedJobs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blogs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blogs
                      </Link>
                    </li>
                    <Link><button className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-md text-white mt-5" >Star Applying</button></Link>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
