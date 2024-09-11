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
      <h1>Rick and Morty Universe</h1>
      <CharacterList />
      <LocationListContainer />
      <EpisodeListContainer />
    </div>
  );
};

export default App;
