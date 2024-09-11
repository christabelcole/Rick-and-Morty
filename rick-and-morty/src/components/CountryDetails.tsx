import React from 'react';
import { Country } from '../types/Country';
import '../styles/CountryDetails.scss';

interface Props {
  country: Country;
}

const CountryDetails: React.FC<Props> = ({ country }) => {
  return (
    <div className="country-details">
      <h3>Country: {country.name.common}</h3>
      <p>Capital: {country.capital[0]}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <img src={country.flags.png} alt={country.name.common} />
    </div>
  );
};

export default CountryDetails;
