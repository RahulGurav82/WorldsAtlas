import React from 'react';
import { MagnifyingGlassIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

const SearchFilter = ({ search, setSearch, filter, setFilter, setCountries, countries }) => {
  const sortCountries = (value) => {
    const sortedCountries = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortedCountries);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        {/* Search Bar */}
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
            placeholder="Search for a country..."
            className="block w-full pl-10 pr-3 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-700 dark:text-gray-200"
          />
        </div>

        {/* Controls Group */}
        <div className="flex flex-wrap gap-3">
          {/* Sort Buttons */}
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => sortCountries("asc")}
              className="px-4 py-2 rounded-l-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-gray-700 dark:text-gray-200 flex items-center"
            >
              <ArrowUpIcon className="w-4 h-4 mr-1" />
              A-Z
            </button>
            <button
              onClick={() => sortCountries("des")}
              className="px-4 py-2 rounded-r-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 border-l-0 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-gray-700 dark:text-gray-200 flex items-center"
            >
              <ArrowDownIcon className="w-4 h-4 mr-1" />
              Z-A
            </button>
          </div>

          {/* Region Filter */}
          <div className="relative">
            <select
              value={filter}
              onChange={(evt) => setFilter(evt.target.value)}
              className="appearance-none block w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-700 dark:text-gray-200 pr-8"
            >
              <option value="all">All Regions</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;