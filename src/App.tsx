import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterListContainer from './containers/CharacterListContainer'; // Make sure this path is correct
import LocationsPage from './pages/LocationsPage'; // Make sure this file exists and is correctly named
import EpisodesPage from './pages/EpisodesPage'; // Make sure this file exists and is correctly named
import Navbar from './components/Navbar'; // Make sure this file exists and is correctly named
import './styles/App.scss'; // Ensure this file exists and is correctly named

const App: React.FC = () => {
  return (
    <Router>
      <Navbar onSearch={() => {}} />
      <Routes>
        <Route path= "/Rick-and-Morty" element={<CharacterListContainer />} />
        <Route path="/Rick-and-Morty/locations" element={<LocationsPage />} />
        <Route path="/Rick-and-Morty/episodes" element={<EpisodesPage />} />
        {/* <Route path="/" element={<CharacterListContainer />} /> Default route */}
      </Routes>
    </Router>
  );
};

export default App;
