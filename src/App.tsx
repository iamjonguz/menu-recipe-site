import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/pages/Home';
import { Menu } from './views/pages/Menu/Menu';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/menu-recipe-site" element={<Home />} />
          <Route path="/menu-recipe-site/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
