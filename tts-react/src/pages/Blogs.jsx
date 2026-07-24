import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function Blogs() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "Blogs | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Knowledge Hub</div>
            <h1 className="reveal-scale">TechnoKraft <span className="shimmer-text">Knowledge Hub</span></h1>
            <p className="reveal-smooth">Read career-focused articles, course guides, and practical learning insights from TechnoKraft Training & Solution, Nashik.</p>
        </div>
    </section>

    <section className="services-section" style={{paddingTop: '60px'}}>
        <div className="container">
            <div className="blog-filters reveal-smooth">
                <button className="filter-btn active" data-filter="all">All Articles</button>
                <button className="filter-btn" data-filter="career">Career Support</button>
                <button className="filter-btn" data-filter="java">Full Stack</button>
                <button className="filter-btn" data-filter="data">Data Courses</button>
                <button className="filter-btn" data-filter="devops">SAP Training</button>
                <button className="filter-btn" data-filter="web">Power BI</button>
                <button className="filter-btn" data-filter="ai">Placement Guidance</button>
            </div>

            <div className="blog-grid" id="blogGrid">

                {/* Blog 1 — Full Stack / TechnoKraft */}
                <div className="blog-card reveal-smooth" data-cat="java"
                     data-img="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80">
                    <div className="blog-thumb">
                        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80" alt="TechnoKraft IT Training Nashik" loading="lazy" />
                        <div className="thumb-overlay"></div>
                        <span className="blog-category">Full Stack</span>
                    </div>
                    <div className="blog-body">
                        <div className="blog-meta">
                            <span><ion-icon name="calendar-outline"></ion-icon> Mar 15, 2026</span>
                            <span><ion-icon name="time-outline"></ion-icon> 8 min read</span>
                        </div>
                        <h3 className="blog-title">TechnoKraft Training & Solution: Building Job-Ready IT Skills in Nashik</h3>
                        <p className="blog-excerpt">TechnoKraft helps students build practical IT skills through expert training, hands-on practice, certification guidance, and career-focused learning.</p>
                        <div className="blog-footer">
                            <span className="blog-read-btn">Read Full Article <ion-icon name="arrow-forward-outline"></ion-icon></span>
                        </div>
                    </div>
                </div>

                {/* Blog 2 — Full Stack Development */}
                <div className="blog-card reveal-smooth" data-cat="data"
                     data-img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80">
                    <div className="blog-thumb">
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" alt="Full Stack Development Course" loading="lazy" />
                        <div className="thumb-overlay"></div>
                        <span className="blog-category">Full Stack</span>
                    </div>
                    <div className="blog-body">
                        <div className="blog-meta">
                            <span><ion-icon name="calendar-outline"></ion-icon> Mar 10, 2026</span>
                            <span><ion-icon name="time-outline"></ion-icon> 12 min read</span>
                        </div>
                        <h3 className="blog-title">Full Stack Development Course: A Career Path for Freshers</h3>
                        <p className="blog-excerpt">Learn how Full Stack Development helps freshers understand frontend, backend, databases, and real-time project development for IT careers.</p>
                        <div className="blog-footer">
                            <span className="blog-read-btn">Read Full Article <ion-icon name="arrow-forward-outline"></ion-icon></span>
                        </div>
                    </div>
                </div>

                {/* Blog 3 — Data Science vs Analytics */}
                <div className="blog-card reveal-smooth" data-cat="career"
                     data-img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80">
                    <div className="blog-thumb">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Data Science vs Data Analytics" loading="lazy" />
                        <div className="thumb-overlay"></div>
                        <span className="blog-category">Data Courses</span>
                    </div>
                    <div className="blog-body">
                        <div className="blog-meta">
                            <span><ion-icon name="calendar-outline"></ion-icon> Mar 05, 2026</span>
                            <span><ion-icon name="time-outline"></ion-icon> 6 min read</span>
                        </div>
                        <h3 className="blog-title">Data Science vs Data Analytics: Which Course Should You Choose?</h3>
                        <p className="blog-excerpt">Understand the difference between Data Science and Data Analytics, including tools, skills, career scope, and learning path for beginners.</p>
                        <div className="blog-footer">
                            <span className="blog-read-btn">Read Full Article <ion-icon name="arrow-forward-outline"></ion-icon></span>
                        </div>
                    </div>
                </div>

                {/* Blog 4 — SAP Training */}
                <div className="blog-card reveal-smooth" data-cat="devops"
                     data-img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80">
                    <div className="blog-thumb">
                        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" alt="SAP Training for Beginners" loading="lazy" />
                        <div className="thumb-overlay"></div>
                        <span className="blog-category">SAP Training</span>
                    </div>
                    <div className="blog-body">
                        <div className="blog-meta">
                            <span><ion-icon name="calendar-outline"></ion-icon> Feb 28, 2026</span>
                            <span><ion-icon name="time-outline"></ion-icon> 10 min read</span>
                        </div>
                        <h3 className="blog-title">SAP Training for Beginners: Skills, Career Scope, and Benefits</h3>
                        <p className="blog-excerpt">Explore how SAP training helps students and professionals understand ERP systems, business workflows, and career opportunities.</p>
                        <div className="blog-footer">
                            <span className="blog-read-btn">Read Full Article <ion-icon name="arrow-forward-outline"></ion-icon></span>
                        </div>
                    </div>
                </div>

                {/* Blog 5 — Power BI */}
                <div className="blog-card reveal-smooth" data-cat="web"
                     data-img="https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=600&q=80">
                    <div className="blog-thumb">
                        <img src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=600&q=80" alt="Power BI Training Dashboards" loading="lazy" />
                        <div className="thumb-overlay"></div>
                        <span className="blog-category">Power BI</span>
                    </div>
                    <div className="blog-body">
                        <div className="blog-meta">
                            <span><ion-icon name="calendar-outline"></ion-icon> Feb 20, 2026</span>
                            <span><ion-icon name="time-outline"></ion-icon> 7 min read</span>
                        </div>
                        <h3 className="blog-title">Power BI Training: Learn Dashboards, Reports, and Data Visualization</h3>
                        <p className="blog-excerpt">Power BI helps learners create interactive dashboards, analyze business data, and present insights through professional reports and visualizations.</p>
                        <div className="blog-footer">
                            <span className="blog-read-btn">Read Full Article <ion-icon name="arrow-forward-outline"></ion-icon></span>
                        </div>
                    </div>
                </div>

                {/* Blog 6 — Placement Guidance */}
                <div className="blog-card reveal-smooth" data-cat="ai"
                     data-img="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80">
                    <div className="blog-thumb">
                        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80" alt="TechnoKraft Placement Support" loading="lazy" />
                        <div className="thumb-overlay"></div>
                        <span className="blog-category">Placement</span>
                    </div>
                    <div className="blog-body">
                        <div className="blog-meta">
                            <span><ion-icon name="calendar-outline"></ion-icon> Feb 12, 2026</span>
                            <span><ion-icon name="time-outline"></ion-icon> 15 min read</span>
                        </div>
                        <h3 className="blog-title">How TechnoKraft Supports Students with Training and Placement Guidance</h3>
                        <p className="blog-excerpt">TechnoKraft supports learners with practical sessions, resume guidance, interview preparation, and placement-oriented training support.</p>
                        <div className="blog-footer">
                            <span className="blog-read-btn">Read Full Article <ion-icon name="arrow-forward-outline"></ion-icon></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* Blog Read Modal */}
    <div className="blog-modal-backdrop" id="blogModal">
        <div className="blog-modal">
            <button className="modal-close" id="closeBlogModal"><ion-icon name="close-outline"></ion-icon></button>
            <div className="modal-hero">
                <img id="modalHeroImg" src="" alt="" />
                <div className="modal-hero-overlay"></div>
                <div className="modal-hero-content">
                    <span className="modal-cat" id="modalCat">Category</span>
                    <h2 className="modal-title" id="modalTitle">Full Article Title</h2>
                    <div className="modal-meta">
                        <span id="modalDate">Jan 01, 2026</span>
                        <span id="modalReadTime">5 min read</span>
                    </div>
                </div>
            </div>
            <div className="modal-content-area" id="modalContent"></div>
        </div>
    </div>

    <section className="cta-section">
        <div className="container">
            <div className="cta-banner reveal">
                <h2>Start Your <span className="gradient-text">Learning Journey</span></h2>
                <p>Connect with TechnoKraft for course guidance, practical training, and placement-oriented career support.</p>
                <Link  to="/contact" className="btn-primary">Get Course Guidance</Link>
            </div>
        </div>
    </section>

    
    </main>
  );
}
