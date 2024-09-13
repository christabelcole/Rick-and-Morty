import React from 'react';
import CharacterList from './components/CharacterList';
import LocationListContainer from './containers/LocationListContainer';
import EpisodeListContainer from './containers/EpisodeListContainer';

import './styles/App.scss';
import './styles/CharacterCard.scss';
import './styles/Header.scss';



const App: React.FC = () => {
  return (
    <div>
      <header className="navbar">
        <h1>Rick and Morty Universe</h1>
        <ul>
          <li><a href="#characters" className="nav-link">Characters</a></li>
          <li><a href="#locations" className="nav-link">Locations</a></li>
          <li><a href="#episodes" className="nav-link">Episodes</a></li>
        </ul>
      </header>
      <div id="characters">
        <CharacterList />
      </div>
      <div id="locations">
        <LocationListContainer />
      </div>
      <div id="episodes">
        <EpisodeListContainer />
      </div>
    </div>
  );
};

export default App;