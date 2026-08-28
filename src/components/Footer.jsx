import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-title">
            <h2>Let's build something beautiful together.</h2>
            <p>Open for collaborations and exciting opportunities.</p>
          </div>
          
          <div className="footer-links">
            <a href="mailto:nalifahhilmiya@gmail.com" className="social-link" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="https://github.com/najmialifah" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/nalifah" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com/najhlmya" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Nana. Built with <Heart size={14} className="heart-icon" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
