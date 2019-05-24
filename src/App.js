import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'

function App() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
