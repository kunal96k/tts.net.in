import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function Jobs() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "Jobs | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Placement Opportunities</div>
            <h1 className="reveal-scale">IT Jobs & <span className="shimmer-text">Opportunities</span></h1>
            <p className="reveal-smooth">Browse curated IT job openings from our 250+ hiring partners. TechnoKraft graduates
                get placement support at every step.</p>
        </div>
    </section>

    <section className="services-section" style={{paddingTop: '60px'}}>
        <div className="container">
            <div className="job-search-bar reveal-smooth">
                <div className="search-input-wrapper">
                    <ion-icon name="search-outline"></ion-icon>
                    <input type="text" className="job-search-input" placeholder="Search by role, skill, or company..." />
                </div>
                <div className="search-input-wrapper">
                    <ion-icon name="location-outline"></ion-icon>
                    <input type="text" className="job-search-input" placeholder="Location (e.g. Pune, Nashik)" />
                </div>
            </div>
            <p className="jobs-stat reveal-smooth">Showing <strong>8 active openings</strong> — updated Mar 25, 2026</p>
            <div className="job-grid">
                <div className="job-card reveal-smooth">
                    <div className="job-card-left">
                        <div className="job-icon red"><ion-icon name="code-slash-outline" style={{color: '#E53935'}}></ion-icon>
                        </div>
                        <div>
                            <div className="job-title">Java Backend Developer</div>
                            <div className="job-company">Persistent Systems • Pune, India</div>
                            <div className="job-tags"><span className="job-tag type">Full-Time</span><span
                                    className="job-tag">Java</span><span className="job-tag">Spring Boot</span><span
                                    className="job-tag">MySQL</span><span className="job-tag">0–2 Yrs</span></div>
                        </div>
                    </div>
                    <div className="job-card-right">
                        <div>
                            <div className="job-salary">₹7–10 LPA</div>
                            <div className="job-salary-label">Annual Package</div>
                        </div><Link  to="/contact" className="btn-apply">Apply Now</Link>
                    </div>
                </div>
                <div className="job-card reveal-smooth">
                    <div className="job-card-left">
                        <div className="job-icon blue"><ion-icon name="hardware-chip-outline"
                                style={{color: '#2196F3'}}></ion-icon></div>
                        <div>
                            <div className="job-title">Data Analyst</div>
                            <div className="job-company">Infosys BPM • Pune / Remote</div>
                            <div className="job-tags"><span className="job-tag type">Full-Time</span><span
                                    className="job-tag">Python</span><span className="job-tag">Power BI</span><span
                                    className="job-tag">SQL</span><span className="job-tag">Freshers OK</span></div>
                        </div>
                    </div>
                    <div className="job-card-right">
                        <div>
                            <div className="job-salary">₹5–8 LPA</div>
                            <div className="job-salary-label">Annual Package</div>
                        </div><Link  to="/contact" className="btn-apply">Apply Now</Link>
                    </div>
                </div>
                <div className="job-card reveal-smooth">
                    <div className="job-card-left">
                        <div className="job-icon green"><ion-icon name="cloud-outline" style={{color: '#4CAF50'}}></ion-icon>
                        </div>
                        <div>
                            <div className="job-title">DevOps Engineer</div>
                            <div className="job-company">HCL Technologies • Nashik / Pune</div>
                            <div className="job-tags"><span className="job-tag type">Full-Time</span><span
                                    className="job-tag">AWS</span><span className="job-tag">Docker</span><span
                                    className="job-tag">Jenkins</span><span className="job-tag">0–3 Yrs</span></div>
                        </div>
                    </div>
                    <div className="job-card-right">
                        <div>
                            <div className="job-salary">₹8–12 LPA</div>
                            <div className="job-salary-label">Annual Package</div>
                        </div><Link  to="/contact" className="btn-apply">Apply Now</Link>
                    </div>
                </div>
                <div className="job-card reveal-smooth">
                    <div className="job-card-left">
                        <div className="job-icon gold"><ion-icon name="globe-outline" style={{color: '#FFC107'}}></ion-icon>
                        </div>
                        <div>
                            <div className="job-title">React.js Frontend Developer</div>
                            <div className="job-company">Capgemini • Pune</div>
                            <div className="job-tags"><span className="job-tag type">Full-Time</span><span
                                    className="job-tag">React</span><span className="job-tag">JavaScript</span><span
                                    className="job-tag">CSS</span><span className="job-tag">1–2 Yrs</span></div>
                        </div>
                    </div>
                    <div className="job-card-right">
                        <div>
                            <div className="job-salary">₹6–9 LPA</div>
                            <div className="job-salary-label">Annual Package</div>
                        </div><Link  to="/contact" className="btn-apply">Apply Now</Link>
                    </div>
                </div>
                <div className="job-card reveal-smooth">
                    <div className="job-card-left">
                        <div className="job-icon purple"><ion-icon name="logo-python" style={{color: '#9C27B0'}}></ion-icon>
                        </div>
                        <div>
                            <div className="job-title">ML / AI Engineer</div>
                            <div className="job-company">Tech Mahindra • Bangalore</div>
                            <div className="job-tags"><span className="job-tag type">Full-Time</span><span
                                    className="job-tag">Python</span><span className="job-tag">TensorFlow</span><span
                                    className="job-tag">NLP</span><span className="job-tag">1–3 Yrs</span></div>
                        </div>
                    </div>
                    <div className="job-card-right">
                        <div>
                            <div className="job-salary">₹9–15 LPA</div>
                            <div className="job-salary-label">Annual Package</div>
                        </div><Link  to="/contact" className="btn-apply">Apply Now</Link>
                    </div>
                </div>
                <div className="job-card reveal-smooth">
                    <div className="job-card-left">
                        <div className="job-icon red"><ion-icon name="shield-checkmark-outline"
                                style={{color: '#E53935'}}></ion-icon></div>
                        <div>
                            <div className="job-title">QA / Test Engineer</div>
                            <div className="job-company">Zensar Technologies • Pune</div>
                            <div className="job-tags"><span className="job-tag type">Full-Time</span><span
                                    className="job-tag">Selenium</span><span className="job-tag">Java</span><span
                                    className="job-tag">TestNG</span><span className="job-tag">Freshers OK</span></div>
                        </div>
                    </div>
                    <div className="job-card-right">
                        <div>
                            <div className="job-salary">₹4–7 LPA</div>
                            <div className="job-salary-label">Annual Package</div>
                        </div><Link  to="/contact" className="btn-apply">Apply Now</Link>
                    </div>
                </div>
                <div className="job-card reveal-smooth">
                    <div className="job-card-left">
                        <div className="job-icon blue"><ion-icon name="bar-chart-outline" style={{color: '#2196F3'}}></ion-icon>
                        </div>
                        <div>
                            <div className="job-title">Business Intelligence Developer</div>
                            <div className="job-company">Wipro • Nashik</div>
                            <div className="job-tags"><span className="job-tag type">Full-Time</span><span className="job-tag">Power
                                    BI</span><span className="job-tag">SQL</span><span className="job-tag">Excel</span><span
                                    className="job-tag">0–2 Yrs</span></div>
                        </div>
                    </div>
                    <div className="job-card-right">
                        <div>
                            <div className="job-salary">₹5–8 LPA</div>
                            <div className="job-salary-label">Annual Package</div>
                        </div><Link  to="/contact" className="btn-apply">Apply Now</Link>
                    </div>
                </div>
                <div className="job-card reveal-smooth">
                    <div className="job-card-left">
                        <div className="job-icon green"><ion-icon name="megaphone-outline" style={{color: '#4CAF50'}}></ion-icon>
                        </div>
                        <div>
                            <div className="job-title">Digital Marketing Executive</div>
                            <div className="job-company">Local IT Startup • Nashik</div>
                            <div className="job-tags"><span className="job-tag type">Full-Time</span><span
                                    className="job-tag">SEO</span><span className="job-tag">Google Ads</span><span
                                    className="job-tag">Content</span><span className="job-tag">Freshers OK</span></div>
                        </div>
                    </div>
                    <div className="job-card-right">
                        <div>
                            <div className="job-salary">₹3–5 LPA</div>
                            <div className="job-salary-label">Annual Package</div>
                        </div><Link  to="/contact" className="btn-apply">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <div className="cta-banner reveal">
                <h2>Get <span className="gradient-text">Placement Support</span> Today</h2>
                <p>Enroll in any TechnoKraft course and get direct access to 250+ hiring partners and dedicated
                    placement assistance.</p><Link  to="/courses" className="btn-primary">View Courses</Link>
            </div>
        </div>
    </section>

    
    </main>
  );
}
