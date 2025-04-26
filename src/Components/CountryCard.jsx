import React from 'react'

const CountryCard = ({crrVal, key}) => {
    const { name, flag, population, region, capital} = crrVal;
  return (
    <li key={key}>
        <div className='text-white'>
            {crrVal.name.common}
        </div>
    </li>
  )
}

export default CountryCard