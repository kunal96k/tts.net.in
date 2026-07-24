import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function ResumeBuilding() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "ResumeBuilding | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      
    <section className="page-hero"><div className="container"><div className="section-label reveal-smooth">Career Branding</div><h1 className="reveal-scale">Professional <span className="shimmer-text">Resume Building</span></h1><p className="reveal-smooth">Your resume is your ticket to your first interview. We help you build high-impact, ATS-friendly resumes that highlight your skills and projects effectively.</p></div></section>
    <section className="services-section"><div className="container"><div className="services-grid"><div className="service-card reveal-smooth"><h3>ATS-Friendly Formats</h3><p className="reveal-smooth">Design resumes that pass through Applicant Tracking Systems (ATS) to reach recruitment managers.</p></div><div className="service-card reveal-smooth"><h3>Project Case Studies</h3><p className="reveal-smooth">Showcase your training and real-world projects as impactful case studies in your CV.</p></div><div className="service-card reveal-smooth"><h3>Personal Branding</h3><p>Optimize your LinkedIn profile and professional presence alongside your resume.</p></div></div></div></section>
    {/* Footer */}
    
    </main>
  );
}
