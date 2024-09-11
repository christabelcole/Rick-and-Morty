// src/containers/EpisodeListContainer.tsx
import React, { useEffect, useState } from 'react';
import { fetchEpisodes } from '../services/api';
import { Episode } from '../types/Episode';
import '../styles/EpisodeList.scss';

const EpisodeListContainer: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>([]);
  const [seasonFilter, setSeasonFilter] = useState<string>('all');

  useEffect(() => {
    const getEpisodes = async () => {
      const data = await fetchEpisodes();
      setEpisodes(data);
      setFilteredEpisodes(data);
    };
    getEpisodes();
  }, []);

  const handleFilterChange = () => {
    let updatedList = [...episodes];

    if (seasonFilter !== 'all') {
      updatedList = updatedList.filter((episode) => episode.episode.startsWith(seasonFilter));
    }

    setFilteredEpisodes(updatedList);
  };

  useEffect(() => {
    handleFilterChange();
  }, [seasonFilter]);

  return (
    <div className="episode-list">
      <div className="filters">
        <select onChange={(e) => setSeasonFilter(e.target.value)}>
          <option value="all">All Seasons</option>
          <option value="S01">Season 1</option>
          <option value="S02">Season 2</option>
        </select>
      </div>
      {filteredEpisodes.map((episode) => (
        <div key={episode.id} className="episode-card">
          <h3>{episode.name}</h3>
          <p>Air Date: {episode.air_date}</p>
          <p>Episode: {episode.episode}</p>
        </div>
      ))}
    </div>
  );
};

export default EpisodeListContainer;
