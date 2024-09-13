import React, { useState } from 'react';
import { Character } from '../types/Character';


interface CharacterCardProps {
  character: Character;
}

const CharacterCardContainer: React.FC<CharacterCardProps> = ({ character }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(!flipped);

  return (
    <div className={`character-card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-front">
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
      </div>
      <div className="card-back">
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Origin:</strong> {character.origin.name}</p>
        <p><strong>Location:</strong> {character.location.name}</p>
      </div>
    </div>
  );
};

export default CharacterCardContainer;
