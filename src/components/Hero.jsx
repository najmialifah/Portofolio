import React, { useState, useEffect } from 'react';
import { Download, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ["Software Engineer", "Frontend Developer"];

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
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="hero-image-placeholder">
            <img src={profileImg} alt="Nana Profile" className="hero-profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
