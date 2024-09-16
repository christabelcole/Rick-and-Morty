import React, { useEffect, useState } from 'react';
import { fetchEpisodes } from '../services/api'; // API service to fetch episode data
import { Episode } from '../types/Episode'; // Type definition for Episode
import EpisodeCard from '../components/EpisodeCard'; // EpisodeCard component
import '../styles/EpisodesPage.scss'; // Page-specific styles

const EpisodesPage: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getEpisodes = async () => {
      try {
        const data = await fetchEpisodes();
        setEpisodes(data);
        setFilteredEpisodes(data); // Initialize filteredEpisodes with full list
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    getEpisodes();
  }, []);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const filtered = episodes.filter(episode =>
      episode.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEpisodes(filtered);
  };

  return (
    <div>
      <nav>
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Search Episodes"
          />
          <button type="submit">Search</button>
        </form>
      </nav>
      <div className="card-container">
        {filteredEpisodes.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default EpisodesPage;
