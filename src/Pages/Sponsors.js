import React from 'react';
import "../Styles/Sponsors.css";
import TitleSponsor from '../Assets/tata-steels.png';
import CoSponsor1 from '../Assets/meta-gate.jpeg'
import CoSponsor2 from '../Assets/aurora-logo-web-1-1.png';


function Sponsors() {
  return (
    <>
    <h1 className="main-heading"> Sponsors </h1>
    
    <h2 className="title-sponsor-heading">Title Sponsors</h2>
    <div className="title-sponsor-div">
      <img src={TitleSponsor} alt="Title-Sponsor"/>
    </div>

    <h2 className="co-sponsor-heading">Co-Sponsors</h2>
    <div className="co-sponsor-div"> 
    <img src={CoSponsor1} alt="co-sponsor"/>
    </div>
    <div className="co-sponsor-div">
      <img src={CoSponsor2} alt="co-sponsor"/>
    </div>
    <br/>
    </>
  )
}

export default Sponsors
