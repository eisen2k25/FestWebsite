import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Carousel Section */}
      <div className="carousel-section">
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          className="home-carousel"
        >
          <div>
            <img src={process.env.PUBLIC_URL + '/banner.png'} alt="Slide 1" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/banner2.jpg'} alt="Slide 2" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/banner-3.jpg'} alt="Slide 3" />
          </div>
        </Carousel>
      </div>

      {/* Invitation Card Section */}
      <div className="invitation-card-section">
        <h2>EISEN 2k25</h2>
        <p><b>Department of Metallurgical Engineering</b></p>
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/website-logo copy.png'} alt="Invitation Card" />
          <p>Join us for a special event!</p>
        </div>
      </div>

      {/* Additional Section Before Footer */}
      <div className="additional-section">
        <h2>Don't Miss Out! ❤️</h2>
        <p>We have exciting events lined up for you. Stay tuned for more updates.</p>
      </div>
    </div>
  );
}

export default Home;