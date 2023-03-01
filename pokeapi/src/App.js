import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePages';
import './App.css';
import PokemonInfo from './pages/PokemonInfo';

function App() {
  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon" element={<PokemonInfo />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
