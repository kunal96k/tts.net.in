import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function CrashCourses() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "CrashCourses | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      
    <section className="page-hero"><div className="container"><div className="section-label reveal-smooth">Fast-Track Your Career</div><h1 className="reveal-scale">IT <span className="shimmer-text">Crash Courses</span></h1><p className="reveal-smooth">Master high-demand tech skills in record time with our intensive, industry-aligned crash courses.</p></div></section>
    <section className="services-section reveal-smooth"><div className="container"><div className="services-grid"><div className="service-card reveal-smooth"><div className="service-icon gold"><ion-icon name="rocket-outline"></ion-icon></div><h3>Java Foundations</h3><p className="reveal-smooth">Master the core concepts of Java in just 4 weeks. Perfect for freshers and students preparing for placements.</p><Link  to="/contact" className="btn-secondary mt-4">Enquire Now</Link></div><div className="service-card reveal-smooth"><div className="service-icon blue"><ion-icon name="logo-python"></ion-icon></div><h3>Python for Beginners</h3><p className="reveal-smooth">Fast-track your Python journey. Covers syntax, data structures, and basic automation in an intensive format.</p><Link  to="/contact" className="btn-secondary mt-4">Enquire Now</Link></div><div className="service-card reveal-smooth"><div className="service-icon teal"><ion-icon name="code-slash-outline"></ion-icon></div><h3>Rapid Web Development</h3><p className="reveal-smooth">Learn HTML, CSS, and JS basics to build your first responsive website in just 15 days.</p><Link  to="/contact" className="btn-secondary mt-4">Enquire Now</Link></div></div></div></section>
    {/* Footer */}
    
    </main>
  );
}
