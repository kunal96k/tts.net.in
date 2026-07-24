import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function InterviewPrep() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "InterviewPrep | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      
    <section className="reveal-smooth page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Success Accelerator</div>
            <h1 className="reveal-scale">Interview <span className="shimmer-text">Preparation</span></h1>
            <p>Confidence is the key to success. We conduct simulated mock interviews, technical coding challenges, and
                HR round training to make you job-ready.</p>
        </div>
    </section>
    <section className="reveal-smooth services-section">
        <div className="container">
            <div className="services-grid">
                <div className="service-card reveal-smooth">
                    <h3>Mock Technical Interviews</h3>
                    <p>Practical coding tests and whiteboard interviews to simulate the real IT industry experience.</p>
                </div>
                <div className="service-card reveal-smooth">
                    <h3>HR Round Mastery</h3>
                    <p>Master behavioral questions and learn how to communicate your strengths effectively during HR
                        rounds.</p>
                </div>
                <div className="service-card reveal-smooth">
                    <h3>Aptitude Training</h3>
                    <p>Prepare for logical reasoning and numerical aptitude tests required for major recruitment drives.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    
    </main>
  );
}
