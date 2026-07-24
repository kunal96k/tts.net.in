import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function CareerGuidance() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "CareerGuidance | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      
    <section className="page-hero"><div className="container"><div className="section-label reveal-smooth">Strategic Planning</div><h1 className="reveal-scale">IT Career <span className="shimmer-text">Counseling</span></h1><p className="reveal-smooth">Not sure where to start? Our expert counselors provide personalized guidance to help you navigate the tech landscape and pick the best and most profitable career path.</p></div></section>
    <section className="services-section"><div className="container"><div className="services-grid"><div className="service-card reveal-smooth"><h3>Technology Path Selection</h3><p className="reveal-smooth">Choose the right tech stack (Java, Python, PHP, or AI) based on your interest and industry demand.</p></div><div className="service-card reveal-smooth"><h3>Gap Analysis</h3><p className="reveal-smooth">Evaluate your current skills and identify the technical gaps needed to land your dream job.</p></div><div className="service-card reveal-smooth"><h3>Mentorship Program</h3><p>Connect with working professionals in Top IT MNCs for real-world advice and networking.</p></div></div></div></section>
    {/* Footer */}
    
    </main>
  );
}
