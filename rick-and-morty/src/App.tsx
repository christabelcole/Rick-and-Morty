import React from 'react';
import CharacterListContainer from './components/CharacterList';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <CharacterListContainer />
    </div>
  );
};

// Basic Navbar Component
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>Rick and Morty Universe Explorer</h1>
    </nav>
  );
};

export default App;
