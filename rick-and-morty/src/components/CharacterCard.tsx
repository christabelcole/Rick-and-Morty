import React from 'react';
import { Character } from '../types/Character';
import { Country } from '../types/Country';
import CountryDetails from './CountryDetails';
import '../styles/CharacterCard.scss';

interface Props {
  character: Character;
  country: Country | null;
}

const CharacterCard: React.FC<Props> = ({ character, country }) => {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <p>{character.species} - {character.status} - {character.gender}</p>
      <img src={character.image} alt={character.name} />
      {country && <CountryDetails country={country} />}
    </div>
  );
};

export default CharacterCard;

