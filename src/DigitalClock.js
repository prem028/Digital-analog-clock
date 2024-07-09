import React, { useState, useEffect } from 'react';
import './DigitalClock.css'; // Import CSS file

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="digital-clock-container">
      <div className="digital-clock-header">
        <h2>Welcome to Prem's Digital Clock</h2>
      </div>
      <div className="digital-clock">{currentTime.toLocaleTimeString()}</div>
    </div>
  );
};

export default DigitalClock;
