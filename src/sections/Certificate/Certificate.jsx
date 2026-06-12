import { useState } from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

// --- Certificate PNG Imports ---
import AdobeHackathonImg from "../../assets/certificate/ADOBE_INDIA_HACKATHON.png";
import AwsAcademyImg from "../../assets/certificate/AWS_ACADEMY_CERTIFICATE.png";
import CodeclashImg from "../../assets/certificate/CODECLASH.png";
import CodespireImg from "../../assets/certificate/CODESPIRE_PARTICIPATION.png";
import CodeRelayImg from "../../assets/certificate/CODE_RELAY.png";
import DbsImg from "../../assets/certificate/DATABASE_MANAGEMENT_SYSTEM.png";
import DaaImg from "../../assets/certificate/DESIGN_AND_ANALYSIS_OF_ALGORITHM.png";
import DsaPwImg from "../../assets/certificate/DSA_CPP_PHYSICS_WALLAH.png";
import DsaApnaImg from "../../assets/certificate/DSA_JAVA_APNA_COLLEGE.png";
import UnstopImg from "../../assets/certificate/UNSTOP_PARTICIPATION_CERTIFICATE.png";
import WebDevApnaImg from "../../assets/certificate/WEB_DEVELOPMENT_APNA_COLLEGE.png";

import "./Certificate.css"; 

const certificatesData = [
  {
    id: 1,
    title: "Data Structures & Algorithms (C++)",
    issuer: "Physics Wallah",
    date: "29 Dec 2024",
    category: "dsa",
    description: "Intensive training on complexity analysis, trees, graphs, and dynamic programming.",
    image: DsaPwImg,
    link: DsaPwImg,
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    issuer: "Apna College",
    date: "Dec 2025",
    category: "webdev",
    description: "Training in responsive layout structures, JavaScript ES6+, backend logic, and databases.",
    image: WebDevApnaImg,
    link: WebDevApnaImg,
  },
  {
    id: 3,
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "jun 2026",
    category: "webdev",
    description: "AWS course covering core cloud concepts, services, security, architecture, and pricing.",
    image: AwsAcademyImg,
    link: AwsAcademyImg,
  },
  {
    id: 4,
    title: "Adobe India Hackathon",
    issuer: "Adobe",
    date: "July 2025",
    category: "hackathons",
    description: "Prototyping and developing software solutions in the national Adobe Hackathon.",
    image: AdobeHackathonImg,
    link: AdobeHackathonImg,
  },
  {
    id: 5,
    title: "Design & Analysis of Algorithms",
    issuer: "NPTEL",
    date: "Jan-March 2026",
    category: "dsa",
    description: "Academic course focused on divide-and-conquer, greedy models, and complexity analysis.",
    image: DaaImg,
    link: DaaImg,
  },
  {
    id: 6,
    title: "Database Management System",
    issuer: "NPTEL",
    date: "July-Sept 2025",
    category: "dsa",
    description: "Academic coursework covering database design, schemas, normalization, and SQL.",
    image: DbsImg,
    link: DbsImg,
  },
  {
    id: 7,
    title: "DSA with Java",
    issuer: "Apna College",
    date: "July 2025",
    category: "dsa",
    description: "Algorithmic problem-solving, data structure implementation, and logic building in Java.",
    image: DsaApnaImg,
    link: DsaApnaImg,
  },
  {
    id: 8,
    title: "Codeclash Competitive Coding",
    issuer: "Coding Club",
    date: "July 2025",
    category: "hackathons",
    description: "Recognized performance and speed coding in the Codeclash programming contest.",
    image: CodeclashImg,
    link: CodeclashImg,
  },
  {
    id: 9,
    title: "Codespire Participation",
    issuer: "Codespire Hackathon",
    date: "dec 2024",
    category: "hackathons",
    description: "Collaborated in a team environment to build rapid tech prototypes under timelines.",
    image: CodespireImg,
    link: CodespireImg,
  },
  {
    id: 10,
    title: "Code Relay Contest",
    issuer: "AITR Indore",
    date: "may 2025",
    category: "hackathons",
    description: "Solved consecutive logic challenges within collaborative sprints in a relay format.",
    image: CodeRelayImg,
    link: CodeRelayImg,
  },
  {
    id: 11,
    title: "Unstop National Coding Challenge",
    issuer: "Unstop",
    date: "2025",
    category: "hackathons",
    description: "Participation in national programming contests and online coding assessments.",
    image: UnstopImg,
    link: UnstopImg,
  }
];

export default function Certificate() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { name: "All", value: "all" },
    { name: "DSA & Core CS", value: "dsa" },
    { name: "Web Development", value: "webdev" },
    { name: "Hackathons & Events", value: "hackathons" },
  ];

  const filteredCertificates = activeFilter === "all"
    ? certificatesData
    : certificatesData.filter(cert => cert.category === activeFilter);

  return (
    <section id="certificate" className="certificate">
      <div className="certificate-container">
        
        <h2 className="certificate-heading section-heading">
          <FaCertificate className="section-icon"/>&nbsp;
          My <span>Certificates . .</span>
        </h2>

        <p className="certificate-description">
          A curated collection of my academic certifications and industry-recognized online courses, showcasing my commitment to continuous learning and technical growth.
        </p>

        {/* Filter Tabs */}
        <div className="certificate-filters">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`certificate-filter-btn ${activeFilter === category.value ? "active" : ""}`}
              onClick={() => setActiveFilter(category.value)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="certificate-grid">
          {filteredCertificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              
              {/* Media Section */}
              <div className="certificate-media">
                <img 
                  className="certificate-image" 
                  src={cert.image} 
                  alt={cert.title} 
                  loading="lazy"
                />
              </div>

              {/* Content Section */}
              <div className="certificate-card-content">
                <div className="certificate-meta">
                  <span className="certificate-issuer">{cert.issuer}</span>
                  <span className="certificate-date">{cert.date}</span>
                </div>

                <h3 className="certificate-card-title">{cert.title}</h3>
                <p className="certificate-card-text">{cert.description}</p>

                <div className="certificate-card-links">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="certificate-link"
                  >
                    View Certificate <FaExternalLinkAlt className="certificate-link-arrow" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

