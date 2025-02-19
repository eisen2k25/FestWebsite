// Preloader.js
import React, { useEffect, useState } from 'react';
import '../Preloaders/Preloader.css';

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 5000); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`preloader ${loaded ? 'loaded' : ''}`}>
      <div className="logo-container">
        <img src="https://res.cloudinary.com/dmw5kp4tr/image/upload/v1737800241/website-logo_ulkvap.png" alt="Logo" />
      </div>
      <div className="text-container">
        {/* <p>EISEN'24</p> */}
      </div>
    </div>
  );
};

export default Preloader;