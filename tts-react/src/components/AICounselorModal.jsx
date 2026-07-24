import React, { useState } from 'react';
import { getAiRecommendations, saveLeadAndGenerateRoadmap } from '../services/aiRecommendationService';

export default function AICounselorModal({ isOpen, onClose, initialGoal = '' }) {
  const [goal, setGoal] = useState(initialGoal);
  const [experience, setExperience] = useState('Beginner');
  const [education, setEducation] = useState('Graduate');
  const [budget, setBudget] = useState('');
  const [duration, setDuration] = useState('6 Months');

  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState(null);

  // Lead Collection State
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedCourseForLead, setSelectedCourseForLead] = useState('');
  const [leadInfo, setLeadInfo] = useState({ name: '', phone: '', email: '' });
  const [roadmapResult, setRoadmapResult] = useState(null);

  const loadingMessages = [
    "🤖 Understanding your goal...",
    "🔍 Comparing courses against 115+ TechnoKraft modules...",
    "📈 Finding best matches & career paths..."
  ];

  const handleGetSuggestions = async (e) => {
    if (e) e.preventDefault();
    if (!goal.trim()) return;

    setLoading(true);
    setLoadingStep(0);
    setResult(null);
    setRoadmapResult(null);
    setShowLeadForm(false);

    // Step 1 animation
    setTimeout(() => setLoadingStep(1), 500);
    // Step 2 animation
    setTimeout(() => setLoadingStep(2), 1000);

    try {
      const res = await getAiRecommendations({
        goal,
        experience,
        education,
        budget: budget ? parseInt(budget, 10) : null,
        duration
      });
      setResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadInfo.name || !leadInfo.phone) return;

    setLoading(true);
    try {
      const res = await saveLeadAndGenerateRoadmap({
        ...leadInfo,
        goal,
        recommendedCourse: selectedCourseForLead || (result?.recommendations[0]?.courseName || 'IT Specialization')
      });
      setRoadmapResult(res);
      setShowLeadForm(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="photo-modal-backdrop open" 
      style={{ opacity: 1, pointerEvents: 'all', zIndex: 99999 }}
      onClick={(e) => {
        if (e.target.className.includes('photo-modal-backdrop')) onClose();
      }}
    >
      <div 
        className="photo-modal" 
        style={{ 
          maxWidth: '900px', 
          width: '94vw', 
          maxHeight: '90vh', 
          overflowY: 'auto',
          borderRadius: '24px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-light)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5)'
        }}
      >
        {/* Header */}
        <div className="photo-modal-header" style={{ borderBottom: '1px solid var(--border-light)', padding: '20px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px', height: '42px', borderRadius: '12px',
              background: 'rgba(229, 57, 53, 0.12)', color: 'var(--primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px'
            }}>
              <ion-icon name="hardware-chip-outline"></ion-icon>
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 800 }}>AI Career Counselor</h3>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>
                Personalized course recommendations powered by TechnoKraft catalog
              </p>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '28px' }}>
          {/* Input Form */}
          <form onSubmit={handleGetSuggestions} style={{ marginBottom: '24px' }}>
            <label style={{ fontWeight: 700, fontSize: '14px', marginBottom: '8px', display: 'block' }}>
              What is your career goal or interest?
            </label>
            <textarea
              className="form-control"
              rows="3"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="e.g. 'I want to become an AI Engineer', 'I want a web development job in 6 months', or 'I like backend programming'"
              style={{
                width: '100%',
                borderRadius: '16px',
                padding: '14px 18px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                color: 'var(--text-primary)',
                fontSize: '14px',
                marginBottom: '16px'
              }}
            />

            {/* Filters Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginBottom: '20px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                  Experience
                </label>
                <select
                  className="form-select"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  style={{ borderRadius: '12px', padding: '8px 12px', fontSize: '13px' }}
                >
                  <option value="Beginner">Beginner (Fresher)</option>
                  <option value="Intermediate">Intermediate (1-2 yrs)</option>
                  <option value="Experienced">Experienced Working Professional</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                  Duration
                </label>
                <select
                  className="form-select"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  style={{ borderRadius: '12px', padding: '8px 12px', fontSize: '13px' }}
                >
                  <option value="1 Month">1 Month Crash</option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months Comprehensive</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                  Max Budget (₹)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 25000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  style={{
                    borderRadius: '12px', padding: '8px 12px', fontSize: '13px',
                    width: '100%', border: '1px solid var(--border-light)', background: 'var(--bg-secondary)', color: 'var(--text-primary)'
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !goal.trim()}
              className="btn-primary"
              style={{
                width: '100%', borderRadius: '16px', padding: '14px',
                fontWeight: 700, fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
              }}
            >
              <ion-icon name="sparkles-outline"></ion-icon>
              {loading ? "Analyzing..." : "Get AI Suggestions"}
            </button>
          </form>

          {/* Loading Animation Steps */}
          {loading && (
            <div style={{
              textAlign: 'center', padding: '40px 20px', background: 'var(--bg-secondary)',
              borderRadius: '20px', border: '1px solid var(--border-light)', marginBottom: '24px'
            }}>
              <div className="spinner-border text-primary" role="status" style={{ marginBottom: '16px' }}></div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary)' }}>
                {loadingMessages[loadingStep]}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
                Comparing career paths & verifying TechnoKraft official catalog...
              </p>
            </div>
          )}

          {/* Results Display */}
          {result && !loading && (
            <div>
              {/* Summary message */}
              <div style={{
                background: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.2)',
                borderRadius: '16px', padding: '16px 20px', marginBottom: '24px'
              }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '1.6' }}>
                  {result.summary}
                </p>
              </div>

              {/* Follow-up question if goal was vague */}
              {result.nextQuestion && (
                <div style={{
                  background: 'rgba(200, 164, 94, 0.1)', border: '1px solid rgba(200, 164, 94, 0.3)',
                  borderRadius: '16px', padding: '18px 22px', marginBottom: '24px'
                }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--gold-dark)', marginBottom: '8px' }}>
                    💡 Counselor Clarification
                  </h4>
                  <p style={{ whiteSpace: 'pre-line', margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
                    {result.nextQuestion}
                  </p>
                </div>
              )}

              {/* Recommendation Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                {result.recommendations.map((rec) => (
                  <div
                    key={rec.courseId}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '20px',
                      padding: '24px',
                      position: 'relative',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    {/* Badge header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                      <div>
                        <span style={{
                          fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px',
                          color: 'var(--primary)', background: 'rgba(229,57,53,0.1)', padding: '4px 12px', borderRadius: '12px'
                        }}>
                          ID #{rec.courseId} • {rec.confidence} Confidence
                        </span>
                        <h4 style={{ fontSize: '20px', fontWeight: 800, margin: '8px 0 4px', color: 'var(--text-primary)' }}>
                          {rec.courseName}
                        </h4>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{
                          fontSize: '18px', fontWeight: 800, color: 'var(--primary)',
                          background: 'rgba(229,57,53,0.08)', padding: '6px 14px', borderRadius: '14px', border: '1px solid rgba(229,57,53,0.2)'
                        }}>
                          {rec.matchScore}% Match
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
                          Fees: {rec.fees}
                        </span>
                      </div>
                    </div>

                    {/* Reason */}
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                      <strong>Why Recommended:</strong> {rec.reason}
                    </p>

                    {/* Skills pills */}
                    <div style={{ marginBottom: '16px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                        KEY SKILLS LEARNED:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {rec.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            style={{
                              fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '10px',
                              background: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'var(--text-primary)'
                            }}
                          >
                            ✓ {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Career Roles */}
                    <div style={{ marginBottom: '16px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                        TARGET CAREER ROLES:
                      </span>
                      <p style={{ fontSize: '13px', margin: 0, fontWeight: 600, color: 'var(--text-primary)' }}>
                        {rec.careerRoles.join(' • ')}
                      </p>
                    </div>

                    {/* Learning Path */}
                    <div style={{ background: 'var(--bg-card)', padding: '14px 18px', borderRadius: '14px', border: '1px solid var(--border-light)' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                        LEARNING PATH ROADMAP:
                      </span>
                      <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                        {rec.learningPath.map((step, stIdx) => (
                          <li key={stIdx}>{step}</li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedCourseForLead(rec.courseName);
                        setShowLeadForm(true);
                      }}
                      className="btn-secondary"
                      style={{ marginTop: '16px', width: '100%', borderRadius: '12px', fontSize: '13px', fontWeight: 700, padding: '10px' }}
                    >
                      Get Customized 5-Month Learning Roadmap & Free Consultation
                    </button>
                  </div>
                ))}
              </div>

              {/* Lead Capture Banner / Form */}
              {showLeadForm && (
                <div style={{
                  background: 'linear-gradient(135deg, rgba(229,57,53,0.08) 0%, rgba(200,164,94,0.08) 100%)',
                  border: '1px solid var(--primary)', borderRadius: '20px', padding: '24px', marginBottom: '24px'
                }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px' }}>
                    Need Personalized Career Guidance for {selectedCourseForLead}?
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                    Fill out your contact info below to receive a customized 5-month learning roadmap and talk to a senior TechnoKraft mentor.
                  </p>

                  <form onSubmit={handleLeadSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={leadInfo.name}
                      onChange={(e) => setLeadInfo({ ...leadInfo, name: e.target.value })}
                      style={{ padding: '10px 14px', borderRadius: '12px', border: '1px solid var(--border-light)', fontSize: '13px' }}
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Phone Number *"
                      required
                      value={leadInfo.phone}
                      onChange={(e) => setLeadInfo({ ...leadInfo, phone: e.target.value })}
                      style={{ padding: '10px 14px', borderRadius: '12px', border: '1px solid var(--border-light)', fontSize: '13px' }}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={leadInfo.email}
                      onChange={(e) => setLeadInfo({ ...leadInfo, email: e.target.value })}
                      style={{ padding: '10px 14px', borderRadius: '12px', border: '1px solid var(--border-light)', fontSize: '13px' }}
                    />
                    <button type="submit" className="btn-primary" style={{ borderRadius: '12px', fontWeight: 700, fontSize: '13px' }}>
                      Generate My Roadmap
                    </button>
                  </form>
                </div>
              )}

              {/* Generated Roadmap Display */}
              {roadmapResult && (
                <div style={{
                  background: 'var(--bg-card)', border: '1px solid rgba(76, 175, 80, 0.3)',
                  borderRadius: '20px', padding: '24px', marginBottom: '24px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <ion-icon name="checkmark-circle" style={{ fontSize: '24px', color: '#4caf50' }}></ion-icon>
                    <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 800 }}>
                      Roadmap Generated! (ID: {roadmapResult.leadId})
                    </h4>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    {roadmapResult.message} Our team will reach out to you shorty.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {roadmapResult.roadmap.map((item, idx) => (
                      <div key={idx} style={{
                        padding: '12px 16px', background: 'var(--bg-secondary)', borderRadius: '12px', borderLeft: '4px solid var(--primary)'
                      }}>
                        <strong style={{ fontSize: '13px', color: 'var(--primary)' }}>{item.month}: {item.title}</strong>
                        <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--text-secondary)' }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
