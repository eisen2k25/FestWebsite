// root.js
import React, { useState, useEffect } from 'react';
import '../Styles/root.css'; // Import the CSS file
import {Link} from 'react-router-dom';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-03-24T00:00:00'); // Set your target date and time

    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Calculate remaining days
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Remaining hours
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes
        const seconds = Math.floor((difference % (1000 * 60)) / 1000); // Remaining seconds

        setCountdown({ days, hours, minutes, seconds });
      } else {
        // Optional: If countdown reaches zero, stop the countdown or set it to 0
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Run the calculation every second (1000 ms)
    const interval = setInterval(calculateTimeRemaining, 1000);

    // Call it once immediately to set the initial values
    calculateTimeRemaining();

    // Cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-container">
      {/* Video Background */}
      <video autoPlay loop muted className="background-video">
        <source src={'https://res.cloudinary.com/dkuriblkh/video/upload/v1735817328/kn6yilgsm2s7o3nil5ty.mp4'} type="video/mp4" />
      </video>

      {/* Content over the video */}
      <div className="content">
        <h1 style={{ marginBottom: '20px' }}>Countdown to Witness the Biggest Event!!</h1>
        <div className="timer-container">
          <div className="timer-box">
            <div className="timer-text">{countdown.days}</div>
            <div className="timer-label">Days</div>
          </div>
          <div className="timer-box">
            <div className="timer-text">{countdown.hours}</div>
            <div className="timer-label">Hours</div>
          </div>
          <div className="timer-box">
            <div className="timer-text">{countdown.minutes}</div>
            <div className="timer-label">Minutes</div>
          </div>
          <div className="timer-box">
            <div className="timer-text">{countdown.seconds}</div>
            <div className="timer-label">Seconds</div>
          </div>
        </div>
        <br />
        <h2>For more information, you can visit our Home page. Click on the button below!</h2>
        <Link to="/home">
          <button className="button-home">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default CountdownTimer;