import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function MarketResearch() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "MarketResearch | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="reveal-smooth page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Our Services</div>
            <h1 className="reveal-scale">Market <span className="gradient-text">Research</span></h1>
            <p>Data-driven insights and strategic analysis to fuel informed decision-making and competitive positioning.
            </p>
        </div>
    </section>

    <section className="reveal-smooth about-section" style={{paddingTop: '0'}}>
        <div className="container">
            <div className="about-grid">
                <div className="about-content reveal">
                    <h2>Insights That Drive <span className="gradient-text">Smarter Decisions</span></h2>
                    <p>Understanding your market is the first step toward dominating it. Our market research services
                        provide deep, actionable insights into customer behavior, competitive landscape, and emerging
                        trends.</p>
                    <p>We combine quantitative data analysis with qualitative research methodologies to deliver
                        comprehensive reports that inform strategy, reduce risk, and uncover new opportunities for
                        growth.</p>
                    <div className="about-features">
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="bar-chart-outline"></ion-icon></div>
                            <div>
                                <h4>Competitive Analysis</h4>
                                <p>Understand your market position</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="people-circle-outline"></ion-icon></div>
                            <div>
                                <h4>Customer Insights</h4>
                                <p>Deep audience understanding</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="trending-up-outline"></ion-icon></div>
                            <div>
                                <h4>Trend Analysis</h4>
                                <p>Stay ahead of industry shifts</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="icon"><ion-icon name="document-text-outline"></ion-icon></div>
                            <div>
                                <h4>Strategic Reports</h4>
                                <p>Actionable intelligence delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-img-card reveal reveal-delay-2">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop"
                        alt="Data analysis and market research" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    <section className="reveal-smooth cta-section">
        <div className="container">
            <div className="cta-banner reveal">
                <h2>Make Smarter Decisions with <span className="gradient-text">Data-Driven Insights</span></h2>
                <p>Our research team provides the market intelligence you need to stay competitive, identify
                    opportunities, and make informed strategic decisions.</p>
                <Link  to="/contact" className="btn-primary">Get in Touch</Link>
            </div>
        </div>
    </section>

    {/* Footer */}
    
    </main>
  );
}
