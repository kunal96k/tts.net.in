import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';
import { getAiRecommendations, saveLeadAndGenerateRoadmap } from '../services/aiRecommendationService';

export default function Home() {
  const { openLightbox } = useLightbox();

  // AI Counselor inline state
  const [goalInput, setGoalInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiLoadingStep, setAiLoadingStep] = useState(0);
  const [aiResult, setAiResult] = useState(null);
  const [aiError, setAiError] = useState('');
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [leadInfo, setLeadInfo] = useState({ name: '', phone: '', email: '' });
  const [roadmapResult, setRoadmapResult] = useState(null);

  const AI_STEPS = [
    '🤖 Understanding your goal...',
    '🔍 Comparing 115+ TechnoKraft courses...',
    '📈 Finding best matches & career paths...'
  ];

  const handleGetSuggestions = async () => {
    if (!goalInput.trim()) {
      setAiError('Please enter your career goal first.');
      return;
    }
    setAiError('');
    setAiResult(null);
    setRoadmapResult(null);
    setShowLeadForm(false);
    setAiLoading(true);
    setAiLoadingStep(0);
    const t1 = setTimeout(() => setAiLoadingStep(1), 600);
    const t2 = setTimeout(() => setAiLoadingStep(2), 1200);
    try {
      const res = await getAiRecommendations({ goal: goalInput });
      setAiResult(res);
    } catch (err) {
      setAiError('Something went wrong. Please try again.');
    } finally {
      clearTimeout(t1); clearTimeout(t2);
      setAiLoading(false);
    }
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadInfo.name || !leadInfo.phone) return;
    setAiLoading(true);
    try {
      const res = await saveLeadAndGenerateRoadmap({
        ...leadInfo, goal: goalInput,
        recommendedCourse: selectedCourse || aiResult?.recommendations?.[0]?.courseName || 'IT Specialization'
      });
      setRoadmapResult(res);
      setShowLeadForm(false);
    } catch (err) {}
    finally { setAiLoading(false); }
  };

  useEffect(() => {
    document.title = "Home | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      
    {/* Hero Section */}
    <section className="reveal-smooth hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-offer-badge" style={{display: 'none'}}>
              Summer Special Offer 2026 - Flat 20% Off!
            </div>
            <div className="hero-badge">
              <span className="dot"></span> #1 BEST IT COURSES INSTITUTE IN NASHIK
            </div>
            <h1 className="reveal-scale">
              Find the <span className="text-primary">Best IT Courses</span> in
              Nashik
            </h1>
            <p>
              Compare top institutes, explore career-focused courses, and get
              expert guidance with placement support.
            </p>

            <div className="hero-buttons">
              <Link  to="/courses" className="btn-primary">Explore Courses</Link>
              <Link  to="/contact" className="btn-secondary">Get Free Counseling</Link>
            </div>
          </div>
          <div className="hero-visual" style={{display: 'none'}}>
            <div className="offer-card reveal-right" style={{background: 'linear-gradient(145deg, #1a0a0a 0%, #2d0e0e 100%)', border: '1px solid rgba(229, 57, 53, 0.25)', borderRadius: '24px', boxShadow: '0 24px 64px rgba(229, 57, 53, 0.15), 0 0 0 1px rgba(229, 57, 53, 0.08)', padding: '36px', position: 'relative', overflow: 'hidden'}}>
              {/* Glow accent */}
              <div style={{position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', background: 'radial-gradient( circle, rgba(229, 57, 53, 0.18) 0%, transparent 70% )', pointerEvents: 'none'}}></div>
              {/* Header Row */}
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px'}}>
                <div style={{width: '40px', height: '40px', background: 'rgba(229, 57, 53, 0.15)', borderRadius: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                  <ion-icon name="sunny-outline" style={{fontSize: '20px', color: '#e53935'}}></ion-icon>
                </div>
                <div>
                  <div style={{fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(229, 57, 53, 0.85)', marginBottom: '3px'}}>
                    Limited Time Offer — 2026
                  </div>
                  <h2 style={{fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0', lineHeight: '1.2'}}>
                    Summer Batch Benefits
                  </h2>
                </div>
              </div>
              {/* Offer Items */}
              <div style={{display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '14px', padding: '14px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px'}}>
                  <div style={{width: '34px', height: '34px', background: 'rgba(229, 57, 53, 0.12)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                    <ion-icon name="repeat-outline" style={{fontSize: '16px', color: '#e53935'}}></ion-icon>
                  </div>
                  <div>
                    <div style={{fontSize: '14px', fontWeight: '700', color: '#fff'}}>
                      Free Repeat Courses
                    </div>
                    <div style={{fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)'}}>
                      Repeat any module anytime
                    </div>
                  </div>
                  <div style={{marginLeft: 'auto', fontSize: '18px', color: '#4caf50'}}>
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '14px', padding: '14px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px'}}>
                  <div style={{width: '34px', height: '34px', background: 'rgba(33, 150, 243, 0.12)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                    <ion-icon name="chatbubble-ellipses-outline" style={{fontSize: '16px', color: '#2196f3'}}></ion-icon>
                  </div>
                  <div>
                    <div style={{fontSize: '14px', fontWeight: '700', color: '#fff'}}>
                      2-Week Spoken English
                    </div>
                    <div style={{fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)'}}>
                      Communication + soft skills
                    </div>
                  </div>
                  <div style={{marginLeft: 'auto', fontSize: '18px', color: '#4caf50'}}>
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '14px', padding: '14px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px'}}>
                  <div style={{width: '34px', height: '34px', background: 'rgba(76, 175, 80, 0.12)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                    <ion-icon name="document-text-outline" style={{fontSize: '16px', color: '#4caf50'}}></ion-icon>
                  </div>
                  <div>
                    <div style={{fontSize: '14px', fontWeight: '700', color: '#fff'}}>
                      Resume Writing Sessions
                    </div>
                    <div style={{fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)'}}>
                      ATS-optimized resumes
                    </div>
                  </div>
                  <div style={{marginLeft: 'auto', fontSize: '18px', color: '#4caf50'}}>
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '14px', padding: '14px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px'}}>
                  <div style={{width: '34px', height: '34px', background: 'rgba(255, 193, 7, 0.12)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
                    <ion-icon name="briefcase-outline" style={{fontSize: '16px', color: '#ffc107'}}></ion-icon>
                  </div>
                  <div>
                    <div style={{fontSize: '14px', fontWeight: '700', color: '#fff'}}>
                      6-Month Guaranteed Internship
                    </div>
                    <div style={{fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)'}}>
                      Real-world industry exposure
                    </div>
                  </div>
                  <div style={{marginLeft: 'auto', fontSize: '18px', color: '#4caf50'}}>
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </div>
                </div>
              </div>
              {/* Footer CTA */}
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.07)'}}>
                <div>
                  <div style={{fontSize: '22px', fontWeight: '800', color: '#e53935'}}>
                    Flat 20% Off
                  </div>
                  <div style={{fontSize: '12px', color: 'rgba(255, 255, 255, 0.45)', marginTop: '2px'}}>
                    Limited seats available
                  </div>
                </div>
                <Link  to="/contact" className="btn-primary" style={{padding: '11px 22px', fontSize: '13px'}}>Book Free
                  Demo</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* AI Course Suggestion Section — Inline Results */}
    <section className="reveal-smooth ai-suggestion-section" id="ai-suggestion">
      <div className="container">
        <div className="suggestion-card-wrapper reveal-scale">
          <div className="section-header">
            <div className="section-label reveal-smooth">
              AI-powered suggestions based on your goals
            </div>
            <h2 className="section-title">Not Sure What to Learn?</h2>
            <p className="section-subtitle">
              Tell us your goal and our AI Career Counselor will suggest the best courses for you.
            </p>
          </div>

          {/* Input Form */}
          <div className="suggestion-form">
            <div className="input-container">
              <textarea
                id="user-goal"
                className="suggestion-textarea"
                value={goalInput}
                onChange={(e) => { setGoalInput(e.target.value); setAiError(''); }}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleGetSuggestions(); } }}
                placeholder="Example: I want to become a Data Scientist, or I want to get a software job in 6 months"
              ></textarea>
            </div>
            {aiError && <p style={{ color: 'var(--primary)', fontSize: '13px', margin: '4px 0 8px', fontWeight: 600 }}>{aiError}</p>}
            <button
              id="get-suggestions-btn"
              className="btn-primary"
              onClick={handleGetSuggestions}
              disabled={aiLoading}
              style={{ opacity: aiLoading ? 0.75 : 1 }}
            >
              <span>{aiLoading ? 'Analyzing...' : 'Get AI Suggestions'}</span>
              <ion-icon name="sparkles-outline"></ion-icon>
            </button>
          </div>

          {/* Loading Steps */}
          {aiLoading && (
            <div style={{ marginTop: '28px', textAlign: 'center', padding: '32px 20px', background: 'var(--bg-secondary)', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'inline-flex', width: '48px', height: '48px', borderRadius: '50%', border: '3px solid var(--primary)', borderTopColor: 'transparent', animation: 'spin 0.8s linear infinite', marginBottom: '16px' }}></div>
              <p style={{ fontWeight: 700, fontSize: '16px', color: 'var(--primary)', margin: '0 0 6px' }}>{AI_STEPS[aiLoadingStep]}</p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>Verifying TechnoKraft official course catalog...</p>
            </div>
          )}

          {/* Inline Results */}
          {aiResult && !aiLoading && (
            <div style={{ marginTop: '32px' }}>

              {/* Summary */}
              <div style={{ background: 'rgba(229,57,53,0.06)', border: '1px solid rgba(229,57,53,0.2)', borderRadius: '16px', padding: '16px 20px', marginBottom: '20px' }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '1.6', whiteSpace: 'pre-line' }}>{aiResult.summary}</p>
              </div>

              {/* Counselor Question (vague input) */}
              {aiResult.nextQuestion && (
                <div style={{ background: 'rgba(255,193,7,0.08)', border: '1px solid rgba(255,193,7,0.3)', borderRadius: '16px', padding: '18px 22px', marginBottom: '20px' }}>
                  <p style={{ margin: '0 0 6px', fontWeight: 800, fontSize: '14px' }}>💡 Counselor asks:</p>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', whiteSpace: 'pre-line', lineHeight: '1.8' }}>{aiResult.nextQuestion}</p>
                </div>
              )}

              {/* Recommendation Cards */}
              {aiResult.recommendations.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
                  {aiResult.recommendations.map((rec) => (
                    <div key={rec.courseId} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: '20px', padding: '24px' }}>
                      {/* Card Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                        <div>
                          <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary)', background: 'rgba(229,57,53,0.1)', padding: '3px 10px', borderRadius: '10px' }}>
                            #{rec.courseId} &bull; {rec.confidence} Confidence
                          </span>
                          <h4 style={{ margin: '8px 0 0', fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)' }}>{rec.courseName}</h4>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary)', background: 'rgba(229,57,53,0.08)', padding: '6px 14px', borderRadius: '14px', border: '1px solid rgba(229,57,53,0.2)' }}>{rec.matchScore}% Match</div>
                          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>Fees: {rec.fees}</span>
                        </div>
                      </div>
                      {/* Reason */}
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '14px' }}><strong>Why Recommended:</strong> {rec.reason}</p>
                      {/* Skills */}
                      <div style={{ marginBottom: '14px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '8px' }}>Key Skills:</span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {rec.skills.map((sk, i) => (
                            <span key={i} style={{ fontSize: '12px', fontWeight: 600, padding: '3px 10px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'var(--text-primary)' }}>✓ {sk}</span>
                          ))}
                        </div>
                      </div>
                      {/* Roles */}
                      <div style={{ marginBottom: '14px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '4px' }}>Career Roles:</span>
                        <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{rec.careerRoles.join(' • ')}</p>
                      </div>
                      {/* Learning Path */}
                      <div style={{ background: 'var(--bg-card)', padding: '14px 18px', borderRadius: '12px', border: '1px solid var(--border-light)', marginBottom: '14px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '8px' }}>Learning Path:</span>
                        <ol style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                          {rec.learningPath.map((step, i) => <li key={i}>{step}</li>)}
                        </ol>
                      </div>
                      <button
                        className="btn-secondary"
                        onClick={() => { setSelectedCourse(rec.courseName); setShowLeadForm(true); }}
                        style={{ width: '100%', borderRadius: '12px', fontSize: '13px', fontWeight: 700, padding: '10px' }}
                      >
                        Get Free 5-Month Personalized Roadmap &amp; Consultation
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Lead Form */}
              {showLeadForm && (
                <div style={{ background: 'linear-gradient(135deg,rgba(229,57,53,0.07),rgba(200,164,94,0.07))', border: '1px solid var(--primary)', borderRadius: '20px', padding: '24px', marginBottom: '24px' }}>
                  <h4 style={{ margin: '0 0 6px', fontSize: '17px', fontWeight: 800 }}>Get Personalized Guidance for <em>{selectedCourse}</em></h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>Enter your details to receive a custom 5-month learning roadmap from a TechnoKraft mentor.</p>
                  <form onSubmit={handleLeadSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: '10px' }}>
                    <input type="text" required placeholder="Full Name *" value={leadInfo.name} onChange={(e) => setLeadInfo({ ...leadInfo, name: e.target.value })} style={{ padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-light)', fontSize: '13px', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }} />
                    <input type="tel" required placeholder="Mobile Number *" value={leadInfo.phone} onChange={(e) => setLeadInfo({ ...leadInfo, phone: e.target.value })} style={{ padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-light)', fontSize: '13px', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }} />
                    <input type="email" placeholder="Email (optional)" value={leadInfo.email} onChange={(e) => setLeadInfo({ ...leadInfo, email: e.target.value })} style={{ padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-light)', fontSize: '13px', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }} />
                    <button type="submit" className="btn-primary" style={{ borderRadius: '10px', fontWeight: 700, fontSize: '13px', padding: '10px' }}>Generate Roadmap</button>
                  </form>
                </div>
              )}

              {/* Roadmap Result */}
              {roadmapResult && (
                <div style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(76,175,80,0.3)', borderRadius: '20px', padding: '24px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <ion-icon name="checkmark-circle" style={{ fontSize: '24px', color: '#4caf50' }}></ion-icon>
                    <h4 style={{ margin: 0, fontSize: '17px', fontWeight: 800 }}>Roadmap Ready! ({roadmapResult.leadId})</h4>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>{roadmapResult.message} Our team will contact you shortly.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {roadmapResult.roadmap.map((item, i) => (
                      <div key={i} style={{ padding: '12px 16px', background: 'var(--bg-card)', borderRadius: '10px', borderLeft: '4px solid var(--primary)' }}>
                        <strong style={{ fontSize: '13px', color: 'var(--primary)' }}>{item.month}: {item.title}</strong>
                        <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--text-secondary)' }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reset button */}
              <div style={{ textAlign: 'center', marginTop: '8px' }}>
                <button className="btn-secondary" onClick={() => { setAiResult(null); setGoalInput(''); setShowLeadForm(false); setRoadmapResult(null); }} style={{ borderRadius: '12px', fontSize: '13px', padding: '9px 22px' }}>
                  ↩ Start New Search
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
    {/* Wave Divider */}
    <div className="wave-divider">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0,30 C300,60 600,0 900,30 C1050,45 1150,20 1200,30 L1200,60 L0,60 Z" fill="var(--bg-secondary)" />
      </svg>
    </div>

    {/* Courses Preview Section */}
    <section className="reveal-smooth courses-preview-section bg-light" id="courses">
      <div className="container pb-4">
        <div className="section-header">
          <div className="section-label reveal-smooth">Top Rated Programs</div>
          <h2 className="section-title">
            Popular <span className="text-primary">IT Courses</span>
          </h2>
          <p className="section-subtitle">
            Start your tech journey with our most in-demand vocational training
            programs.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card reveal-smooth">
            <div className="service-icon red">
              <ion-icon name="code-slash-outline"></ion-icon>
            </div>
            <h3>Java Full Stack</h3>
            <p>
              Master end-to-end development with Java, Spring Boot, and React.
              100% placement support.
            </p>
            <div className="course-meta-small">
              <span><ion-icon name="time-outline"></ion-icon> 6 Months</span>
              <span><ion-icon name="cash-outline"></ion-icon> &#8377;40,000</span>
              <span><ion-icon name="star"></ion-icon> 4.8</span>
            </div>
          </div>
          <div className="service-card reveal-smooth">
            <div className="service-icon blue">
              <ion-icon name="analytics-outline"></ion-icon>
            </div>
            <h3>Data Science & AI</h3>
            <p>
              Unlock insights with Python, ML, and Power BI. Learn from industry
              experts.
            </p>
            <div className="course-meta-small">
              <span><ion-icon name="time-outline"></ion-icon> 6 Months</span>
              <span><ion-icon name="cash-outline"></ion-icon> &#8377;45,000</span>
              <span><ion-icon name="star"></ion-icon> 4.9</span>
            </div>
          </div>
          <div className="service-card reveal-smooth">
            <div className="service-icon green">
              <ion-icon name="globe-outline"></ion-icon>
            </div>
            <h3>Web Development</h3>
            <p>
              Build stunning responsive websites using modern frameworks like
              React and Node.js.
            </p>
            <div className="course-meta-small">
              <span><ion-icon name="time-outline"></ion-icon> 4 Months</span>
              <span><ion-icon name="cash-outline"></ion-icon> &#8377;30,000</span>
              <span><ion-icon name="star"></ion-icon> 4.7</span>
            </div>
          </div>
        </div>

        <div className="section-cta">
          <Link  to="/courses" className="btn-secondary">Explore All Courses
            <ion-icon name="arrow-forward-outline"></ion-icon></Link>
        </div>
      </div>
    </section>

    {/* TechnoKraft Infrastructure Section */}
    <section className="reveal-smooth institutes-section" id="institutes">
      <div className="container py-4">
        <div className="section-header">
          <div className="section-label reveal-smooth">State-Of-The-Art Campus</div>
          <h2 className="section-title">
            TechnoKraft <span className="text-primary">Infrastructure</span>
          </h2>
          <p className="section-subtitle">
            Explore our modern IT training facility located on College Road, Nashik equipped with high-tech AC labs and
            dedicated career guidance suites.
          </p>
        </div>

        <div className="showcase-grid">
          <div className="showcase-card reveal-smooth">
            <img src="images/institute_nashik_building_1774349251126.jpg"
              alt="TechnoKraft Training Center College Road Nashik" loading="lazy" decoding="async" />
            <div className="showcase-overlay">
              <h4>TechnoKraft Training Center</h4>
              <div className="rating-box">
                <ion-icon name="star"></ion-icon> 4.9 (500+ Student Reviews)
              </div>
              <p>
                1st Floor, Kanchwala Avenue, Above Viju’s Dabeli, College Road, Nashik. Prime learning environment.
              </p>
            </div>
          </div>
          <div className="showcase-card reveal-smooth">
            <img src="images/campus_life.jpg" alt="TechnoKraft Computer Labs Nashik" />
            <div className="showcase-overlay">
              <h4>High-Tech Computer Labs</h4>
              <div className="rating-box">
                <ion-icon name="hardware-chip-outline"></ion-icon> Hands-On Practice
              </div>
              <p>High-performance workstations equipped with modern Full Stack, AI, SAP, and Data Science tools.</p>
            </div>
          </div>
          <div className="showcase-card reveal-smooth">
            <img src="images/placement.jpg" alt="TechnoKraft Placement & Career Cell Nashik" />
            <div className="showcase-overlay">
              <h4>Interview & Placement Cell</h4>
              <div className="rating-box">
                <ion-icon name="trophy-outline"></ion-icon> 100% Placement Guidance
              </div>
              <p>
                Dedicated suites for 1-on-1 mock interviews, resume workshops, and corporate hiring drives.
              </p>
            </div>
          </div>
        </div>

        <div className="section-cta">
          <Link  to="/about" className="btn-secondary">Explore Campus Details
            <ion-icon name="arrow-forward-outline"></ion-icon></Link>
        </div>
      </div>
    </section>

    {/* Placed Students Section */}
    <section className="reveal-smooth placements-section bg-light">
      <div className="container py-4">
        <div className="section-header">
          <div className="section-label reveal-smooth">Alumni Success</div>
          <h2 className="section-title">
            Our Successful <span className="text-primary">Placements</span>
          </h2>
          <p className="section-subtitle">
            Join thousands of students who have launched careers at top MNCs.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card reveal-smooth">
            <div className="student-avatar-box">
              <img src="images/kalyani_bachhav.jpg" alt="Kalyani Bachhav" />
            </div>
            <h3>Kalyani Bachhav</h3>
            <p className="company-label">
              Matrix Smart Technologies Pvt. Ltd. | Jr. Technical Executive
            </p>
            <p>
              "I got placed through TechnoKraft Training & Solutions, and I’m
              really thankful for their support and guidance. It is one of the
              best teaching institutes in Nashik for networking, cybersecurity,
              and IT training."
            </p>
          </div>
          <div className="feature-card reveal-smooth">
            <div className="student-avatar-box">
              <img src="images/chetana_sonawane.jpg" alt="Chetana Sonawane" />
            </div>
            <h3>Chetana Sonawane</h3>
            <p className="company-label">Matrix Smart Technologies Pvt. Ltd. | Jr. Technical Executive</p>
            <p>
              "Technokraft has been very helpful in my career journey.
              The team guided me throughout the job placement process.
              I appreciate their efforts in helping candidates get placed.
              Overall, I had a positive experience with Technokraft and would recommend it to job seekers."
            </p>
          </div>
          <div className="feature-card reveal-smooth">
            <div className="student-avatar-box">
              <img src="images/tejas_thakur.jpg" alt="Tejas Thakur" />
            </div>
            <h3>Tejas Thakur</h3>
            <p className="company-label">Cloud Armour IT Consultancy Pvt. Ltd. | Jr. Network Engineer</p>
            <p>
              "I got placed through TechnoKraft Training & Solutions, and I'm really thankful for their constant
              support.
              If you're looking for quality networking or IT training in Nashik, this is the place to be."
            </p>
          </div>
        </div>

        <div className="section-cta">
          <Link  to="/placements" className="btn-secondary">View All Placements
            <ion-icon name="arrow-forward-outline"></ion-icon></Link>
        </div>
      </div>
    </section>

    {/* Certified Students Section */}
    <section className="reveal-smooth certifications-section">
      <div className="container py-4">
        <div className="section-header">
          <div className="section-label reveal-smooth">Industry Validated</div>
          <h2 className="section-title">
            Certified <span className="text-primary">Students</span>
          </h2>
          <p className="section-subtitle">
            Our certifications are recognized by global tech leaders.
          </p>
        </div>

        <div className="services-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
          <div className="cert-card reveal-smooth">
            <img src="images/data_analytics_cert.jpg" alt="Data Analytics Certification" />
            <div className="cert-content">
              <h4>Data Analytics Certification</h4>
            </div>
          </div>
          <div className="cert-card reveal-smooth">
            <img src="images/business_analytics_cert.jpg" alt="Business Analytics Certification" />
            <div className="cert-content">
              <h4>Business Analytics Certification</h4>
            </div>
          </div>
          <div className="cert-card reveal-smooth">
            <img src="images/redhat_cert.jpg" alt="Red Hat Certification" />
            <div className="cert-content">
              <h4>Red Hat Certification</h4>
            </div>
          </div>
        </div>

        <div className="section-cta">
          <a href="#certifications" className="btn-secondary">View Certifications
            <ion-icon name="arrow-forward-outline"></ion-icon></a>
        </div>
      </div>
    </section>

    {/* Blog Preview Section */}
    <section className="reveal-smooth blog-section bg-light" id="blog">
      <div className="container py-4">
        <div className="section-header">
          <div className="section-label reveal-smooth">Knowledge Hub</div>
          <h2 className="section-title">
            Latest <span className="text-primary">Articles & Career Guides</span>
          </h2>
          <p className="section-subtitle">
            Stay updated with the latest trends and career advice in the IT industry.
          </p>
        </div>

        <div className="blog-grid">
          {/* Blog 1 */}
          <div className="blog-card reveal-smooth" onClick={() => {window.location='blogs.html';}}>
            <div className="blog-thumb">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
                alt="TechnoKraft IT Training Nashik" loading="lazy" />
              <div className="thumb-overlay"></div>
              <span className="blog-category">Full Stack</span>
            </div>
            <div className="blog-body">
              <div className="blog-meta">
                <span><ion-icon name="calendar-outline"></ion-icon> Mar 15, 2026</span>
                <span><ion-icon name="time-outline"></ion-icon> 8 min read</span>
              </div>
              <h3 className="blog-title">TechnoKraft Training & Solution: Building Job-Ready IT Skills in Nashik</h3>
              <p className="blog-excerpt">TechnoKraft helps students build practical IT skills through expert training,
                hands-on practice, and career-focused learning.</p>
              <div className="blog-footer">
                <span className="blog-read-btn">Read Full Article <ion-icon name="arrow-forward-outline"></ion-icon></span>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="blog-card reveal-smooth" onClick={() => {window.location='blogs.html';}}>
            <div className="blog-thumb">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                alt="Full Stack Development Course" loading="lazy" />
              <div className="thumb-overlay"></div>
              <span className="blog-category">Full Stack</span>
            </div>
            <div className="blog-body">
              <div className="blog-meta">
                <span><ion-icon name="calendar-outline"></ion-icon> Mar 10, 2026</span>
                <span><ion-icon name="time-outline"></ion-icon> 12 min read</span>
              </div>
              <h3 className="blog-title">Full Stack Development Course: A Career Path for Freshers</h3>
              <p className="blog-excerpt">Learn how Full Stack Development helps freshers understand frontend, backend,
                databases, and project development.</p>
              <div className="blog-footer">
                <span className="blog-read-btn">Read Full Article <ion-icon name="arrow-forward-outline"></ion-icon></span>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="blog-card reveal-smooth" onClick={() => {window.location='blogs.html';}}>
            <div className="blog-thumb">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                alt="Data Science vs Data Analytics" loading="lazy" />
              <div className="thumb-overlay"></div>
              <span className="blog-category">Data Courses</span>
            </div>
            <div className="blog-body">
              <div className="blog-meta">
                <span><ion-icon name="calendar-outline"></ion-icon> Mar 05, 2026</span>
                <span><ion-icon name="time-outline"></ion-icon> 6 min read</span>
              </div>
              <h3 className="blog-title">Data Science vs Data Analytics: Which Course Should You Choose?</h3>
              <p className="blog-excerpt">Understand the difference between Data Science and Data Analytics, including
                tools, career scope, and learning paths.</p>
              <div className="blog-footer">
                <span className="blog-read-btn">Read Full Article <ion-icon name="arrow-forward-outline"></ion-icon></span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-cta">
          <Link  to="/blogs" className="btn-secondary">Read More Articles
            <ion-icon name="arrow-forward-outline"></ion-icon></Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="reveal-smooth why-us-section" id="features">
      <div className="container py-4">
        <div className="section-header">
          <div className="section-label reveal-smooth">The TechnoKraft Edge</div>
          <h2 className="section-title">
            Why <span className="text-primary">Choose Us</span>
          </h2>
          <p className="section-subtitle">
            We don't just teach technology; we build careers through expert
            mentorship.
          </p>
        </div>

        <div className="features-grid" style={{gridTemplateColumns: 'repeat(4, 1fr)'}}>
          <div className="feature-card reveal-smooth">
            <div className="feature-icon">
              <ion-icon name="shield-checkmark-outline"></ion-icon>
            </div>
            <h3>Verified Institutes</h3>
            <p>All partners are ISO certified and industry-verified.</p>
          </div>
          <div className="feature-card reveal-smooth">
            <div className="feature-icon">
              <ion-icon name="briefcase-outline"></ion-icon>
            </div>
            <h3>Placement Support</h3>
            <p>100% assistance with guaranteed mock interviews.</p>
          </div>
          <div className="feature-card reveal-smooth">
            <div className="feature-icon">
              <ion-icon name="people-outline"></ion-icon>
            </div>
            <h3>Expert Guidance</h3>
            <p>Learn from mentors with 10+ years of industry experience.</p>
          </div>
          <div className="feature-card reveal-smooth">
            <div className="feature-icon">
              <ion-icon name="stats-chart-outline"></ion-icon>
            </div>
            <h3>Easy Comparison</h3>
            <p>Compare courses and fees to find your perfect match.</p>
          </div>
        </div>

        <div className="section-cta">
          <Link  to="/about" className="btn-secondary">Learn More <ion-icon name="arrow-forward-outline"></ion-icon></Link>
        </div>
      </div>
    </section>

    {/* FAQ Section (SEO & Rich Snippets) */}
    <section className="reveal-smooth faq-section" id="faq">
      <div className="container py-4">
        <div className="section-header">
          <div className="section-label reveal-smooth">Got Questions?</div>
          <h2 className="section-title">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find quick answers to common questions about our IT training programs, placement support, and campus
            location in Nashik.
          </p>
        </div>

        <div className="faq-grid">
          <div className="faq-card reveal-smooth active">
            <button className="faq-header-btn">
              <span>What are the most popular IT courses offered at TechnoKraft Nashik?</span>
              <div className="faq-icon-box">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
            </button>
            <div className="faq-body">
              <p>
                TechnoKraft offers industry-recognized, career-oriented courses including Java Full Stack Development,
                Data Science & AI, Python Programming, SAP Training, Power BI, Software Testing, and Cloud/DevOps
                certifications.
              </p>
            </div>
          </div>

          <div className="faq-card reveal-smooth">
            <button className="faq-header-btn">
              <span>Does TechnoKraft provide 100% job placement support?</span>
              <div className="faq-icon-box">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
            </button>
            <div className="faq-body">
              <p>
                Yes! TechnoKraft provides complete 100% placement support, featuring 1-on-1 mock interviews, resume
                preparation, soft skills coaching, and direct interview opportunities with 250+ partner companies.
              </p>
            </div>
          </div>

          <div className="faq-card reveal-smooth">
            <button className="faq-header-btn">
              <span>Where is TechnoKraft located in Nashik?</span>
              <div className="faq-icon-box">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
            </button>
            <div className="faq-body">
              <p>
                Our Nashik campus is located at 1st Floor, Kanchwala Avenue, Above Viju’s Dabeli, Thatte Nagar Marg,
                College Road, Nashik, Maharashtra 422005.
              </p>
            </div>
          </div>

          <div className="faq-card reveal-smooth">
            <button className="faq-header-btn">
              <span>Can non-IT or non-CS graduates join Full Stack and Data Science courses?</span>
              <div className="faq-icon-box">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
            </button>
            <div className="faq-body">
              <p>
                Absolutely! All TechnoKraft training modules are designed from basic fundamentals to advanced industry
                projects, making them perfect for freshers, non-IT graduates, and working professionals wanting to
                switch careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="reveal-smooth contact-section" id="contact" style={{background: 'var(--bg-secondary)'}}>
      <div className="container">
        <div className="section-header">
          <div className="section-label reveal-smooth">Get In Touch</div>
          <h2 className="section-title">
            Plan Your <span className="text-primary">Future With Us</span>
          </h2>
          <p className="section-subtitle">
            Fill out the form below and our career experts will reach out to you within 24 hours.
          </p>
        </div>
        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-info-card">
              <div className="info-icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <h3>Nashik</h3>
              <p>
                1st Floor, Kanchwala Avenue, Above Viju’s Dabeli, Thatte Nagar
                Marg, College Road, Nashik, Maharashtra 422005
              </p>
            </div>
            <div className="contact-info-card">
              <div className="info-icon">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <h3>Call Support</h3>
              <p>+91-8645628278 (Primary)<br />+91-8446203167 (Support)</p>
            </div>
            <div className="contact-info-card">
              <div className="info-icon">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <h3>Email Admissions</h3>
              <p>info@tts.net.in</p>
            </div>

          </div>
          <div className="contact-form-card reveal reveal-delay-2">
            <form id="contactForm">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter your first name" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter your last name" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label>Your Query</label>
                <textarea placeholder="Enter your query or message..." required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{width: '100%', justifyContent: 'center'}}>
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA Section */}
    <section className="reveal-smooth final-cta bg-primary">
      <div className="container py-4">
        <div className="cta-content text-center reveal-scale" style={{color: 'white', padding: '50px 0'}}>
          <h2 style={{color: 'white', fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '20px'}}>
            Still confused about your career?
          </h2>
          <p style={{color: 'rgba(255, 255, 255, 0.9)', fontSize: '18px', marginBottom: '40px'}}>
            Get expert guidance today and start your journey towards tech
            excellence.
          </p>
          <div className="hero-buttons" style={{justifyContent: 'center'}}>
            <Link  to="/contact" className="btn-white">Get Counseling</Link>
            <a href="tel:+919404285223" className="btn-outline-white">Call Now</a>
          </div>
        </div>
      </div>
    </section>

  
    </main>
  );
}
