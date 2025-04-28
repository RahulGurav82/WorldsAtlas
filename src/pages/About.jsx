import React, { useState } from 'react';
import countryData from "../api/CountryData.json";
import { Globe, MapPin, Users, Info } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 bg-gray-900 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 bg-blue-900/30 rounded-lg mb-4">
            <Info className="h-5 w-5 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Interesting Facts About <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Our Global Community</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover fascinating information about countries around the world that will expand your knowledge and perspective.
          </p>
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countryData.map(({ id, countryName, capital, population, interestingFact }) => (
            <div 
              key={id}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl border border-gray-800 ${
                hoveredCard === id ? 'transform -translate-y-1' : ''
              }`}
              onMouseEnter={() => setHoveredCard(id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{countryName}</h3>
                  <Globe className={`h-5 w-5 text-blue-400 transition-transform duration-500 ${
                    hoveredCard === id ? 'transform rotate-45' : ''
                  }`} />
                </div>
                
                {/* Country Stats */}
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-indigo-400" />
                    <div className="flex items-center justify-between w-full">
                      <span className="text-gray-400">Capital</span>
                      <span className="font-medium">{capital}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-indigo-400" />
                    <div className="flex items-center justify-between w-full">
                      <span className="text-gray-400">Population</span>
                      <span className="font-medium">{population.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card Footer with Fact */}
              <div className="mt-6 p-6 pt-4 bg-gradient-to-br from-gray-800/50 to-indigo-900/20">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-indigo-900/50 text-indigo-400 border border-indigo-800 mt-0.5">
                    <Info className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-indigo-300 mb-1">Did you know?</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{interestingFact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a 
            href="/country" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore All Countries
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;