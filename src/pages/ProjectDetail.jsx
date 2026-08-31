import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Code } from 'lucide-react';
import dealanImg from '../assets/img/dealan.png';
import seblakImg from '../assets/img/seblak.png';
import cattakeImg from '../assets/img/cattake.png';
import './ProjectDetail.css';

const projectsData = [
  {
    id: 1,
    title: "CatTake",
    shortDesc: "A Web & Mobile Cat Adoption App that connects stray cats with loving new owners.",
    // role: "Fullstack Developer",
    duration: "September 2025 - January 2026",
    tech: ["Expo", "Vue.js", "Firebase", "Node.js"],
    image: cattakeImg,
    background: "The large number of stray and abandoned cats struggling to find shelter sparked the idea for CatTake. This application was built to streamline the adoption process, efficiently connecting animal lovers with local shelters.",
    // gallery: [cattakeImg],
    conclusion: "CatTake successfully increased local adoption rates by 40% and raised public awareness regarding the importance of pet welfare.",
  },
  {
    id: 2,
    title: "Dealan",
    shortDesc: "A scalable and efficient multi-service backend system for e-commerce management.",
    // role: "Backend Engineer",
    duration: "February 2026 - June 2026",
    tech: ["Go", "Microservices", "Docker", "Jenkins", "Kubernetes"],
    image: dealanImg,
    background: "The previous monolithic system could not handle traffic spikes during major discount events. The Dealan project aimed to redesign the architecture into microservices to ensure scalability, reliability, and automated deployment.",
    // gallery: [dealanImg],
    conclusion: "With the new architecture, Dealan achieved 99.99% uptime during flash sales and reduced deployment time from hours to just minutes thanks to the CI/CD pipeline.",
  },
  {
    id: 3,
    title: "Web Order UMKM Food",
    shortDesc: "A web-based food ordering application to help digitalize local MSMEs (Micro, Small and Medium Enterprises).",
    // role: "Designer",
    duration: "April 2026 - June 2026",
    tech: ["React", "Figma", "REST API", "Tailwind CSS"],
    image: seblakImg,
    background: "Most local culinary MSMEs struggle to reach customers online due to platform limitations. This Web Order app was created as a simple, fast, and easy-to-use ordering solution for both buyers and shop owners.",
    // gallery: [seblakImg],
    conclusion: "This application facilitates over 500 transactions per month and helps MSMEs significantly increase their revenue in the digital era.",
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    // Trigger fade-in animation slightly after mount
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, [id]);

  if (!project) {
    return (
      <div className="project-detail-container not-found">
        <h2>Project Not Found</h2>
        <button onClick={() => navigate('/')} className="btn btn-outline detail-back-btn">
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className={`project-detail-container ${isVisible ? 'fade-in-up' : 'hidden'}`}>
      <div className="detail-top-nav">
        <button onClick={() => navigate('/')} className="btn btn-primary detail-back-btn bounce-hover">
          <ArrowLeft size={18} /> Back to Portfolio
        </button>
      </div>

      <div className="detail-header">
        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-short-desc">{project.shortDesc}</p>
      </div>

      <div className="hero-image-wrapper">
        <img src={project.image} alt={`${project.title} hero`} className="detail-hero-image" />
      </div>

      <div className="metadata-grid">
        <div className="metadata-item">
          <Calendar className="metadata-icon" size={20} />
          <div>
            <span className="metadata-label">Duration</span>
            <span className="metadata-value">{project.duration}</span>
          </div>
        </div>
        <div className="metadata-item">
          <User className="metadata-icon" size={20} />
          <div>
            <span className="metadata-label">Role</span>
            <span className="metadata-value">{project.role}</span>
          </div>
        </div>
        <div className="metadata-item">
          <Code className="metadata-icon" size={20} />
          <div>
            <span className="metadata-label">Tech Stack</span>
            <div className="metadata-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-subtitle">Why It Was Built</h2>
        <div className="detail-text-content">
          <p>{project.background}</p>
        </div>
      </div>

      <div className="detail-section gallery-section">
        <h2 className="detail-subtitle">Documentation & Gallery</h2>
        <div className="gallery-grid">
          {project.gallery.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="detail-section conclusion-section">
        <h2 className="detail-subtitle">Key Takeaways</h2>
        <div className="conclusion-card">
          <p>{project.conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
