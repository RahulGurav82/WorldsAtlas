import React from 'react'
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import {NavLink} from 'react-router-dom'

const footerData = [
  {
    "icon": <MdPlace />,
    "title": "Find us",
    "details": "Pune, Maharashtra"
  },
  {
    "icon": <IoCallSharp />,
    "title": "Call us",
    "details": "9876543211"
  },
  {
    "icon": <TbMailPlus />,
    "title": "Mail us",
    "details": "contact@kodyfier.com"
  }
]

const Footer = () => {
  return (
    <footer className='bg-slate-900 w-full   flex flex-col border-t-2'>
        <div className='w-full flex items-center justify-between mt-4 px-4 md:px-20'>
            {
              footerData.map(({ icon, title, details}, key) => {
                return (
                  <div key={key} className='flex items-center gap-2'>
                    <p className='text-blue-700 text-3xl'>{icon}</p>
                    <div>
                      <p className='text-white font-medium'>{title}</p>
                      <p className='text-white'>{details}</p>
                    </div>
                  </div>
                )
              })
            }
        </div>
        <div className='w-full h-16 bg-slate-800 mt-8 px-4 md:px-20 flex items-center justify-between'>
            <div className='text-white'>
              <p>copyright &copy;2024. All Rights reserver <span className='text-blue-600'><a href="https/github.com/RahulGurav82">Rahul Gurav</a></span></p>
            </div>
            <div className='flex items-center gap-4 text-white'>
                <NavLink>Home</NavLink>
                <NavLink>Social</NavLink>
                <NavLink>source Code</NavLink>
                <NavLink>Contact</NavLink>
            </div>
        </div>
    </footer>
  )
}

export default Footer