import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function ItSolutions() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "ItSolutions | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="reveal-smooth page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Our Services</div>
            <h1 className="reveal-scale">IT <span className="gradient-text">Solutions</span></h1>
            <p>Delivering secure, scalable, and innovative IT services tailored to your evolving business demands.</p>
        </div>
    </section>

    <section className="reveal-smooth about-section" style={{paddingTop: '0'}}>
        <div className="container">
            <div className="about-grid">
                <div className="about-content reveal">
                    <h2>Technology That Powers <span className="gradient-text">Business Growth</span></h2>
                    <p>Our IT solutions encompass everything from infrastructure management to custom software
                        development. We help organizations modernize their tech stack, enhance security, and optimize
                        workflows for maximum efficiency.</p>
                    <p>Whether you need cloud migration, cybersecurity, or application development, our expert team
                        delivers solutions that keep you ahead of the curve and compliant with industry standards.</p>
                    <div className="about-features">
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="cloud-outline"></ion-icon></div>
                            <div>
                                <h4>Cloud Solutions</h4>
                                <p>Scalable cloud infrastructure</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="shield-half-outline"></ion-icon></div>
                            <div>
                                <h4>Cybersecurity</h4>
                                <p>Enterprise-grade protection</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="code-slash-outline"></ion-icon></div>
                            <div>
                                <h4>Custom Development</h4>
                                <p>Tailored software solutions</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="server-outline"></ion-icon></div>
                            <div>
                                <h4>Infrastructure</h4>
                                <p>Reliable IT management</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-img-card reveal reveal-delay-2">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=500&fit=crop"
                        alt="IT infrastructure and technology" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    <section className="reveal-smooth cta-section">
        <div className="container">
            <div className="cta-banner reveal">
                <h2>Transform Your Business with <span className="gradient-text">Modern IT Solutions</span></h2>
                <p>From infrastructure modernization to custom application development, we bring the technology
                    expertise your business needs to thrive in a digital-first world.</p>
                <Link  to="/contact" className="btn-primary">Get in Touch</Link>
            </div>
        </div>
    </section>

    {/* Footer */}
    
    </main>
  );
}
