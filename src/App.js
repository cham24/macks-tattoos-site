import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MacksPage from './pages/artist_pages/SampleArtistPage';
import Artists from './pages/Artists';
import Aftercare from './pages/Aftercare';
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

          <Route path="/aftercare" exact={true} element={<Aftercare />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
