// src/components/Navbar.tsx
import React from 'react';
import '../styles/Navbar.scss'; // Make sure this file exists

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#characters" className="nav-link">Characters</a></li>
        <li><a href="#locations" className="nav-link">Locations</a></li>
        <li><a href="#episodes" className="nav-link">Episodes</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
