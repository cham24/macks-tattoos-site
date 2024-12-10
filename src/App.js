import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MacksPage from './pages/artist_pages/SampleArtistPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/mack" exact={true} element={<MacksPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
