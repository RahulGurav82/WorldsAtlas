import React from 'react'

const SearchFillter = ({search, setSearch, fillter, setFillter, setCountries, countries}) => {

    const sortContries = (value) => {
        const sortContry = [...countries].sort((a, b) => {
            return value === "asc" 
            ? a.name.common.localeCompare(b.name.common) :
            b.name.common.localeCompare(a.name.common)
        });
        setCountries(sortContry);
    }

  return (
    <div>
        <input type="text" name="search" value={search}
        onChange={(evt)=> setSearch(evt.target.value)}
        />

        <div>
            <button onClick={()=> sortContries("asc")}>ASC</button>
        </div>

        <div>
            <button onClick={()=> sortContries("des")}>DESC</button>
        </div>

        <div>
            <select className='' value={fillter} onChange={(evt)=> setFillter(evt.target.value)}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </div>
  )
}

export default SearchFillter