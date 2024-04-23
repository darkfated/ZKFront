import React from 'react';
import ReactDOM from 'react-dom'; // Импорт ReactDOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импорт Router
import CryptoApp from './components/CryptoApp';
import CoinInfoPage from './components/CoinInfoPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<CryptoApp />} />
      <Route path="/:coinId" element={<CoinInfoPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);