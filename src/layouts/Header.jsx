import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Menu, X, Github} from 'lucide-react';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='w-full bg-gray-700 z-50 fixed shadow-md'>
      <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-white h-16 flex items-center justify-between'>
          <div className='text-2xl font-bold'>WorldsAtlas</div>
          <div className='hidden md:flex md:items-center md:space-x-6'>
            <NavLink to={"/"}><p className='text-white hover:text-blue-700'>Home</p></NavLink>
            <NavLink to={"/country"}><p className=' text-white hover:text-blue-700'>Country</p></NavLink>
            <NavLink to={"/about"}><p className=' text-white hover:text-blue-700'>About</p></NavLink>
            <NavLink to={"/contact"}><p className=' text-white hover:text-blue-700'>Contact</p></NavLink>
          </div>

          <div className='md:hidden cursor'>
            <button onClick={()=>setIsOpen(!isOpen)}>
              { isOpen ? <X /> : <Menu />}
            </button>
          </div>

          <div className='hidden md:block'>
            <a href="http://github.com/rahulgurav82" target="_blank"
             rel="noopener noreferrer">
               <Github /> 
            </a> 
          </div>
        </div>
      </div>

      { isOpen && (
        <div className='md:hidden transition-all text-center bg-white '>
          <div className='flex flex-col items-center space-y-4'>
            <NavLink to={"/"}><p className=' text-gray-800 hover:text-blue-700'>Home</p></NavLink>
            <NavLink to={"/about"}><p className=' text-gray-800 hover:text-blue-700'>About</p></NavLink>
            <NavLink to={"/country"}><p className=' text-gray-800 hover:text-blue-700'>Country</p></NavLink>
            <NavLink to={"/contact"}><p className=' text-gray-800 hover:text-blue-700'>Contact</p></NavLink>
              <a href="http://github.com/rahulgurav82" target="_blank"
              rel="noopener noreferrer">
                <Github /> 
              </a> 
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header