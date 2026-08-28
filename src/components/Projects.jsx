import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "CatTake",
      description: "Aplikasi Web & Mobile Tracking Adopsi Kucing. Menyoroti pengembangan antarmuka interaktif dan integrasi fungsionalitas di berbagai platform.",
      tech: ["React Native", "Vue.js", "Firebase"],
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Microservices Cloud Architecture",
      description: "Sistem backend multi-service yang skalabel dan efisien. Menonjolkan kemampuan software engineering, arsitektur sistem, dan deployment terotomatisasi.",
      tech: ["Go", "Docker", "CI/CD", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Anime Collection Repository",
      description: "Aplikasi direktori dengan fokus pada eksplorasi antarmuka visual yang rapi, modern, dan pengalaman pengguna yang mulus.",
      tech: ["React", "CSS Modules", "REST API"],
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
                    <a href="#" className="project-link" aria-label="View Source">
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
