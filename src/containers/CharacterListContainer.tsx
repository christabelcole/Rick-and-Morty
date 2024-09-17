import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/api';
import { Character } from '../types/Character';
import CharacterCard from '../components/CharacterCard';
import '../styles/CharacterListContainer.scss';

const CharacterListContainer: React.FC = () => {
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setFilteredCharacters(data); // Initialize filteredCharacters with full list
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    getCharacters();
  }, []);

  return (
    <div>
      <div className="character-list">
        {filteredCharacters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterListContainer;

