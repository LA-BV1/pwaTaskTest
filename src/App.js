import React from 'react';
import './styles/App.css';
import Categories from './components/categories/Categories'

function App() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }

  return (
    <Categories />
  );
}

export default App;
