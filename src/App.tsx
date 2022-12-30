import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/pages/Home';
import { Menu } from './views/pages/Menu/Menu';

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu-recipe-site/menu" element={<Menu />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
