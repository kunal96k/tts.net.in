import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function Certifications() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "Certifications | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Official AWS Exam Center</div>
            <h1 className="reveal-scale">Authorized <span className="shimmer-text">Certifications</span></h1>
            <p className="reveal-smooth">TechnoKraft is the only authorized AWS Exam Center in Nashik, helping students
                earn globally recognized credentials in Cloud, Java, and Data Science.</p>
        </div>
    </section>

    <section className="services-section" style={{paddingTop: '60px'}}>
        <div className="container">
            <div className="cert-highlight reveal-smooth">
                <div className="cert-highlight-card"><ion-icon name="ribbon-outline"></ion-icon>
                    <div>
                        <h4>5000+</h4>
                        <p>Certifications Awarded</p>
                    </div>
                </div>
                <div className="cert-highlight-card"><ion-icon name="school-outline"></ion-icon>
                    <div>
                        <h4>12+</h4>
                        <p>Recognized Certification Programs</p>
                    </div>
                </div>
            </div>
            <div className="section-header reveal-flip" style={{marginBottom: '40px'}}>
                <div className="section-label reveal-smooth">What We Offer</div>
                <h2 className="section-title">Industry-Recognized <span className="gradient-text">Certifications</span></h2>
            </div>
            <div className="cert-grid">
                <div className="cert-card reveal-smooth">
                    <div className="cert-badge-icon"><ion-icon name="code-slash-outline" style={{color: '#E53935'}}></ion-icon>
                    </div>
                    <h3>Java Full Stack Developer</h3>
                    <p>Validates expertise in Spring Boot, React, REST APIs, and enterprise-grade Java development.</p>
                    <div className="cert-count"><ion-icon name="people-outline"></ion-icon> 1200+ Certified</div>
                </div>
                <div className="cert-card reveal-smooth">
                    <div className="cert-badge-icon blue"><ion-icon name="hardware-chip-outline"
                            style={{color: '#2196F3'}}></ion-icon></div>
                    <h3>Data Science & AI</h3>
                    <p>Certifies proficiency in Python, ML, Deep Learning, and Power BI for data-driven careers.</p>
                    <div className="cert-count"><ion-icon name="people-outline"></ion-icon> 900+ Certified</div>
                </div>
                <div className="cert-card reveal-smooth">
                    <div className="cert-badge-icon green"><ion-icon name="cloud-outline" style={{color: '#4CAF50'}}></ion-icon>
                    </div>
                    <h3>DevOps & Cloud</h3>
                    <p>Demonstrates mastery of AWS, Docker, Kubernetes, Jenkins, and CI/CD pipelines.</p>
                    <div className="cert-count"><ion-icon name="people-outline"></ion-icon> 650+ Certified</div>
                </div>
                <div className="cert-card reveal-smooth">
                    <div className="cert-badge-icon blue"><ion-icon name="cloud-done-outline" style={{color: '#2196F3'}}></ion-icon>
                    </div>
                    <h3>AWS Global Certification</h3>
                    <p>Official training and examination for AWS Cloud Practitioner, Solutions Architect, and Developer roles.</p>
                    <div className="cert-count"><ion-icon name="ribbon-outline"></ion-icon> Authorized Exam Center</div>
                </div>
                <div className="cert-card reveal-smooth">
                    <div className="cert-badge-icon gold"><ion-icon name="globe-outline" style={{color: '#FFC107'}}></ion-icon>
                    </div>
                    <h3>Modern Web Development</h3>
                    <p>Certifies ability to build responsive, full-featured web applications using modern stacks.</p>
                    <div className="cert-count"><ion-icon name="people-outline"></ion-icon> 800+ Certified</div>
                </div>
                <div className="cert-card reveal-smooth">
                    <div className="cert-badge-icon purple"><ion-icon name="logo-python" style={{color: '#9C27B0'}}></ion-icon>
                    </div>
                    <h3>Python Full Stack</h3>
                    <p>End-to-end Python development certification including Django, Flask, and API integration.</p>
                    <div className="cert-count"><ion-icon name="people-outline"></ion-icon> 700+ Certified</div>
                </div>
                <div className="cert-card reveal-smooth">
                    <div className="cert-badge-icon"><ion-icon name="megaphone-outline" style={{color: '#E53935'}}></ion-icon>
                    </div>
                    <h3>Digital Marketing</h3>
                    <p>Comprehensive SEO, SEM, and social media marketing certification for modern businesses.</p>
                    <div className="cert-count"><ion-icon name="people-outline"></ion-icon> 400+ Certified</div>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <div className="cta-banner reveal">
                <h2>Earn Your Industry <span className="gradient-text">Certification Today</span></h2>
                <p>Stand out with a TechnoKraft certification trusted by 250+ hiring companies across India.</p><Link 
                    to="/contact" className="btn-primary">Get Certified</Link>
            </div>
        </div>
    </section>

    
    </main>
  );
}
