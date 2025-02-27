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
    <footer className="footer">
      <div className="footer-container">
        <div className="socialMedia">
          <InstagramIcon onClick={openInstagram} className="icon instagram-icon" />
          <EmailIcon onClick={sendEmail} className="icon email-icon" />
        </div>
        <p className="footer-text">&copy; {new Date().getFullYear()} EISEN 2K25. All rights reserved ❤️.</p>
      </div>
    </footer>
  );
}

export default Footer;
