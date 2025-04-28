import React from 'react';
import { ArrowRight, Globe, Map, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import About from './About';

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16 overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-8 z-10">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                Explore the world with WorldsAtlas
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 text-transparent bg-clip-text leading-tight mb-4">
                Explore Our World, <br className="hidden sm:block" />One Country <br className="hidden sm:block" />At a Time
              </h1>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg">
              Discover the rich history, vibrant cultures, and stunning landscapes of every nation on Earth. Our interactive atlas makes it easy to explore global diversity.
            </p>

            {/* Feature List */}
            <div className="flex flex-col sm:flex-row gap-6 py-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Search className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Search</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Find any country instantly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Filter</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Sort by region or size</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Map className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Learn</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Detailed information</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <NavLink to="/country">
                <button className="group relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Start Exploring</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-500 dark:to-blue-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                </button>
              </NavLink>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center pb-10 md:pb-0 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20 blur-2xl transform -rotate-12 scale-110"></div>
              <img
                src="/images/world.png"
                alt="Earth Globe"
                className="relative w-64 sm:w-80 md:w-96 lg:w-full max-w-lg animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="relative h-16 bg-transparent">
          <svg className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path 
              fill="#1e293b" 
              fillOpacity="1" 
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,170.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      
      <About />
    </>
  );
};

export default Home;