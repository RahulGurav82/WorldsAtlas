

import React from 'react';
import countryData from "../api/CountryData.json";

const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Here are the interesting facts <br className="hidden md:block" /> we're proud of
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover fascinating information about countries around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {countryData.map(({ id, countryName, capital, population, interestingFact }) => (
            <div 
              key={id}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-2">{countryName}</h3>
              
              <div className="space-y-2 text-gray-300">
                <div>
                  <span className="font-semibold text-gray-400">Capital: </span>
                  <span>{capital}</span>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-400">Population: </span>
                  <span>{population.toLocaleString()}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="italic text-gray-400">Did you know?</p>
                  <p className="text-white">{interestingFact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;