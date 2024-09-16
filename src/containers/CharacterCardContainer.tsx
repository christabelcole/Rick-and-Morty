import React, { useState } from 'react';
import { Character } from '../types/Character';

interface CharacterCardProps {
  character: Character;
}

const CharacterCardContainer: React.FC<CharacterCardProps> = ({ character }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="character-card" onClick={handleFlip}>
      <div className={`card-content ${isFlipped ? 'flipped' : ''}`}>
        {/* Show the front side when not flipped */}
        {!isFlipped && (
          <div className="card-front">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
          </div>
        )}

        {/* Show the back side when flipped */}
        {isFlipped && (
          <div className="card-back">
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Origin:</strong> {character.origin.name}</p>
            <p><strong>Location:</strong> {character.location.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterCardContainer;
