import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function Workshops() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "Workshops | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      
    <section className="page-hero"><div className="container"><div className="section-label reveal-smooth">Short Learning Events</div><h1 className="reveal-scale">Technical <span className="shimmer-text">Workshops</span></h1><p className="reveal-smooth">Upgrade your skills in just a few days with our expert-led technology workshops.</p></div></section>
    <section className="services-section reveal-smooth"><div className="container"><div className="services-grid"><div className="service-card reveal-smooth" id="powerbi"><div className="service-icon red"><ion-icon name="stats-chart-outline"></ion-icon></div><h3>Power BI Workshop</h3><p className="reveal-smooth">A success-driven workshop focused on data visualization and business intelligence using Microsoft Power BI.</p><Link  to="/contact" className="btn-secondary mt-4">Enquire Now</Link></div><div className="service-card reveal-smooth" id="genai"><div className="service-icon blue"><ion-icon name="sparkles-outline"></ion-icon></div><h3>Generative AI Boot Camp</h3><p className="reveal-smooth">3-Days intensive hands-on learning event. Discover the secrets of LLMs and Prompt Engineering.</p><Link  to="/contact" className="btn-secondary mt-4">Enquire Now</Link></div><div className="service-card reveal-smooth"><div className="service-icon green"><ion-icon name="hardware-chip-outline"></ion-icon></div><h3>AI Implementation</h3><p className="reveal-smooth">Focus on the implementation of Artificial Intelligence in real-world scenarios.</p><Link  to="/contact" className="btn-secondary mt-4">Enquire Now</Link></div></div></div></section>
    {/* Footer */}
    
    </main>
  );
}
