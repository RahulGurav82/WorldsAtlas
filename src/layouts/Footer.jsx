import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerData = [
  {
    "icon": <MdPlace className="h-6 w-6" />,
    "title": "Find us",
    "details": "Mumbai, Maharashtra"
  },
  {
    "icon": <IoCallSharp className="h-6 w-6" />,
    "title": "Call us",
    "details": "9137408709"
  },
  {
    "icon": <TbMailPlus className="h-6 w-6" />,
    "title": "Mail us",
    "details": "guravrahul988@gmail.com"
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-900"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 border-b border-gray-800 pb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span className="text-2xl font-bold">WorldsAtlas</span>
            </div>
            <p className="text-gray-400">
              Explore our interactive atlas featuring detailed information about countries around the world. Learn about cultures, populations, capitals, and interesting facts.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/RahulGurav82" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-colors duration-300">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/rahul-gurav-3b8a04331/" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-colors duration-300">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/rahulgurav82" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-colors duration-300">
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <NavLink to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 py-2">Home</NavLink>
              <NavLink to="/country" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 py-2">Countries</NavLink>
              <NavLink to="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 py-2">About</NavLink>
              <NavLink to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 py-2">Contact</NavLink>
              <a href="https://github.com/RahulGurav82" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 py-2">Source Code</a>
              <NavLink to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 py-2">Privacy Policy</NavLink>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-4">
              {footerData.map(({ icon, title, details }, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg text-blue-400">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">{title}</h4>
                    <p className="text-gray-400">{details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          <div className="text-gray-400 text-center md:text-left">
            <p>Copyright &copy; {currentYear}. All Rights Reserved by <a href="https://github.com/RahulGurav82" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Rahul Gurav</a></p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <NavLink to="/" className="hover:text-blue-400 transition-colors duration-300">Home</NavLink>
            <NavLink to="/about" className="hover:text-blue-400 transition-colors duration-300">About</NavLink>
            <a href="https://github.com/RahulGurav82/Country.git" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">Source Code</a>
            <NavLink to="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;