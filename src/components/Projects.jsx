import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import dealanImg from '../assets/img/dealan.png';
import seblakImg from '../assets/img/seblak.png';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "CatTake",
      description: "Aplikasi Web & Mobile Tracking Adopsi Kucing. Menyoroti pengembangan antarmuka interaktif dan integrasi fungsionalitas di berbagai platform.",
      tech: ["React Native", "Vue.js", "Firebase"],
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubLink: "https://github.com/najmialifah/seblak-web",
      featured: true
    },
    {
      id: 2,
      title: "Dealan",
      description: "Sistem backend multi-service yang skalabel dan efisien. Menonjolkan kemampuan software engineering, arsitektur sistem, dan deployment terotomatisasi.",
      tech: ["Go", "Docker", "CI/CD", "PostgreSQL"],
      image: dealanImg,
      githubLink: "https://github.com/najmialifah/Dealan",
      featured: false
    },
    {
      id: 3,
      title: "Web Order UMKM Food",
      description: "Aplikasi pemesanan makanan berbasis web untuk membantu UMKM. Dilengkapi dengan antarmuka yang intuitif untuk memudahkan pelanggan dan pemilik usaha dalam mengelola pesanan.",
      tech: ["React", "CSS Modules", "REST API"],
      image: seblakImg,
      githubLink: "https://github.com/najmialifah/seblak-web",
      featured: false
    }
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Selected Works</h2>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link" aria-label="View Live">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubLink || "#"} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View Source">
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
