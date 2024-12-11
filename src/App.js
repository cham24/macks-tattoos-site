import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MacksPage from './pages/artist_pages/MackArtistPage';
import StarrsPage from './pages/artist_pages/StarrArtistPage';
import PreciousPage from './pages/artist_pages/PreciousArtistPage';
import JusticesPage from './pages/artist_pages/JusticeArtistPage';
import MattsPage from './pages/artist_pages/MattArtistPage';
import Artists from './pages/Artists';
import Aftercare from './pages/Aftercare';
import MinorPiercing from './pages/aftercare_pages/MinorPiercing';
import TattooAftercare from './pages/aftercare_pages/TattooAftercare';
import PiercingAftercare from './pages/aftercare_pages/PiercingAftercare';
// import ArtistPage from './pages/ArtistPage'; 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/mack" exact={true} element={<MacksPage />} />
          <Route path="/starr" exact={true} element={<StarrsPage />} />
          <Route path="/precious" exact={true} element={<PreciousPage />} />
          <Route path="/justice" exact={true} element={<JusticesPage />} />
          <Route path="/matt" exact={true} element={<MattsPage />} />
          <Route path="/aftercare" exact={true} element={<Aftercare />} />
          <Route path="/aftercare-minor-piercing" exact={true} element={<MinorPiercing />} />
          <Route path="/aftercare-tattoo" exact={true} element={<TattooAftercare />} />
          <Route path="/aftercare-piercing" exact={true} element={<PiercingAftercare />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
