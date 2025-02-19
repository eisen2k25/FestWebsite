// Footer.js
import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from '@mui/icons-material/Email';
import "../Styles/Footer.css";

function Footer() {
  
  const openInstagram = () => {
    window.open('https://www.instagram.com/eisen25_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==/', '_blank');
  };

  const sendEmail = () => {
    window.location.href = 'mailto:eisen2k25@gmail.com';
  };

  return (
    <div className="footer">
      <div className="socialMedia-1">
        <InstagramIcon onClick={openInstagram} />
      </div>
      <div className="socialMedia-2">
      <EmailIcon onClick={sendEmail} />
      </div>
      <br/>
      <p>&copy; All rights reserved to EISEN 2K25❤️.</p>
    </div>
    
  );
}

export default Footer;
