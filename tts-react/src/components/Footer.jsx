import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo-box" style={{ marginBottom: '20px' }}>
              <img src="/images/tts_logo.png" alt="TechnoKraft Logo" />
              <div className="brand-text">
                <span className="brand-main">TechnoKraft</span>
              </div>
            </Link>
            <p>
              TechnoKraft is dedicated to building high-impact tech careers with
              integrity, transparency, and a 100% placement guarantee.
            </p>

            <div className="footer-social">
              <a href="https://www.facebook.com/tts.net.in/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://www.instagram.com/TechnoKraft_tts" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="https://www.linkedin.com/company/ttsnashik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href="https://www.youtube.com/@technokraft-tts455" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-col">
            <h4>Our Courses</h4>
            <Link to="/courses#full-stack">Java Full Stack</Link>
            <Link to="/courses#data-science">Data Science & AI</Link>
            <Link to="/courses#devops">DevOps / Cloud</Link>
            <Link to="/courses#web-dev">Web Development</Link>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '10px' }}>
              <ion-icon name="location-outline"></ion-icon> 1st Floor, Kanchwala
              Avenue, Above Viju’s Dabeli, Thatte Nagar Marg, College Road,
              Nashik, Maharashtra 422005, India
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '5px' }}>
              <ion-icon name="call-outline"></ion-icon> +91-8645628278
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '5px' }}>
              <ion-icon name="mail-outline"></ion-icon> info@tts.net.in
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
              <ion-icon name="time-outline"></ion-icon> 09:30 am - 08:30 pm
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2026{' '}
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              TechnoKraft
            </Link>
            . All rights reserved. | Designed by{' '}
            <a href="https://www.technokraftservices.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
              TechnoKraft Services LLP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
