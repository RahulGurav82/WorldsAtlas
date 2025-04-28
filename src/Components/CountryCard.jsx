import React from 'react';
import { NavLink } from 'react-router-dom';

const CountryCard = ({ crrVal }) => {
  const { name, flags, population, region, capital } = crrVal;

  return (
    <li className="w-full max-w-xs list-none transform transition-all duration-300 hover:-translate-y-1">
      <div className="h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
        <figure className="h-40 w-full overflow-hidden">
          <img
            src={flags.svg}
            alt={`${name.common} flag`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </figure>
        <div className="p-5">
          <h2 className="text-lg font-bold mb-3 text-gray-800 dark:text-white truncate">{name.common}</h2>
          <div className="space-y-1.5 mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Population:</span> {population.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Region:</span> {region}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Capital:</span> {capital || 'N/A'}
            </p>
          </div>
          <NavLink to={`/country/${name.common}`}>
            <button className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-1">
              <span>View Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;