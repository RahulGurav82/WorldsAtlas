import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/PostApi';
import CountryCard from '../Components/CountryCard';

const Country = () => {
  const [isPending, startTransition] =  useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(()=> {

    startTransition(async ()=> {
      const res = await getCountryData();
      setCountries(res.data)
      // console.log(res.data)
    });
    
  }, []);


  return (
  <section>
    {isPending && <h1 className='text-white'>Loading.....</h1>}
    <ul>
      {
        countries.map((crrVal, key) => {
          return <CountryCard crrVal={crrVal} key={key}/>
        })
      }
    </ul>
  </section>
  )
}

export default Country