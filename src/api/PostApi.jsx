import axios from "axios";
// /all?fields=name,population,region,capital,flags
// https://restcountries.com/v3.1

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1"
});

// HTTP GET METHOD
export const getCountriesData = () => {
  return api.get("/all?fields=name,population,region,capital,flags")
}

// HTTP GET METHOD fro the indvi. country name
export const getCountryData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};