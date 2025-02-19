import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../Assets/home-logo.jpg';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>EISEN'25</h1>
        <h2>Welcomes you!!</h2>
        <p>
          <b>Eisen</b> is an Annual Technical Event Hosted by
          <br /> The Department of <b>Metallurgical Engineering</b> at{' '}
          <b>JNTU-Gurajada Vizianagram</b>.
        </p>
        <p>To know more about Eisen, click on the Events button below.</p>
        <Link to="/events">
          <button>Events</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
