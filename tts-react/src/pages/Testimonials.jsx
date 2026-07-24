import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function Testimonials() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "Testimonials | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Real Success Stories</div>
            <h1 className="reveal-scale">Student <span className="shimmer-text">Testimonials</span></h1>
            <p className="reveal-smooth">Over 5,000 students have transformed their careers with TechnoKraft since 2012.</p>
        </div>
    </section>

    <section className="services-section" style={{paddingTop: '60px'}}>
        <div className="container">
            <div className="rating-bar reveal-smooth">
                <div className="big-rating">
                    <div className="score">4.9</div>
                    <div className="star-row">★★★★★</div>
                    <div className="based">Based on 1,200+ Reviews</div>
                </div>
                <div className="rating-bars">
                    <div className="rbar-row">5★ <div className="rbar-track">
                            <div className="rbar-fill" style={{width: '92%'}}></div>
                        </div> 92%</div>
                    <div className="rbar-row">4★ <div className="rbar-track">
                            <div className="rbar-fill" style={{width: '6%'}}></div>
                        </div> 6%</div>
                    <div className="rbar-row">3★ <div className="rbar-track">
                            <div className="rbar-fill" style={{width: '2%'}}></div>
                        </div> 2%</div>
                </div>
            </div>

            <div className="testimonial-grid">
                <div className="testimonial-card reveal-smooth" data-name="Kalyani Bachhav" data-role="Jr. Technical Executive @ Matrix Smart Technologies Pvt. Ltd."
                    data-init="KB"
                    data-text="I got placed through TechnoKraft Training & Solutions, and I’m really thankful for their support and guidance. 
                    It is one of the best teaching institutes in Nashik for networking, cybersecurity, and IT training.">
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">"I got placed through TechnoKraft Training & Solutions, and I’m really thankful for their support and guidance. 
                        It is one of the best teaching institutes in Nashik for networking, cybersecurity, and IT training."</p>
                    <div className="testimonial-author">
                        <div className="author-avatar" style={{background: 'linear-gradient(135deg, #1a0808, #4a1414)'}}>KB
                        </div>
                        <div>
                            <div className="author-name">Kalyani Bachhav</div>
                            <div className="author-role">Jr. Technical Executive @ Matrix Smart Technologies Pvt. Ltd.</div><span className="testi-read-btn">Read Full
                                Story</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card reveal-smooth" data-name="Chetana Sonawane" data-role="Jr. Technical Executive @ Matrix Smart Technologies Pvt. Ltd."
                    data-init="CS"
                    data-text="Technokraft has been very helpful in my career journey. 
                    The team guided me throughout the job placement process. 
                    I appreciate their efforts in helping candidates get placed.">
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">"Technokraft has been very helpful in my career journey. 
                        The team guided me throughout the job placement process. 
                        I appreciate their efforts in helping candidates get placed."</p>
                    <div className="testimonial-author">
                        <div className="author-avatar" style={{background: 'linear-gradient(135deg, #080e1a, #1a237e)'}}>CS
                        </div>
                        <div>
                            <div className="author-name">Chetana Sonawane</div>
                            <div className="author-role">Jr. Technical Executive @ Matrix Smart Technologies Pvt. Ltd.</div><span className="testi-read-btn">Read Full
                                Story</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card reveal-smooth" data-name="Tejas Thakur" data-role="Jr. Network Engineer @ Cloud Armour IT Consultancy Pvt. Ltd."
                    data-init="TT"
                    data-text="I got placed through TechnoKraft Training & Solutions, and I'm really thankful for their constant support. If you're looking for quality networking or IT training in Nashik, this is the place to be.">
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">"I got placed through TechnoKraft Training & Solutions, and I'm really thankful for their constant support. 
                        If you're looking for quality networking or IT training in Nashik, this is the place to be."</p>
                    <div className="testimonial-author">
                        <div className="author-avatar" style={{background: 'linear-gradient(135deg, #081a0a, #1b5e20)'}}>TT
                        </div>
                        <div>
                            <div className="author-name">Tejas Thakur</div>
                            <div className="author-role">Jr. Network Engineer @ Cloud Armour IT Consultancy Pvt. Ltd.</div><span className="testi-read-btn">Read Full
                                Story</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Reviews Banner */}
            <div className="google-reviews-banner reveal-smooth">
                <div className="gr-left">
                    <div className="gr-icon"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4" />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853" />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05" />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335" />
                        </svg></div>
                    <div className="gr-text">
                        <h4>Verified Reviews</h4>
                        <p>Check out our 1,200+ 5-star reviews on Google.</p>
                    </div>
                </div>
                <a href="https://www.google.com/search?q=technokraft+nashik+google+reviews" target="_blank"
                    className="btn-google-reviews">View Google Reviews</a>
            </div>
        </div>
    </section>

    {/* Modal */}
    <div className="testi-modal-backdrop" id="testiModal">
        <div className="testi-modal">
            <div className="tm-header">
                <div className="tm-avatar" id="tmAvatar">RK</div>
                <div className="tm-info">
                    <h3 id="tmName">Student Name</h3>
                    <p id="tmRole">Role</p>
                </div>
                <span className="tm-close" id="closeTestiModal"><ion-icon name="close-outline"></ion-icon></span>
            </div>
            <div className="tm-body">
                <div className="tm-stars">★★★★★</div>
                <div className="tm-text" id="tmText">Review detail...</div>
                <a href="https://www.google.com/search?q=technokraft+nashik+google+reviews" target="_blank"
                    className="btn-tm-google">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4" />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853" />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05" />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335" />
                    </svg>
                    View on Google Reviews
                </a>
            </div>
        </div>
    </div>

    {/* Floating Button */}
    <div className="float-reviews">
        <a href="https://www.google.com/search?q=technokraft+nashik+google+reviews" target="_blank">View Google
            Reviews</a>
    </div>

    <section className="cta-section">
        <div className="container">
            <div className="cta-banner reveal">
                <h2>Ready to Start Your <span className="gradient-text">Success Story?</span></h2>
                <p>Join TechnoKraft Nashik and get 100% placement support in top MNCs.</p>
                <Link  to="/contact" className="btn-primary">Enroll Now</Link>
            </div>
        </div>
    </section>

    
    </main>
  );
}
