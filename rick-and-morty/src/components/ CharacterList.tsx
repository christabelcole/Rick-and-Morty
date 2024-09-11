import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/api';
import { Character } from '../types/Character';
import CharacterCardContainer from '../containers/CharacterCardContainer'; // Corrected path
import '../styles/App.scss';

const CharacterListContainer: React.FC = () => {
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

export default CharacterListContainer;
