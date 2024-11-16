import React from 'react';
import { createRoot } from 'react-dom/client';
import CryptoNewsAnalyzer from './components/CryptoNewsAnalyzer';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CryptoNewsAnalyzer />
  </React.StrictMode>
);