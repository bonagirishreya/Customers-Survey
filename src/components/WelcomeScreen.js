// components/WelcomeScreen.js
import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Our Customer Survey!</h1>
      <button onClick={onStart}>Start</button>
    </div>
  );
};

export default WelcomeScreen;
