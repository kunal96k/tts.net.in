import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function Courses() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "Courses | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    {/* Hero Section */}
    <section className="page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Skill Up Excellence</div>
            <h1 className="reveal-scale">Professional <span className="shimmer-text">IT Courses</span></h1>
            <p className="reveal-smooth">Become an industry-ready professional with our job-oriented curriculum and hands-on projects.</p>
        </div>
    </section>

    {/* AI Suggestion Box — MOVED TO TOP */}
    <section className="ai-suggestion-section" id="ai-suggestion" style={{paddingTop: '60px', paddingBottom: '0'}}>
        <div className="container">
            <div className="suggestion-card-wrapper reveal-scale">
                <div className="section-header">
                    <div className="section-label reveal-smooth">AI-Powered Recommendations</div>
                    <h2 className="section-title">Not Sure What to Learn?</h2>
                    <p className="section-subtitle">Tell us your goal and we'll suggest the best course for you.</p>
                </div>
                <div className="suggestion-form">
                    <div className="input-container">
                        <textarea id="user-goal" className="suggestion-textarea" placeholder="Example: I want to learn web development from scratch or I want a job in data science"></textarea>
                    </div>
                    <button id="get-suggestions-btn" className="btn-primary"><span>Get AI Suggestions</span><ion-icon name="sparkles-outline"></ion-icon></button>
                </div>
                <div id="suggestions-results" className="suggestions-results"></div>
            </div>
        </div>
    </section>

    {/* All Courses Grid */}
    <section className="services-section reveal-smooth">
        <div className="container">
            <div className="section-header reveal-scale">
                <div className="section-label reveal-smooth">Our Specialized Programs</div>
                <h2 className="section-title">Explore <span className="text-primary">All Courses</span></h2>
            </div>
            <div className="services-grid">
                <div className="service-card reveal-smooth" data-course="java">
                    <div className="service-icon red"><ion-icon name="code-slash-outline"></ion-icon></div>
                    <h3>Java Full Stack</h3>
                    <p>Master end-to-end development with Java, Spring Boot, and React. 100% placement support.</p>
                    <div className="card-footer-row">
                        <span className="card-duration-tag"><ion-icon name="time-outline"></ion-icon> 6 Months</span>
                        <button className="btn-view-details-card" onClick={() => {openCourseModal('java')}}>View Details</button>
                    </div>
                </div>
                <div className="service-card reveal-smooth" data-course="python">
                    <div className="service-icon blue"><ion-icon name="logo-python"></ion-icon></div>
                    <h3>Python Full Stack</h3>
                    <p>Build robust applications using Python, Django, and modern front-end frameworks with AI integration.</p>
                    <div className="card-footer-row">
                        <span className="card-duration-tag"><ion-icon name="time-outline"></ion-icon> 6 Months</span>
                        <button className="btn-view-details-card" onClick={() => {openCourseModal('python')}}>View Details</button>
                    </div>
                </div>
                <div className="service-card reveal-smooth" data-course="web">
                    <div className="service-icon green"><ion-icon name="globe-outline"></ion-icon></div>
                    <h3>Web Development</h3>
                    <p>Build stunning responsive websites using modern frameworks. From HTML/CSS to React & Node.js.</p>
                    <div className="card-footer-row">
                        <span className="card-duration-tag"><ion-icon name="time-outline"></ion-icon> 4 Months</span>
                        <button className="btn-view-details-card" onClick={() => {openCourseModal('web')}}>View Details</button>
                    </div>
                </div>
                <div className="service-card reveal-smooth" data-course="datascience">
                    <div className="service-icon gold"><ion-icon name="hardware-chip-outline"></ion-icon></div>
                    <h3>Data Science & AI</h3>
                    <p>Unlock insights with Python, Machine Learning, and Power BI. Learn from industry experts.</p>
                    <div className="card-footer-row">
                        <span className="card-duration-tag"><ion-icon name="time-outline"></ion-icon> 6 Months</span>
                        <button className="btn-view-details-card" onClick={() => {openCourseModal('datascience')}}>View Details</button>
                    </div>
                </div>
                <div className="service-card reveal-smooth" data-course="devops">
                    <div className="service-icon teal"><ion-icon name="cloud-outline"></ion-icon></div>
                    <h3>DevOps & Cloud</h3>
                    <p>Master CI/CD pipelines, Docker, Kubernetes, and AWS. Industry's most in-demand skill set.</p>
                    <div className="card-footer-row">
                        <span className="card-duration-tag"><ion-icon name="time-outline"></ion-icon> 4 Months</span>
                        <button className="btn-view-details-card" onClick={() => {openCourseModal('devops')}}>View Details</button>
                    </div>
                </div>
                <div className="service-card reveal-smooth" data-course="digitalmarketing">
                    <div className="service-icon purple"><ion-icon name="megaphone-outline"></ion-icon></div>
                    <h3>Digital Marketing</h3>
                    <p>SEO, Social Media, Google Ads and Content Strategy — the complete digital growth toolkit.</p>
                    <div className="card-footer-row">
                        <span className="card-duration-tag"><ion-icon name="time-outline"></ion-icon> 3 Months</span>
                        <button className="btn-view-details-card" onClick={() => {openCourseModal('digitalmarketing')}}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Course Detail Modal */}
    <div className="course-modal-overlay" id="courseModalOverlay" onClick={() => {closeCourseModal(event)}}>
        <div className="course-modal" id="courseModal">
            <div className="modal-header-bar">
                <div className="modal-icon-box" id="modalIconBox"><ion-icon id="modalIcon" name="code-slash-outline"></ion-icon></div>
                <div className="modal-title-group">
                    <div className="modal-course-tag" id="modalTag">Certification Program</div>
                    <h3 className="modal-course-name" id="modalTitle">Java Full Stack</h3>
                </div>
                <button className="modal-close-btn" onClick={() => {closeModal()}}><ion-icon name="close-outline"></ion-icon></button>
            </div>
            <div className="modal-body">
                <div className="modal-highlight-row">
                    <div className="modal-highlight">
                        <ion-icon name="time-outline" style={{color: 'var(--primary)'}}></ion-icon>
                        <div className="h-label">Duration</div>
                        <div className="h-value" id="modalDuration">6 Months</div>
                    </div>
                    <div className="modal-highlight">
                        <ion-icon name="cash-outline" style={{color: '#4CAF50'}}></ion-icon>
                        <div className="h-label">Course Fees</div>
                        <div className="h-value" id="modalFees">₹40,000</div>
                    </div>
                    <div className="modal-highlight">
                        <ion-icon name="star" style={{color: '#FFC107'}}></ion-icon>
                        <div className="h-label">Rating</div>
                        <div className="h-value" id="modalRating">4.8 ★</div>
                    </div>
                </div>
                <div className="modal-what-learn">
                    <h4>What You'll Learn</h4>
                    <div className="modal-skills" id="modalSkills"></div>
                </div>
                <div className="modal-actions">
                    <Link  to="/contact" className="btn-primary">Enroll Now</Link>
                    <Link  to="/contact" className="btn-secondary">Free Counseling</Link>
                </div>
            </div>
        </div>
    </div>

    {/* Footer */}
    
    </main>
  );
}
