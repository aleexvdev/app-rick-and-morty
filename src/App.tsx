import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharactersApp from './components/Characters/CharactersApp';
import EpisodiesApp from './components/Episodies/EpisodiesApp';
import { HomeApp } from './components/Home/HomeApp';
import HomeMainApp from './components/Home/HomeMainApp';
import LocationApp from './components/Location/LocationApp';

/**
 * 
 * @returns 
 * <Route path="/:id" element={<CardDetails />} /> 

         <Route path="/episodes" element={<Episodes />} /> 
          <Route path="/episodes/:id" element={<CardDetails />} /> 

      <Route path="/location" element={<Location />} /> 
  <Route path="/location/:id" element={<CardDetails />} /> 
 */
function App() {

  return (
    <>
      <Router>
        <HomeApp />
        <Routes>
          <Route path="/" element={<HomeMainApp />} />
          <Route path="/characters" element={<CharactersApp />} />
          <Route path="/location" element={<LocationApp />} />
          <Route path="/episodies" element={<EpisodiesApp />} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
