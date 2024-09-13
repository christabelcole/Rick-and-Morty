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
          {/* <p>{character.description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;