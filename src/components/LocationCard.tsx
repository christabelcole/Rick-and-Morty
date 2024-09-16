import React from 'react';
import { Location } from '../types/Location';
import '../styles/LocationCard.scss'; // Ensure this path is correct

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{location.name}</h3>
        <p>Type: {location.type}</p>
        <p>Dimension: {location.dimension}</p>
      </div>
    </div>
  );
};

export default LocationCard;
