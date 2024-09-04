// src/App.js
import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Survey from './components/Survey';
import './App.css';

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <div className="app">
      {!hasStarted ? <WelcomeScreen onStart={handleStart} /> : <Survey />}
    </div>
  );
};

export default App;
