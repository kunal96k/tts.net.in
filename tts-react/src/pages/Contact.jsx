import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function Contact() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "Contact | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="reveal-smooth page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Get In Touch</div>
            <h1 className="reveal-scale">Contact <span className="gradient-text">TechnoKraft</span></h1>
            <p>Ready to jumpstart your career? Reach out for expert counseling and course guidance.</p>
        </div>
    </section>

    <section className="reveal-smooth contact-section">
        <div className="container">
            <div className="contact-grid">
                <div className="reveal">
                    <div className="contact-info-card">
                        <div className="info-icon"><ion-icon name="location-outline"></ion-icon></div>
                        <h3>Nashik </h3>
                        <p>1st Floor, Kanchwala Avenue, Above Viju’s Dabeli, Thatte Nagar Marg, College Road, Nashik,
                            Maharashtra 422005</p>
                    </div>
                    <div className="contact-info-card">
                        <div className="info-icon"><ion-icon name="call-outline"></ion-icon></div>
                        <h3>Call Support</h3>
                        <p>+91-8645628278 (Primary)<br />+91-8446203167 (Support)</p>
                    </div>
                    <div className="contact-info-card">
                        <div className="info-icon"><ion-icon name="mail-outline"></ion-icon></div>
                        <h3>Email Admissions</h3>
                        <p>info@tts.net.in</p>
                    </div>
                    <div className="contact-info-card">
                        <div className="info-icon"><ion-icon name="time-outline"></ion-icon></div>
                        <h3>Office Hours</h3>
                        <p>09:30 am - 08:30 pm | Mon-Sat</p>
                    </div>
                </div>
                <div className="contact-form-card reveal reveal-delay-2">
                    <h3 style={{fontSize: '24px', fontWeight: '800', marginBottom: '8px'}}>Plan Your Future With Us</h3>
                    <p style={{color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '28px'}}>Fill out the form
                        below and our career experts will reach out to you within 24 hours.</p>
                    <form id="contactForm">
                        <div className="form-row">
                            <div className="form-group"><label>First Name</label><input type="text" placeholder="e.g. Kunal"
                                    required /></div>
                            <div className="form-group"><label>Last Name</label><input type="text" placeholder="e.g. Patil"
                                    required /></div>
                        </div>
                        <div className="form-group"><label>Email Address</label><input type="email"
                                placeholder="Kunal@gmail.com" required /></div>
                        <div className="form-group"><label>Phone Number</label><input type="tel"
                                placeholder="+91 94042XXXXX" required /></div>
                        <div className="form-group">
                            <label>Course Interest</label>
                            <select required>
                                <option value="">Select a course...</option>
                                <option>Java Full Stack Development</option>
                                <option>Data Science & AI</option>
                                <option>DevOps & Cloud Computing</option>
                                <option>Web Development</option>
                                <option>Software Testing (QA)</option>
                                <option>Digital Marketing</option>
                            </select>
                        </div>
                        <div className="form-group"><label>Your Query</label><textarea
                                placeholder="Tell us about your background and career goals..."></textarea></div>
                        <button type="submit" className="btn-primary" style={{width: '100%', justifyContent: 'center'}}>Submit
                            Request</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    {/* Map Section */}
    <section className="reveal-smooth" style={{padding: '0 0 100px 0'}}>
        <div className="container">
            <div className="reveal"
                style={{borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '400px', border: '1px solid var(--border-light)'}}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.124508493134!2d73.763402!3d20.00318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec9e7df24449%3A0xe53935!2zVGVjaG5vS3JhZnQgVHJhaW5pbmcgJiBTb2x1dGlvbg!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%" height="100%" style={{border: '0'}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </section>

    {/* Footer */}
    
    </main>
  );
}
