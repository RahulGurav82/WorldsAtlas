import React, { useEffect, useState, useTransition } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { getCountryData } from '../api/PostApi';

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
  }, []);

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <h1 className="text-3xl font-semibold text-white animate-pulse">Loading...</h1>
      </div>
    );
  }

  return (
    <section className="pt-24 pb-12 px-6 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {country && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="text-white space-y-4">
              <h1 className="text-3xl font-bold">{country.name.official}</h1>

              <div className="space-y-2">
                <p><span className="font-semibold">Native Names:</span> {Object.keys(country.name.nativeName).map((key) => country.name.nativeName[key].common).join(", ")}</p>
                <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
                <p><span className="font-semibold">Region:</span> {country.region}</p>
                <p><span className="font-semibold">Sub Region:</span> {country.subregion}</p>
                <p><span className="font-semibold">Capital:</span> {country.capital}</p>
                <p><span className="font-semibold">Top Level Domain:</span> {country.tld[0]}</p>
                <p><span className="font-semibold">Currencies:</span> {Object.keys(country.currencies).map((curElem) => country.currencies[curElem].name).join(", ")}</p>
                <p><span className="font-semibold">Languages:</span> {Object.keys(country.languages).map((key) => country.languages[key]).join(", ")}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <NavLink to="/country">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition">
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default CountryDetails;
