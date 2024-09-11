import React from 'react';
import CharacterListContainer from './containers/CharacterListContainer';
import Header from './components/Header';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <CharacterListContainer />
    </div>
  );
};

export default App;
