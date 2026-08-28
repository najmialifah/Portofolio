import React, { useState, useEffect } from 'react';
import { Download, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ["Software Engineer", "Frontend Developer"];
  
  const funFacts = [
    "Pink 🎀",
    "Bandung, Indonesia 📍",
    "Nakama One Piece 🏴‍☠️",
    "86 🦋",
    "Sushi 🍣",
    "Astrophile 🌌",
    "Zero Spice Tolerance 🌶️🚫"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTitle = titles[index % titles.length];
      
      if (!isDeleting) {
        setText(currentTitle.substring(0, text.length + 1));
        if (text === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentTitle.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? 50 : 150);
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Welcome to my portfolio</div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Nana</span><span className="exclamation-nice">!</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typewriter">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            I craft beautiful, intuitive, and highly functional digital experiences.
            Blending system logic with aesthetic interfaces.
          </p>
          <div className="hero-actions">
            <a href="https://drive.google.com/file/d/1GOp13WWaTjhfqQ9UXP0i333_yWZ--_Bm/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download CV <Download size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Connect <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-star">
            <svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" overflow="visible">
              <defs>
                <linearGradient id="heroStarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF9A9E" />
                  <stop offset="50%" stopColor="#FECFEF" />
                  <stop offset="100%" stopColor="#FEC163" />
                </linearGradient>
              </defs>
              <path className="sparkle hero-sparkle-1" d="M20 0C20 1.5 21.5 3 23 3C21.5 3 20 4.5 20 6C20 4.5 18.5 3 17 3C18.5 3 20 1.5 20 0Z" fill="#FEC163"/>
              <path className="sparkle hero-sparkle-2" d="M3 18C3 19 4 20 5 20C4 20 3 21 3 22C3 21 2 20 1 20C2 20 3 19 3 18Z" fill="#FF9A9E"/>
              <polygon
                className="hero-main-star"
                points="12 3 14.6 8.5 20.5 9.2 16.1 13.3 17.3 19.1 12 16.2 6.7 19.1 7.9 13.3 3.5 9.2 9.4 8.5"
                fill="url(#heroStarGradient)"
                stroke="url(#heroStarGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="hero-image-placeholder">
            <img src={profileImg} alt="Nana Profile" className="hero-profile-img" />
            <div className="fun-facts-grid">
              {funFacts.map((fact, i) => (
                <div className={`fun-fact-card card-${i}`} key={i}>
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
