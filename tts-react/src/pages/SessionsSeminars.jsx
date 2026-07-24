import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function SessionsSeminars() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "SessionsSeminars | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      
    <section className="page-hero"><div className="container"><div className="section-label reveal-smooth">Knowledge Sharing</div><h1 className="reveal-scale">Seminars & <span className="shimmer-text">Sessions</span></h1><p className="reveal-smooth">We regularly conduct technical seminars at polytechnic colleges across Nashik to bridge academic learning with industry standards.</p></div></section>
    <section className="services-section"><div className="container"><div className="services-grid"><div className="service-card reveal-smooth"><h3>College Seminars</h3><p className="reveal-smooth">Insightful talks about the latest trends in Java, Full Stack, and AI. Successfully conducted in major polytechnic colleges.</p><Link  to="/contact" className="btn-secondary mt-4">Enquire for Next Event</Link></div><div className="service-card reveal-smooth"><h3>Expert Sessions</h3><p className="reveal-smooth">Industry-led interactive sessions covering technology roadmaps and professional growth paths.</p><Link  to="/contact" className="btn-secondary mt-4">Contact Us</Link></div></div></div></section>
    {/* Footer */}
    
    </main>
  );
}
