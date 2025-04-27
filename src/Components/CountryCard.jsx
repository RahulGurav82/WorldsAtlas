import React from 'react';
import { NavLink } from 'react-router-dom';

const CountryCard = ({ crrVal }) => {
  const { name, flags, population, region, capital } = crrVal;

  return (
    <li className="list-none">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-60">
        <figure className="h-40 overflow-hidden">
          <img
            src={flags.svg}
            alt={`${name.common} flag`}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{name.common}</h2>
          <p className="text-sm text-gray-600"><span className="font-semibold">Population:</span> {population.toLocaleString()}</p>
          <p className="text-sm text-gray-600"><span className="font-semibold">Region:</span> {region}</p>
          <p className="text-sm text-gray-600"><span className="font-semibold">Capital:</span> {capital}</p>
          <NavLink to={`/country/${name.common}`}>
            <button className='border-2 border-black bg-slate-400 rounded-lg py-2 px-4'>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
