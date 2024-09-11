// src/containers/LocationListContainer.tsx
import React, { useEffect, useState } from 'react';
import { fetchLocations } from '../services/api';
import { Location } from '../types/Location';
import '../styles/LocationList.scss';

const LocationListContainer: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [typeFilter, setTypeFilter] = useState<string>('all');

  useEffect(() => {
    const getLocations = async () => {
      const data = await fetchLocations();
      setLocations(data);
      setFilteredLocations(data);
    };
    getLocations();
  }, []);

  const handleFilterChange = () => {
    let updatedList = [...locations];

    if (typeFilter !== 'all') {
      updatedList = updatedList.filter((location) => location.type === typeFilter);
    }

    setFilteredLocations(updatedList);
  };

  useEffect(() => {
    handleFilterChange();
  }, [typeFilter]);

  return (
    <div className="location-list">
      <div className="filters">
        <select onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="all">All Types</option>
          <option value="Planet">Planet</option>
          <option value="Cluster">Cluster</option>
        </select>
      </div>
      {filteredLocations.map((location) => (
        <div key={location.id} className="location-card">
          <h3>{location.name}</h3>
          <p>Type: {location.type}</p>
          <p>Dimension: {location.dimension}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationListContainer;
