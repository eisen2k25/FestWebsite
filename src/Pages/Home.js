import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home">
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
          <img src={process.env.PUBLIC_URL + '/slide2.jpg'} alt="Slide 2" />
          
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/slide3.jpg'} alt="Slide 3" />
         
        </div>
      </Carousel>

      
    </div>
  );
}

export default Home;
