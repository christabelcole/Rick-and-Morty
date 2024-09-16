import React from 'react';
import { Episode } from '../types/Episode';
import '../styles/EpisodeCard.scss'; // Ensure this path is correct

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{episode.name}</h3>
        <p>Air Date: {episode.air_date}</p>
        <p>Episode: {episode.episode}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
