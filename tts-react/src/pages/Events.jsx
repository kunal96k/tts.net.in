import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function Events() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "Events | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Live & Upcoming Events</div>
            <h1 className="reveal-scale">IT Workshops & <span className="shimmer-text">Events</span></h1>
            <p className="reveal-smooth">Join our expert-led workshops, seminars, and hackathons designed to accelerate your
                IT career in Nashik and beyond.</p>
        </div>
    </section>

    <section className="services-section" style={{paddingTop: '60px'}}>
        <div className="container">
            <div className="event-section-title reveal-smooth">
                <div className="event-dot green"></div>
                <h3>Upcoming Events</h3>
            </div>
            <div className="event-grid" style={{marginBottom: '60px'}}>
                <div className="event-card reveal-smooth">
                    <div className="event-header">
                        <div className="event-date-box">
                            <div className="day">30</div>
                            <div className="month">July</div>
                        </div>
                        <div className="event-info">
                            <div className="event-tag upcoming">Upcoming</div>
                            <h3>Data Analytics With Generative AI Workshop</h3>
                        </div>
                    </div>
                    <div className="event-body">
                        <div className="event-detail-row"><ion-icon name="time-outline"></ion-icon> 10:00 AM – 1:00 PM</div>
                        <div className="event-detail-row"><ion-icon name="location-outline"></ion-icon> TechnoKraft Campus,
                            Nashik</div>
                        <div className="event-detail-row"><ion-icon name="people-outline"></ion-icon> 50 Seats Available
                        </div>
                        <div className="event-detail-row"><ion-icon name="cash-outline"></ion-icon> Free</div>
                        <div className="event-actions">
                            <Link  to="/contact" className="btn-register">Register Now</Link>
                            <button className="btn-details evt-learn-more"
                                data-title="Power BI Masterclass Workshop"
                                data-date="15 April 2026"
                                data-time="10:00 AM – 5:00 PM"
                                data-venue="TechnoKraft Campus, College Road, Nashik"
                                data-seats="50"
                                data-fee="₹499 (Free for TTS Enrolled Students)"
                                data-speaker="Mr. Rahul Mahajan — Senior BI Architect, Persistent Systems"
                                data-agenda="Introduction to Power BI & Business Intelligence|Connecting Data Sources (Excel, SQL, APIs)|Building Interactive Dashboards & Reports|DAX Formulas & Calculated Columns|Publishing to Power BI Service|Live Q&A and Hands-on Practice">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                

                
            </div>

            <div className="event-section-title reveal-smooth">
                <div className="event-dot gray"></div>
                <h3>Past Events</h3>
            </div>
            <div className="event-grid">
                <div className="event-card reveal-smooth" style={{opacity: '0.7'}}>
                    <div className="event-header">
                        <div className="event-date-box" style={{background: 'var(--text-muted)'}}>
                            <div className="day">12</div>
                            <div className="month">Mar</div>
                        </div>
                        <div className="event-info">
                            <div className="event-tag past">Completed</div>
                            <h3>Python Automation Workshop</h3>
                        </div>
                    </div>
                    <div className="event-body">
                        <div className="event-detail-row"><ion-icon name="time-outline"></ion-icon> 10:00 AM – 4:00 PM</div>
                        <div className="event-detail-row"><ion-icon name="people-outline"></ion-icon> 65 Attendees</div>
                        <div className="event-detail-row"><ion-icon name="star"></ion-icon> Rated 4.9/5 by Participants
                        </div>
                    </div>
                </div>
                <div className="event-card reveal-smooth" style={{opacity: '0.7'}}>
                    <div className="event-header">
                        <div className="event-date-box" style={{background: 'var(--text-muted)'}}>
                            <div className="day">02</div>
                            <div className="month">Mar</div>
                        </div>
                        <div className="event-info">
                            <div className="event-tag past">Completed</div>
                            <h3>Campus Seminar — YCMOU Nashik</h3>
                        </div>
                    </div>
                    <div className="event-body">
                        <div className="event-detail-row"><ion-icon name="time-outline"></ion-icon> 11:00 AM – 2:00 PM</div>
                        <div className="event-detail-row"><ion-icon name="people-outline"></ion-icon> 120 Students Attended
                        </div>
                        <div className="event-detail-row"><ion-icon name="star"></ion-icon> AI & Web Dev Career Guidance
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <div className="cta-banner reveal">
                <h2>Never Miss an <span className="gradient-text">Event</span></h2>
                <p>Register your interest and we'll notify you about upcoming workshops and seminars.</p><Link 
                    to="/contact" className="btn-primary">Notify Me</Link>
            </div>
        </div>
    </section>

    
    </main>
  );
}
