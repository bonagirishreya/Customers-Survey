// components/ThankYouScreen.js
import React, { useEffect } from 'react';

const ThankYouScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload(); // Reset to the welcome screen
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="thank-you-screen">
      <h2>Thank you for your time!</h2>
    </div>
  );
};

export default ThankYouScreen;
