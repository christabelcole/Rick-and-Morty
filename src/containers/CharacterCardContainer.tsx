import React from 'react';
import { Character } from '../types/Character';

interface CharacterCardContainerProps {
  character: Character;
}

const CharacterCardContainer: React.FC<CharacterCardContainerProps> = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.species}</p>
      <p>{character.gender}</p>
    </div>
  );
};

export default CharacterCardContainer;
