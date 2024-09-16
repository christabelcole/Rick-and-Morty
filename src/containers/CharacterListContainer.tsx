import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/api';
import { Character } from '../types/Character';
import Navbar from '../components/Navbar';
import CharacterCard from '../components/CharacterCard';
import '../styles/CharacterListContainer.scss';

const CharacterListContainer: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
        setFilteredCharacters(data); // Initialize filteredCharacters with full list
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    getCharacters();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

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
