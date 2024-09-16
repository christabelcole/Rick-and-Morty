import React, { useEffect, useState } from 'react';
import { fetchLocations } from '../services/api'; // API service to fetch location data
import { Location } from '../types/Location'; // Type definition for Location
import LocationCard from '../components/LocationCard'; // LocationCard component
import '../styles/LocationsPage.scss'; // Page-specific styles

const LocationsPage: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getLocations = async () => {
      try {
        const data = await fetchLocations();
        setLocations(data);
        setFilteredLocations(data); // Initialize filteredLocations with full list
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    getLocations();
  }, []);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const filtered = locations.filter(location =>
      location.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  return (
    <div>
      <nav>
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Search Locations"
          />
          <button type="submit">Search</button>
        </form>
      </nav>
      <div className="card-container">
        {filteredLocations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default LocationsPage;
