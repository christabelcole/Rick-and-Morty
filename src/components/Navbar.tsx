import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_navbar.scss'; // Ensure this path is correct

interface NavbarProps {
  onSearch: (query: string) => void; // Function to handle search query
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query); // Call the onSearch function with the query parameter
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Rick and Morty Universe</div>
      <ul className="navbar-links">
        <li><Link to="/Rick-and-Morty/">Characters</Link></li>
        <li><Link to="/Rick-and-Morty/locations">Locations</Link></li>
        <li><Link to="/Rick-and-Morty/episodes">Episodes</Link></li>
      </ul>
      <form className="search-bar" onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Characters"
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;

