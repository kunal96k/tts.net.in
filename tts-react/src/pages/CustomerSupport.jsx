import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function CustomerSupport() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "CustomerSupport | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

  <section className="reveal-smooth page-hero">
    <div className="container pt-4">
      <div className="section-label reveal-smooth">Our Services</div>
      <h1 className="reveal-scale">Customer <span className="gradient-text">Support</span></h1>
      <p>Building trust and loyalty, one interaction at a time. Exceptional support whenever your customers need it.</p>
    </div>
  </section>

  <section className="reveal-smooth about-section" style={{paddingTop: '0'}}>
    <div className="container mt-5">
      <div className="about-grid">
        <div className="about-content reveal">
          <h2>We Don't Just Answer Calls -- We <span className="gradient-text">Build Relationships</span></h2>
          <p>At Capernaum Solutions, we understand that customer support is often the first point of contact between
            your business and your clients. That's why we go beyond simple troubleshooting.</p>
          <p>We provide compassionate, efficient, and expert assistance across all channels. Our team ensures every
            interaction reinforces your brand's commitment to quality and care.</p>
          <div className="about-features">
            <div className="about-feature">
              <div className="icon"><ion-icon name="time-outline"></ion-icon></div>
              <div>
                <h4>24/7 Availability</h4>
                <p>Round-the-clock support for any time zone</p>
              </div>
            </div>
            <div className="about-feature">
              <div className="icon"><ion-icon name="chatbubbles-outline"></ion-icon></div>
              <div>
                <h4>Multi-Channel</h4>
                <p>Phone, Email, Chat & Social Media</p>
              </div>
            </div>
            <div className="about-feature">
              <div className="icon"><ion-icon name="trophy-outline"></ion-icon></div>
              <div>
                <h4>Expert Agents</h4>
                <p>Highly trained professionals</p>
              </div>
            </div>
            <div className="about-feature">
              <div className="icon"><ion-icon name="people-outline"></ion-icon></div>
              <div>
                <h4>Personalized Care</h4>
                <p>Tailored solutions for every customer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-img-card reveal reveal-delay-2">
          <img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=500&fit=crop"
            alt="Customer support team at work" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <section className="reveal-smooth cta-section">
    <div className="container">
      <div className="cta-banner reveal">
        <h2>Ready to Elevate Your <span className="gradient-text">Customer Experience?</span></h2>
        <p>Partner with Capernaum Solutions to deliver world-class support that turns customers into loyal advocates.
        </p>
        <Link  to="/contact" className="btn-primary">Get in Touch</Link>
      </div>
    </div>
  </section>

  {/* Footer */}
  
    </main>
  );
}
