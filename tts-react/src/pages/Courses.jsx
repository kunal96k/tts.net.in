import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const COURSE_DATA = {
  java: {
    tag: 'Certification Program',
    name: 'Java Full Stack Development',
    icon: 'code-slash-outline',
    iconColor: '#E53935',
    duration: '6 Months',
    fees: '₹40,000',
    rating: '4.8 ★',
    skills: ['Java Core & OOP', 'Spring Boot', 'Hibernate / JPA', 'React JS', 'REST APIs', 'MySQL', 'Git & GitHub', 'Microservices'],
    desc: 'Master end-to-end development with Java, Spring Boot, and React. 100% placement support with live project training.',
  },
  python: {
    tag: 'Certification Program',
    name: 'Python Full Stack Development',
    icon: 'logo-python',
    iconColor: '#2196F3',
    duration: '6 Months',
    fees: '₹35,000',
    rating: '4.7 ★',
    skills: ['Python 3', 'Django / Flask', 'React JS', 'PostgreSQL', 'REST APIs', 'Data Structures', 'Git & GitHub', 'AI Integration'],
    desc: 'Build robust applications using Python, Django, and modern front-end frameworks with AI integration.',
  },
  web: {
    tag: 'Job-Ready Program',
    name: 'Web Development Bootcamp',
    icon: 'globe-outline',
    iconColor: '#43A047',
    duration: '4 Months',
    fees: '₹18,000',
    rating: '4.6 ★',
    skills: ['HTML5 & CSS3', 'JavaScript ES6+', 'React JS', 'Node.js', 'MongoDB', 'Responsive Design', 'Bootstrap / Tailwind', 'Git & Deployment'],
    desc: 'Build stunning responsive websites. From HTML/CSS to React & Node.js — fully job-ready curriculum.',
  },
  datascience: {
    tag: 'Advanced Program',
    name: 'Data Science & AI',
    icon: 'hardware-chip-outline',
    iconColor: '#FF9800',
    duration: '6 Months',
    fees: '₹45,000',
    rating: '4.9 ★',
    skills: ['Python', 'Statistics & Math', 'Machine Learning', 'Deep Learning', 'Power BI', 'Tableau', 'NLP Basics', 'TensorFlow / Keras'],
    desc: 'Unlock insights with Python, Machine Learning, and Power BI. Learn from industry experts with live data projects.',
  },
  devops: {
    tag: 'Professional Certification',
    name: 'DevOps & Cloud Computing',
    icon: 'cloud-outline',
    iconColor: '#00897B',
    duration: '4 Months',
    fees: '₹30,000',
    rating: '4.7 ★',
    skills: ['Linux & Shell Scripting', 'Docker', 'Kubernetes', 'AWS / Azure', 'CI/CD Pipelines', 'Jenkins', 'Terraform', 'Monitoring Tools'],
    desc: 'Master CI/CD pipelines, Docker, Kubernetes, and AWS — the most in-demand DevOps & Cloud skill set.',
  },
  digitalmarketing: {
    tag: 'Professional Diploma',
    name: 'Digital Marketing',
    icon: 'megaphone-outline',
    iconColor: '#8E24AA',
    duration: '3 Months',
    fees: '₹12,000',
    rating: '4.5 ★',
    skills: ['SEO & SEM', 'Google Ads', 'Social Media Marketing', 'Content Strategy', 'Email Marketing', 'Google Analytics', 'Canva & Design', 'Affiliate Marketing'],
    desc: 'SEO, Social Media, Google Ads and Content Strategy — the complete digital growth toolkit.',
  },
};

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    document.title = 'Courses | TechnoKraft - Best IT Courses Institute in Nashik';
  }, []);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedCourse]);

  const course = selectedCourse ? COURSE_DATA[selectedCourse] : null;

  return (
    <main id="main-content">

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label reveal-smooth">Skill Up Excellence</div>
          <h1 className="reveal-scale">Professional <span className="shimmer-text">IT Courses</span></h1>
          <p className="reveal-smooth">Become an industry-ready professional with our job-oriented curriculum and hands-on projects.</p>
        </div>
      </section>

      {/* All Courses Grid */}
      <section className="services-section reveal-smooth">
        <div className="container">
          <div className="section-header reveal-scale">
            <div className="section-label reveal-smooth">Our Specialized Programs</div>
            <h2 className="section-title">Explore <span className="text-primary">All Courses</span></h2>
            <p className="section-subtitle">Choose from 20+ industry-aligned programs designed for real-world career success.</p>
          </div>

          <div className="services-grid">
            {Object.entries(COURSE_DATA).map(([key, c]) => (
              <div className="service-card reveal-smooth" key={key}>
                <div className="service-icon" style={{ background: `${c.iconColor}18`, color: c.iconColor }}>
                  <ion-icon name={c.icon}></ion-icon>
                </div>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <div className="card-footer-row">
                  <span className="card-duration-tag">
                    <ion-icon name="time-outline"></ion-icon> {c.duration}
                  </span>
                  <button
                    className="btn-view-details-card"
                    onClick={() => setSelectedCourse(key)}
                    aria-label={`View details for ${c.name}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="section-cta" style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn-primary">
              <ion-icon name="call-outline"></ion-icon> Book Free Demo Class
            </Link>
          </div>
        </div>
      </section>

      {/* Course Detail Modal — React controlled */}
      {selectedCourse && course && (
        <div
          className="course-modal-overlay active"
          onClick={(e) => { if (e.target.classList.contains('course-modal-overlay')) setSelectedCourse(null); }}
          role="dialog"
          aria-modal="true"
          aria-label={`Course details for ${course.name}`}
        >
          <div className="course-modal">
            {/* Header */}
            <div className="modal-header-bar">
              <div className="modal-icon-box" style={{ background: `${course.iconColor}18`, color: course.iconColor }}>
                <ion-icon name={course.icon}></ion-icon>
              </div>
              <div className="modal-title-group">
                <div className="modal-course-tag">{course.tag}</div>
                <h3 className="modal-course-name">{course.name}</h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedCourse(null)}
                aria-label="Close modal"
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            {/* Body */}
            <div className="modal-body">
              {/* Key highlights */}
              <div className="modal-highlight-row">
                <div className="modal-highlight">
                  <ion-icon name="time-outline" style={{ color: 'var(--primary)' }}></ion-icon>
                  <div className="h-label">Duration</div>
                  <div className="h-value">{course.duration}</div>
                </div>
                <div className="modal-highlight">
                  <ion-icon name="cash-outline" style={{ color: '#4CAF50' }}></ion-icon>
                  <div className="h-label">Course Fees</div>
                  <div className="h-value">{course.fees}</div>
                </div>
                <div className="modal-highlight">
                  <ion-icon name="star" style={{ color: '#FFC107' }}></ion-icon>
                  <div className="h-label">Rating</div>
                  <div className="h-value">{course.rating}</div>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="modal-what-learn">
                <h4>What You'll Learn</h4>
                <div className="modal-skills">
                  {course.skills.map((skill, i) => (
                    <span key={i} className="modal-skill-badge">
                      <ion-icon name="checkmark-outline"></ion-icon> {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="modal-actions">
                <Link to="/contact" className="btn-primary" onClick={() => setSelectedCourse(null)}>
                  <ion-icon name="school-outline"></ion-icon> Enroll Now
                </Link>
                <Link to="/contact" className="btn-secondary" onClick={() => setSelectedCourse(null)}>
                  <ion-icon name="call-outline"></ion-icon> Free Counseling
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
