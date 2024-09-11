// src/components/CharacterList.tsx
import React, { useEffect, useState } from 'react';
import CharacterCardContainer from '../containers/CharacterCardContainer'; // Corrected import path
import { fetchCharacters } from '../services/api';
import { Character } from '../types/Character';

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };
    getCharacters();
  }, []);

  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCardContainer key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;

