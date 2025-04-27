import React, { useEffect, useState, useTransition } from 'react';
import { getCountriesData } from '../api/PostApi';
import CountryCard from '../Components/CountryCard';
import SearchFillter from '../Components/SearchFillter';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [fillter, setFillter] = useState("all");

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

  const SearchCountry = (country) => {
      if (search) {
        return country.name.common.toLowerCase().includes(search.toLowerCase())
      }
      return country;
  }

  const fillterRegion = (country) => {
    if (fillter === "all") return country;

    return country.region === fillter;
  }

  const fillterCountries = countries.filter((country) => SearchCountry(country) && fillterRegion(country));

  return (
    <section className="min-h-screen bg-gray-100 p-6 pt-20">
      {isPending && <h1 className="text-center text-xl font-semibold text-gray-700 mb-6">Loading...</h1>}
      
      <SearchFillter
        search={search}
        setSearch={setSearch}
        fillter={fillter}
        setFillter={setFillter}
        countries={countries} 
        setCountries={setCountries}
      />

      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {fillterCountries.map((crrVal, index) => (
          <CountryCard crrVal={crrVal} key={index} />
        ))}
      </ul>

    </section>
  );
};

export default Country;
