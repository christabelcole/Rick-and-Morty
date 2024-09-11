import React, { useEffect, useState } from 'react';
import { Character } from '../types/Character';
import { fetchCountries } from '../services/api';
import CharacterCard from '../components/CharacterCard';
import { Country } from '../types/Country';

interface Props {
  character: Character;
}

const CharacterCardContainer: React.FC<Props> = ({ character }) => {
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const getCountry = async () => {
      const countries = await fetchCountries();
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      setCountry(randomCountry);
    };
    getCountry();
  }, []);

  return <CharacterCard character={character} country={country} />;
};

export default CharacterCardContainer;
