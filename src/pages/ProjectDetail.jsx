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
    shortDesc: "Aplikasi Web & Mobile Adopsi Kucing yang mempertemukan kucing terlantar dengan pemilik baru yang penuh kasih sayang.",
    role: "Fullstack Developer",
    duration: "Jan 2023 - May 2023",
    tech: ["Expo", "Vue.js", "Firebase", "Node.js"],
    image: cattakeImg,
    background: "Banyaknya kucing liar dan terlantar yang kesulitan mendapatkan tempat berlindung memicu ide pembuatan CatTake. Aplikasi ini dibangun untuk mempermudah proses adopsi, menyatukan pecinta hewan dengan shelter lokal secara efisien.",
    gallery: [cattakeImg, cattakeImg, cattakeImg],
    conclusion: "CatTake berhasil meningkatkan tingkat adopsi lokal hingga 40% dan memberikan kesadaran lebih kepada masyarakat mengenai pentingnya kesejahteraan hewan peliharaan.",
  },
  {
    id: 2,
    title: "Dealan",
    shortDesc: "Sistem backend multi-service yang skalabel dan efisien untuk manajemen e-commerce.",
    role: "Backend Engineer",
    duration: "Aug 2023 - Dec 2023",
    tech: ["Go", "Microservices", "Docker", "Jenkins", "Kubernetes"],
    image: dealanImg,
    background: "Sistem monolitik sebelumnya tidak mampu menangani lonjakan trafik saat event diskon besar. Proyek Dealan bertujuan mendesain ulang arsitektur menjadi microservices untuk memastikan skalabilitas, keandalan, dan deployment terotomatisasi.",
    gallery: [dealanImg, dealanImg, dealanImg],
    conclusion: "Dengan arsitektur baru, Dealan mencapai uptime 99.99% selama flash sale dan mengurangi waktu deployment dari jam menjadi hanya hitungan menit berkat CI/CD pipeline.",
  },
  {
    id: 3,
    title: "Web Order UMKM Food",
    shortDesc: "Aplikasi pemesanan makanan berbasis web untuk membantu digitalisasi UMKM lokal.",
    role: "Frontend Developer",
    duration: "Jun 2024 - Present",
    tech: ["React", "Figma", "REST API", "Tailwind CSS"],
    image: seblakImg,
    background: "Sebagian besar UMKM kuliner di daerah kesulitan menjangkau pelanggan secara online karena keterbatasan platform. Web Order ini diciptakan sebagai solusi pemesanan yang sederhana, cepat, dan mudah dioperasikan baik oleh pembeli maupun pengelola kedai.",
    gallery: [seblakImg, seblakImg, seblakImg],
    conclusion: "Aplikasi ini memfasilitasi lebih dari 500 transaksi per bulan dan membantu UMKM meningkatkan pendapatan mereka secara signifikan di era digital.",
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

      <div className="detail-footer">
        <button onClick={() => navigate('/')} className="btn btn-primary detail-back-btn bounce-hover">
          <ArrowLeft size={18} /> Back to Portfolio
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
