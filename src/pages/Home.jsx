import React from 'react'
import { ArrowRight } from 'lucide-react';
import About from './About';


const Home = () => {
  return (
    <>
    <section className="">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-10 gap-8">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Explore The World, One <br className="hidden sm:block" /> Country At a Time
          </h1>

          <p className="text-white text-base sm:text-lg">
            Discover history, culture, and beauty of every nation. Sort, search and <br className="hidden sm:block" /> filter countries to find details you discover.
          </p>

          {/* CTA Button */}
          <button className='flex text-white items-center py-2 px-4 bg-slate-800 rounded-full gap-4 border-2'>
            <p>Start Exporing</p>
            <ArrowRight />
          </button>

        </div>

        {/* earth globe Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/world.png"
            alt="Earth"
            className="w-64 sm:w-80 md:w-96"
          />
        </div>

        
      </div>
    </section>
    <About />
    </>

  )
}

export default Home
