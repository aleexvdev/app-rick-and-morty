import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharactersApp from './components/Characters/CharactersApp';
import CharacterDetails from './components/Characters/DetailsCharacters/CharacterDetails';
import EpisodeDetails from './components/Episodies/EpisodeDetails/EpisodeDetails';
import EpisodesApp from './components/Episodies/EpisodesApp';
import { HomeApp } from './components/Home/HomeApp';
import HomeMainApp from './components/Home/HomeMainApp';
import LocationApp from './components/Location/LocationApp';
import LocationDetails from './components/Location/LocationDetails/LocationDetails';
import Error404 from './components/NotFound/Error404';


function App() {

  return (
    <>
      <Router>
        <HomeApp />
        <Routes>
          <Route path="/" element={<HomeMainApp />} />
          <Route path="/characters" element={<CharactersApp />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/location" element={<LocationApp />} />
          <Route path="/location/:id" element={<LocationDetails />} />
          <Route path="/episodes" element={<EpisodesApp />} />
          <Route path="/episodes/:id" element={<EpisodeDetails />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
