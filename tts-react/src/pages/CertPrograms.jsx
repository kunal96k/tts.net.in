import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function CertPrograms() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "CertPrograms | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      
    <section className="page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Global Accreditations</div>
            <h1 className="reveal-scale">Professional <span className="shimmer-text">Certifications</span></h1>
            <p className="reveal-smooth">Boost your professional profile with industry-recognized certifications from top global technology
                partners.</p>
        </div>
    </section>
    <section className="services-section">
        <div className="container">
            <div className="services-grid">
                <div className="service-card reveal-smooth">
                    <div className="service-icon red"><ion-icon name="cloud-outline"></ion-icon></div>
                    <h3>Cisco Certifications (CCNA/CCNP)</h3>
                    <p className="reveal-smooth">Master networking architecture and security with official Cisco curriculum and labs.</p>
                </div>
                <div className="service-card reveal-smooth">
                    <div className="service-icon blue"><ion-icon name="business-outline"></ion-icon></div>
                    <h3>ERP Solutions (SAP FICO/MM)</h3>
                    <p className="reveal-smooth">Get certified in enterprise resource planning with specialized training in SAP finance and
                        materials management.</p>
                </div>
                <div className="service-card reveal-smooth">
                    <div className="service-icon teal"><ion-icon name="analytics-outline"></ion-icon></div>
                    <h3>Data Analyst Certification</h3>
                    <p>Master data processing and visualization with SQL, Excel advanced, and professional
                        certifications.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    
    </main>
  );
}
