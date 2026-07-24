import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function About() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "About | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    {/* Page Hero */}
    <section className="reveal-smooth page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Our Legacy</div>
            <h1 className="reveal-scale">About <span className="shimmer-text">TechnoKraft</span></h1>
            <p>Empowering the next generation of tech leaders in Nashik with industry-aligned skills and world-class
                mentorship.</p>
        </div>
    </section>

    {/* About Detail */}
    <section className="reveal-smooth about-section" style={{paddingTop: '0'}}>
        <div className="container mt-4">
            <div className="about-grid">
                <div className="about-content reveal-left">
                    <h2>More Than Just an Institute -- We Are Your <span className="gradient-text">Career Catalyst</span>
                    </h2>
                    <p>TechnoKraft was founded on the core values of excellence, pursuing growth and quality learning.
                        Based in the city of Nashik for the last 5 years, we have successfully trained and provided
                        placement assistance to over 3000 students.</p>
                    <p>We pride ourselves on striking a perfect balance between theoretical and practical learning,
                        ensuring every student works on real-world projects with expert faculty from the IT industry in
                        a state-of-the-art learning environment.</p>
                </div>
                <div className="about-img-card reveal-right reveal-delay-2">
                    <img src="images/institute_nashik_building_1774349251126.jpg" alt="TechnoKraft Training Center Nashik"
                        loading="lazy" decoding="async" />
                </div>
            </div>
        </div>
    </section>

    {/* Glow Line Divider */}
    <hr className="glow-line" />

    {/* What We Offer */}
    <section className="reveal-smooth services-section" style={{position: 'relative', overflow: 'hidden'}}>
        <div className="morph-blob" style={{background: 'var(--gradient-gold)', top: '-100px', left: '-150px'}}></div>
        <div className="container">
            <div className="section-header reveal-flip">
                <div className="section-label reveal-smooth">Our Expertise</div>
                <h2 className="section-title">Bridging the Gap With <span className="shimmer-text">Skill Excellence</span>
                </h2>
                <p className="section-subtitle">We provide a comprehensive ecosystem designed for student success and career
                    growth.</p>
            </div>
            <div className="services-grid">
                <div className="service-card reveal reveal-delay-1">
                    <div className="service-icon gold"><ion-icon name="code-working-outline"></ion-icon></div>
                    <h3>Project-Based Learning</h3>
                    <p>We believe in learning by doing. Our curriculum is built around real-world industrial projects
                        and scenarios.</p>
                </div>
                <div className="service-card reveal reveal-delay-2">
                    <div className="service-icon blue"><ion-icon name="people-outline"></ion-icon></div>
                    <h3>Expert Mentorship</h3>
                    <p>Learn directly from professionals who have worked in top tech giants. Get insights into current
                        industry trends.</p>
                </div>
                <div className="service-card reveal reveal-delay-3">
                    <div className="service-icon teal"><ion-icon name="briefcase-outline"></ion-icon></div>
                    <h3>100% Placement Support</h3>
                    <p>Our dedicated placement cell works tirelessly to connect you with top recruitment partners across
                        India.</p>
                </div>
                <div className="service-card reveal reveal-delay-1">
                    <div className="service-icon green"><ion-icon name="ribbon-outline"></ion-icon></div>
                    <h3>Global Certifications</h3>
                    <p>Earn industry-recognized certificates that add massive value to your resume and professional
                        profile.</p>
                </div>
                <div className="service-card reveal reveal-delay-2">
                    <div className="service-icon purple"><ion-icon name="desktop-outline"></ion-icon></div>
                    <h3>Modern Infrastructure</h3>
                    <p>Train in advanced labs equipped with the latest software and high-speed infrastructure for
                        seamless learning.</p>
                </div>
                <div className="service-card reveal reveal-delay-3">
                    <div className="service-icon gold"><ion-icon name="chatbubbles-outline"></ion-icon></div>
                    <h3>Soft Skills Training</h3>
                    <p>We prepare you for the corporate world with resume building, mock interviews, and communication
                        workshops.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Mission & Vision */}
    <section className="reveal-smooth features-section">
        <div className="container">
            <div className="section-header reveal">
                <div className="section-label reveal-smooth">Our Purpose</div>
                <h2 className="section-title">What <span className="gradient-text">Drives Us Forward</span></h2>
            </div>
            <div className="features-grid">
                <div className="feature-card reveal reveal-delay-1">
                    <div className="feature-number"><ion-icon name="rocket-outline"></ion-icon></div>
                    <h3>Our Mission</h3>
                    <p>To provide accessible, world-class IT education that empowers every student to reach their full
                        potential in the tech world.</p>
                </div>
                <div className="feature-card reveal reveal-delay-2">
                    <div className="feature-number"><ion-icon name="eye-outline"></ion-icon></div>
                    <h3>Our Vision</h3>
                    <p>To be the most trusted career partner for IT aspirants in India, known for excellence, integrity,
                        and student results.</p>
                </div>
                <div className="feature-card reveal reveal-delay-3">
                    <div className="feature-number"><ion-icon name="heart-outline"></ion-icon></div>
                    <h3>Our Values</h3>
                    <p>Integrity, Student-first approach, Continuous Innovation, and a Commitment to practical skill
                        development.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="reveal-smooth cta-section">
        <div className="container">
            <div className="cta-banner reveal">
                <h2>Ready to Start Your Tech Journey? <span className="gradient-text">Join TechnoKraft Today</span></h2>
                <p>Join the community of 5000+ successful alumni. Whether you're a fresher or a professional looking to
                    upskill, we have the right path for you.</p>
                <Link  to="/contact" className="btn-primary">Apply Now</Link>
            </div>
        </div>
    </section>

    {/* Footer */}
    {/* Footer */}
    
    </main>
  );
}
