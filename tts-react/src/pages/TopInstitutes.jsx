import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function TopInstitutes() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "TopInstitutes | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Quality Education Guide</div>
            <h1 className="reveal-scale">Top IT <span className="shimmer-text">Institutes in Nashik</span></h1>
            <p className="reveal-smooth">Navigate your career path with our comprehensive guide to the best IT training
                centers in Nashik, ranked by placement records and faculty expertise.</p>
        </div>
    </section>

    <section className="services-section" style={{paddingTop: '60px'}}>
        <div className="container">
            {/* Rank #1 - TechnoKraft */}
            <div className="rank-card reveal-smooth">
                <div className="rank-badge text-secondary">Ranked #1 Best Institute</div>
                <div className="rank-info">
                    <img src="images/institute_nashik_building_1774349251126.jpg" alt="TechnoKraft"
                        className="rank-img" loading="lazy" decoding="async" />
                    <div className="rank-details">
                        <div className="rank-rating"><ion-icon name="star"></ion-icon> 4.9 (Authorized AWS Exam Center)
                        </div>
                        <h3>TechnoKraft</h3>
                        <p>Nashik's premier IT institute specializing in industrial training with a 100% placement
                            record. Known for its hands-on approach and expert mentorship.</p>
                        <div className="rank-tags">
                            <span className="rank-tag">Java Full Stack</span>
                            <span className="rank-tag">Data Science & AI</span>
                            <span className="rank-tag">AWS Certified Center</span>
                            <span className="rank-tag">DevOps</span>
                        </div>
                        <a href="https://tts.net.in" className="btn-primary" target="_blank"
                            style={{padding: '10px 24px', fontSize: '14px'}}>Visit
                            Official Website</a>
                    </div>
                </div>
            </div>

            {/* Rank #2 - Seema Technologies */}
            <div className="rank-card reveal-smooth">
                <div className="rank-info">
                    <div style={{width: '200px', height: '150px', background: 'var(--bg-secondary)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                        <ion-icon name="lock-closed-outline" style={{fontSize: '48px', color: 'var(--text-muted)'}}></ion-icon>
                    </div>
                    <div className="rank-details">
                        <div className="rank-rating"><ion-icon name="star"></ion-icon> 4.9 (725+ Reviews)</div>
                        <h3>Seema Technologies</h3>
                        <p>Renowned for advanced IT security training, cybersecurity certifications, and enterprise networking courses in Nashik.</p>
                        <div className="rank-tags">
                            <span className="rank-tag">Cybersecurity</span>
                            <span className="rank-tag">Ethical Hacking</span>
                            <span className="rank-tag">Cisco Networking</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rank #3 - Netleap IT Training */}
            <div className="rank-card reveal-smooth">
                <div className="rank-info">
                    <div style={{width: '200px', height: '150px', background: 'var(--bg-secondary)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                        <ion-icon name="code-slash-outline" style={{fontSize: '48px', color: 'var(--text-muted)'}}></ion-icon>
                    </div>
                    <div className="rank-details">
                        <div className="rank-rating"><ion-icon name="star"></ion-icon> 4.8 (392+ Reviews)</div>
                        <h3>Netleap IT Training and Solutions</h3>
                        <p>Specializes in comprehensive software development frameworks with professional training in Java, Python, and Full-Stack development.</p>
                        <div className="rank-tags">
                            <span className="rank-tag">Software Development</span>
                            <span className="rank-tag">Java Full Stack</span>
                            <span className="rank-tag">Python Frameworks</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rank #4 - Sumago Infotech */}
            <div className="rank-card reveal-smooth">
                <div className="rank-info">
                    <div style={{width: '200px', height: '150px', background: 'var(--bg-secondary)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                        <ion-icon name="globe-outline" style={{fontSize: '48px', color: 'var(--text-muted)'}}></ion-icon>
                    </div>
                    <div className="rank-details">
                        <div className="rank-rating"><ion-icon name="star"></ion-icon> 4.7 (938+ Reviews)</div>
                        <h3>Sumago Infotech Pvt Ltd</h3>
                        <p>Leading hub for digital marketing, web technologies, and software consulting services with live project exposure.</p>
                        <div className="rank-tags">
                            <span className="rank-tag">Digital Marketing</span>
                            <span className="rank-tag">Web Design</span>
                            <span className="rank-tag">SEO Services</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rank #5 - IRT Technologies */}
            <div className="rank-card reveal-smooth">
                <div className="rank-info">
                    <div style={{width: '200px', height: '150px', background: 'var(--bg-secondary)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                        <ion-icon name="analytics-outline" style={{fontSize: '48px', color: 'var(--text-muted)'}}></ion-icon>
                    </div>
                    <div className="rank-details">
                        <div className="rank-rating"><ion-icon name="star"></ion-icon> 4.6 (795+ Reviews)</div>
                        <h3>IRT Technologies</h3>
                        <p>The go-to institute in Nashik for professional SAP modules (MM, FICO, PP) and business intelligence tools.</p>
                        <div className="rank-tags">
                            <span className="rank-tag">SAP Training</span>
                            <span className="rank-tag">Business Modules</span>
                            <span className="rank-tag">FICO / MM</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rank #6 - Disha Computer Institute */}
            <div className="rank-card reveal-smooth">
                <div className="rank-info">
                    <div style={{width: '200px', height: '150px', background: 'var(--bg-secondary)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                        <ion-icon name="color-palette-outline" style={{fontSize: '48px', color: 'var(--text-muted)'}}></ion-icon>
                    </div>
                    <div className="rank-details">
                        <div className="rank-rating"><ion-icon name="star"></ion-icon> 4.6 (762+ Reviews)</div>
                        <h3>Disha Computer Institute</h3>
                        <p>A pioneer in creative computing, offering specialized courses in 3D animation, graphic design, and core programming.</p>
                        <div className="rank-tags">
                            <span className="rank-tag">3D Animation</span>
                            <span className="rank-tag">Graphic Design</span>
                            <span className="rank-tag">Creative Arts</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="section-header reveal-flip" style={{marginTop: '80px'}}>
                <h2 className="section-title">Quick <span className="gradient-text">Comparison</span></h2>
            </div>
            <table className="comparison-table reveal-smooth">
                <thead>
                    <tr>
                        <th>Institute Name</th>
                        <th>Core Specialization</th>
                        <th>Key Advantage</th>
                        <th>Student Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>TechnoKraft</strong></td>
                        <td>Java, AI & Cloud</td>
                        <td>Authorized AWS Exam Center & 100% Placement</td>
                        <td>4.9/5</td>
                    </tr>
                    <tr>
                        <td>Seema Technologies</td>
                        <td>Cybersecurity</td>
                        <td>Advanced Networking Labs</td>
                        <td>4.9/5</td>
                    </tr>
                    <tr>
                        <td>Netleap IT</td>
                        <td>Full-Stack Dev</td>
                        <td>Comprehensive Software Frameworks</td>
                        <td>4.8/5</td>
                    </tr>
                    <tr>
                        <td>Sumago Infotech</td>
                        <td>Digital Marketing</td>
                        <td>Live Professional Project Exposure</td>
                        <td>4.7/5</td>
                    </tr>
                    <tr>
                        <td>IRT Technologies</td>
                        <td>SAP Modules</td>
                        <td>Professional SAP Training (MM/FICO)</td>
                        <td>4.6/5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    {/* Footer */}
    
    </main>
  );
}
