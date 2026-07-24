import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function DigitalMarketing() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "DigitalMarketing | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="reveal-smooth page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Our Services</div>
            <h1 className="reveal-scale">Digital <span className="gradient-text">Marketing</span></h1>
            <p>Unlock your brand's potential with data-driven digital strategies that engage audiences and drive
                measurable results.</p>
        </div>
    </section>

    <section className="reveal-smooth about-section" style={{paddingTop: '0'}}>
        <div className="container">
            <div className="about-grid">
                <div className="about-content reveal">
                    <h2>Amplify Your Brand's <span className="gradient-text">Digital Presence</span></h2>
                    <p>In today's digital landscape, visibility is everything. Our digital marketing services help you
                        reach the right audience at the right time with compelling messages that convert.</p>
                    <p>From SEO and PPC campaigns to social media management and content marketing, we craft
                        comprehensive strategies that build brand awareness, drive traffic, and generate leads.</p>
                    <div className="about-features">
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="search-outline"></ion-icon></div>
                            <div>
                                <h4>SEO Optimization</h4>
                                <p>Higher search engine rankings</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="megaphone-outline"></ion-icon></div>
                            <div>
                                <h4>Social Media</h4>
                                <p>Engaging social campaigns</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="create-outline"></ion-icon></div>
                            <div>
                                <h4>Content Strategy</h4>
                                <p>Compelling content that converts</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="card-outline"></ion-icon></div>
                            <div>
                                <h4>PPC Campaigns</h4>
                                <p>Maximizing ad spend ROI</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-img-card reveal reveal-delay-2">
                    <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=500&fit=crop"
                        alt="Digital marketing strategy" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    <section className="reveal-smooth cta-section">
        <div className="container">
            <div className="cta-banner reveal">
                <h2>Grow Your Business with <span className="gradient-text">Strategic Digital Marketing</span></h2>
                <p>Our team of digital experts creates campaigns that connect your brand with the audiences that matter
                    most, turning clicks into customers and engagement into revenue.</p>
                <Link  to="/contact" className="btn-primary">Get in Touch</Link>
            </div>
        </div>
    </section>

    {/* Footer */}
    
    </main>
  );
}
