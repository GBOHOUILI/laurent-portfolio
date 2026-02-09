import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Actions from './pages/ActionAreas';
import Campaigns from './pages/Campaigns';
import Certificates from './pages/Certificates';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;