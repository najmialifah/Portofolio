import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active'); // Remove to allow repeat animations on scroll up/down
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container">
      <div className="animated-background">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>
      <Navbar />
      <div className="reveal">
        <Hero />
      </div>
      <div className="divider"></div>
      <div className="reveal">
        <About />
      </div>
      <div className="divider"></div>
      <div className="reveal">
        <Experience />
      </div>
      <div className="divider"></div>
      <div className="reveal">
        <Projects />
      </div>
      <div className="divider"></div>
      <div className="reveal">
        <Footer />
      </div>
    </div>
  );
}

export default App;
