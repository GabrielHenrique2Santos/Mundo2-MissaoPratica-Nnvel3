import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">LivroLista</Link>
          </li>
          <li className="nav-item">
            <Link to="/dados" className="nav-link">LivroDados</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
