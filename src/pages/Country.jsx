import React, { useEffect, useState, useTransition } from 'react';
import { getCountriesData } from '../api/PostApi';
import CountryCard from '../Components/CountryCard';
import SearchFilter from '../Components/SearchFilter';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountriesData();
        setCountries(res.data);
      } catch (error) {
        console.error('Failed to fetch countries:', error);
      }
    });
  }, []);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filteredCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6 pt-24">
      {isPending && (
        <div className="flex justify-center items-center mb-8">
          <div className="relative w-24 h-24">
            <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-200 dark:border-gray-700 rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-0 left-0 w-full h-full border-8 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries} 
          setCountries={setCountries}
        />

        {filteredCountries.length === 0 && !isPending ? (
          <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">No countries found</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search or filter</p>
          </div>
        ) : (
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center mt-10">
            {filteredCountries.map((country, index) => (
              <CountryCard crrVal={country} key={index} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Country;