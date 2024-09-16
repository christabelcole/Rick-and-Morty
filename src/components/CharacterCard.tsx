import { Character } from '../types/Character';
import { useState } from 'react';
import '../styles/CharacterCard.scss';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card" onClick={handleFlip}>
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <h3>{character.name}</h3>
          <img src={character.image} alt={character.name} />
        </div>
        <div className="card-back">
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
