import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About */}
        <div className="footer-column">
          <h4>About Celebrats</h4>
          <p>We help you achieve your event goals with perfection and create unforgettable memories.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <ScrollLink to="wedding-hero" smooth={true} duration={500} offset={-80}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services-section" smooth={true} duration={500} offset={-80}>
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="gallery-section" smooth={true} duration={500} offset={-80}>
                Events
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact-section" smooth={true} duration={500} offset={-80}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p><i className="fas fa-map-marker-alt"></i> 138 Lalghati Gufa Mandir Road, Bhopal</p>
          <p><i className="fas fa-envelope"></i> celebratsevent@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91 81097 02044</p>

          {/* Social Icons */}
          <div className="footer-social">
            <a href="https://www.facebook.com/celebrats.in" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/celebrats.in" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com/@celebrats735" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; 2025 Celebrats Events. All Rights Reserved. | Designed with ❤️ for your special moments
      </div>
    </footer>
  );
};

export default Footer;