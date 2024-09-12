import CharacterList from './components/CharacterList';
import LocationListContainer from './containers/LocationListContainer';
import EpisodeListContainer from './containers/EpisodeListContainer';
import Navbar from './components/Navbar';
import './styles/App.scss';
import './styles/CharacterCard.scss';
import './styles/Header.scss';
import StarsBackground from './components/StarsBackground';

const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <CharacterList />
      <LocationListContainer />
      <EpisodeListContainer />
      <StarsBackground/>
    </div>
  );
};

export default App;
