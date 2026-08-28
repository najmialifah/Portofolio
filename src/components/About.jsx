import React from 'react';
import { Code, Layout, Cpu } from 'lucide-react';
import aboutImg from '../assets/aboutme.jpg';
import './About.css';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="marquee-container">
          <div className="marquee-content">
            C        ⭑        C++        ⭑        Python        ⭑        HTML        ⭑        CSS        ⭑        JS        ⭑        TypeScript        ⭑        React        ⭑        Vue.js        ⭑        Next.js        ⭑        Tailwind CSS        ⭑        Node.js        ⭑        Go        ⭑        PostgreSQL        ⭑        Docker        ⭑        
          </div>
          <div className="marquee-content" aria-hidden="true">
            C        ⭑        C++        ⭑        Python        ⭑        HTML        ⭑        CSS        ⭑        JS        ⭑        TypeScript        ⭑        React        ⭑        Vue.js        ⭑        Next.js        ⭑        Tailwind CSS        ⭑        Node.js        ⭑        Go        ⭑        PostgreSQL        ⭑        Docker        ⭑        
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="intro-text">
              I am a Computer Science undergraduate at FPMIPA Universitas Pendidikan Indonesia,
              passionate about end-to-end software development.
            </p>
            <p>
              My journey in tech is driven by a fascination with how systems work under the hood, 
              combined with a love for creating beautiful, user-centric interfaces. 
              I bridge the gap between complex system architecture and seamless user experiences.
            </p>
            <p>
              Whether I'm architecting a backend microservice or crafting a pixel-perfect React frontend, 
              I bring dedication, logic, and creativity to every project I touch.
            </p>
          </div>
          
          <div className="about-visual">
            <div className="blob-frame">
              <img src={aboutImg} alt="Nana" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
