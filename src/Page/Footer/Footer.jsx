import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Footer.css';
import demoLogo from '/ICONS/divinelogovertical.png';
import instagramLogo from '/ICONS/instagram.png';
import facebookLogo from '/ICONS/facebook.png';
import twitterLogo from '/ICONS/twitter.png';
import linkedinLogo from '/ICONS/linkedin.png';
import youtubeLogo from '/ICONS/youtube.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logoNLinks">
        <div className="footer-section logo-section">
          <img src={demoLogo} alt="Divine Connection Logo" className="footer-logo" />
          <hr className="logo-line" />
          <p>"Divine Connection: Your cosmic guide. Personalized astrology for clarity. Explore horoscopes and consultations."</p>
        </div>
        <hr className="vertical-line" />
        <div className="footer-section links-section">
          <h3>Important Links</h3>
          <ul>
            <li><Link to="/AboutUs">About us</Link></li>
            <li>Contact us</li>
            <li>Disclaimer</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li><Link to="/TermsAndConditions">Terms & Conditions</Link></li>
          </ul>
        </div>
        <hr className="vertical-line" />
      </div>
      <div className="footer-section social-section">
        <h3>Follow us</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/divine_connection_._?igsh=MWcyeHh2NTR2b2FsMg==" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61556921626879&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.youtube.com/@divine_connection_2" target="_blank" rel="noopener noreferrer">
            <img src={youtubeLogo} alt="YouTube" className="social-icon" />
          </a>
        </div>
        <p>© 2024 divineconnection.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
