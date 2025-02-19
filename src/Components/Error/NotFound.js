import React from 'react';
import { Link } from 'react-router-dom';
import "../Error/NotFound.css";

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <img
        src={process.env.PUBLIC_URL + '/oops.png'}
        alt="404 Not Found"
        className='oops-image'
        style={{ maxWidth: '60%', height: 'auto' }}
      />
      <h2 className='oops-heading'>Oops! You've come to the wrong place.</h2>
      <p className='oops-text'>
        If you're looking for Events you can check out our{' '}
        <Link to="/events">Events</Link> <br/>
        <br/>
        Or navigate back to the{' '}
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
