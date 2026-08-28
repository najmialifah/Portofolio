import React from 'react';
import { Briefcase, GraduationCap, Calendar, BriefcaseConveyorBelt } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: "education",
      title: "Computer Science",
      organization: "Universitas Pendidikan Indonesia",
      period: "2024 - Present",
      description: "Learning the fundamentals of computer science, data structures, algorithms, and system architecture. Actively involved in various campus software development projects.",
      icon: <GraduationCap size={20} />
    },
    {
      id: 2,
      type: "work",
      title: "Bendahara Divisi Pengembangan Organisasi",
      organization: "BEM Keluarga Mahasiswa Komputer (Kemakom) UPI",
      period: "March 2025 - December 2025",
      description: "Responsible for the management and financial reporting of the organization, ensuring transparency and accountability in every transaction. Handled the financial operations for the following programs:",
      programs: [
        "Upgrading",
        "Monitoring and Evaluation (Monev)",
        "Interface",
        "Registrasi Anggota Muda (RAM)",
        "Mokaku Program Studi (Mokaprodi)",
        "Mentoring",
        "Koordinasi Lapangan (Koorlap)",
        "Bimbingan Mahasiswa Ilmu Komputer (BMAIL)",
        "Kemakom Leadership Training (KLT)",
        "Pelantikan Anggota Biasa (Plasa)"
      ],
      icon: <Briefcase size={20} />
    },
    {
      id: 3,
      type: "work",
      title: "Internship in Informatics Technology Division",
      organization: "PT. Telkom Indonesia",
      period: "August 2026 - Present",
      description: "Fulfilling internship obligations from university",
      icon: <Briefcase size={20} />
    }
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={exp.id}>
              <div className="timeline-dot">
                {exp.icon}
              </div>
              <div className="timeline-content">
                <div className="timeline-date">
                  <Calendar size={14} /> {exp.period}
                </div>
                <h3>{exp.title}</h3>
                <h4>{exp.organization}</h4>
                <p>{exp.description}</p>
                {exp.programs && (
                  <ul className="timeline-programs">
                    {exp.programs.map((program, i) => (
                      <li key={i}>{program}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
