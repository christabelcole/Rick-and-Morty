import axios from 'axios';

const RICK_AND_MORTY_API = 'https://rickandmortyapi.com/api/character';
const REST_COUNTRIES_API = 'https://restcountries.com/v3.1/all';

export const fetchCharacters = async () => {
  const response = await axios.get(RICK_AND_MORTY_API);
  return response.data.results;
};

export const fetchCountries = async () => {
  const response = await axios.get(REST_COUNTRIES_API);
  return response.data;
};
