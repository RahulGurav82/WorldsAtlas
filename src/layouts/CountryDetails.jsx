import React, { useEffect, useState, useTransition } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { getCountryData } from '../api/PostApi';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData(params.id);
        setCountry(res.data[0]);
      } catch (error) {
        console.error('Failed to fetch country data:', error);
      }
    });
  }, [params.id]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="relative w-32 h-32">
          <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-200 dark:border-gray-700 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-0 left-0 w-full h-full border-8 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <NavLink to="/country" className="inline-flex items-center px-5 py-2.5 mb-10 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to All Countries
        </NavLink>

        {country && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Flag Image */}
              <div className="overflow-hidden h-full">
                <img
                  src={country.flags.svg}
                  alt={country.flags.alt || `Flag of ${country.name.common}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Country Details */}
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{country.name.official}</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mb-8">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-semibold">Native Name: </span>
                      {Object.keys(country.name.nativeName || {}).length > 0 
                        ? Object.keys(country.name.nativeName).map(key => country.name.nativeName[key].common)[0] 
                        : country.name.common}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-semibold">Population: </span>
                      {country.population.toLocaleString()}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-semibold">Region: </span>
                      {country.region}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-semibold">Sub Region: </span>
                      {country.subregion || 'N/A'}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-semibold">Capital: </span>
                      {country.capital?.[0] || 'N/A'}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-semibold">Top Level Domain: </span>
                      {country.tld?.[0] || 'N/A'}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-semibold">Currencies: </span>
                      {Object.keys(country.currencies || {}).length > 0 
                        ? Object.keys(country.currencies).map(key => `${country.currencies[key].name} (${country.currencies[key].symbol || ''})`).join(', ')
                        : 'N/A'}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-semibold">Languages: </span>
                      {Object.keys(country.languages || {}).length > 0 
                        ? Object.keys(country.languages).map(key => country.languages[key]).join(', ')
                        : 'N/A'}
                    </p>
                  </div>
                </div>

                {/* Border Countries */}
                {country.borders && country.borders.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Border Countries:</h3>
                    <div className="flex flex-wrap gap-2">
                      {country.borders.map((border, index) => (
                        <span key={index} className="px-4 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                          {border}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryDetails;