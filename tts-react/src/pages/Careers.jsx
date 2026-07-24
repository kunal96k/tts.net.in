import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function Careers() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "Careers | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="reveal-smooth page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Join Our Mission</div>
            <h1 className="reveal-scale">Shape the Future of <span className="gradient-text">Tech Education</span></h1>
            <p>If you're passionate about teaching, mentoring, and helping students build amazing careers -- you're in
                the right place.</p>
        </div>
    </section>

    {/* Careers Image Banner */}
    <section className="reveal-smooth showcase-section" style={{paddingTop: '0'}}>
        <div className="container">
            <div className="showcase-grid">
                <div className="showcase-card reveal reveal-delay-1">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                        alt="Technokraft faculty meeting" loading="lazy" />
                    <div className="showcase-overlay">
                        <h4>Collaborative Faculty</h4>
                        <p>Work with top IT experts</p>
                    </div>
                </div>
                <div className="showcase-card reveal reveal-delay-2">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                        alt="Mentoring sessions" loading="lazy" />
                    <div className="showcase-overlay">
                        <h4>Mentorship Roles</h4>
                        <p>Guide the next gen developers</p>
                    </div>
                </div>
                <div className="showcase-card reveal reveal-delay-3">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
                        alt="Modern office atmosphere" loading="lazy" />
                    <div className="showcase-overlay">
                        <h4>Admin & Counseling</h4>
                        <p>Support our growing community</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="reveal-smooth careers-section">
        <div className="container">
            <div className="section-header reveal">
                <div className="section-label reveal-smooth">Why Work With Us</div>
                <h2 className="section-title">We're More Than a Workplace -- <span className="gradient-text">We're a Growth
                        Engine</span></h2>
            </div>
            <div className="careers-grid">
                <div className="career-card reveal reveal-delay-1">
                    <div className="card-icon"><ion-icon name="rocket-outline"></ion-icon></div>
                    <h3>Industry Impact</h3>
                    <p>Directly influence the career paths of thousands of students. Your expertise helps them secure
                        their dream jobs in top MNCs.</p>
                </div>
                <div className="career-card reveal reveal-delay-2">
                    <div className="card-icon"><ion-icon name="happy-outline"></ion-icon></div>
                    <h3>Work Culture</h3>
                    <p>Fostering an environment of transparency, collaboration, and continuous learning. We value your
                        unique insights and methods.</p>
                </div>
                <div className="career-card reveal reveal-delay-3">
                    <div className="card-icon"><ion-icon name="stats-chart-outline"></ion-icon></div>
                    <h3>Competitive Growth</h3>
                    <p>We provide competitive packages and growth opportunities for those who are committed to
                        educational excellence.</p>
                </div>
            </div>

            {/* Ready To Build */}
            <div className="about-grid" style={{marginTop: '72px'}}>
                <div className="about-content reveal">
                    <div className="section-label reveal-smooth">Join the Technokraft Family</div>
                    <h2>Be Part of Nashik's <span className="gradient-text">#1 IT Institute</span></h2>
                    <p>We are always looking for talented IT Trainers (Java, Python, DS, DevOps), Career Counselors, and
                        Placement Coordinators who share our passion for student success.</p>
                    <div className="about-features" style={{gridTemplateColumns: '1fr'}}>
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="code-working-outline"></ion-icon></div>
                            <div>
                                <h4>Technical Training</h4>
                                <p>Lead batch-wise training programs with hands-on industrial project guidance.</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="chatbubbles-outline"></ion-icon></div>
                            <div>
                                <h4>Student Counseling</h4>
                                <p>Help aspirants choose the right course based on their educational background.</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="briefcase-outline"></ion-icon></div>
                            <div>
                                <h4>Placement Coordination</h4>
                                <p>Bridge the gap between our certified students and hiring companies.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-visual reveal reveal-delay-2">
                    <div className="visual-content">
                        <div className="big-quote">"</div>
                        <blockquote>At TechnoKraft, we don't just hire employees; we partner with educators who are
                            driven by a passion for transforming lives through technology.</blockquote>
                        <p className="quote-author">-- Director, TechnoKraft</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="reveal-smooth cta-section">
        <div className="container">
            <div className="cta-banner reveal">
                <h2>Interested in Joining Our Team? <span className="gradient-text">Send Your Resume Today</span></h2>
                <p>We're expanding! If you have the skills and the passion, we'd love to hear from you. Email your CV to
                    careers@technokraft.net.in</p>
                <a href="mailto:careers@technokraft.net.in" className="btn-primary">Email Your CV</a>
            </div>
        </div>
    </section>

    {/* Footer */}
    
    </main>
  );
}
