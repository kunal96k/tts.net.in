import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function Gallery() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "Gallery | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="page-hero"><div className="container">
        <div className="section-label reveal-smooth">Campus Life & Memories</div>
        <h1 className="reveal-scale">Our <span className="shimmer-text">Gallery</span></h1>
        <p className="reveal-smooth">From classroom sessions to placement celebrations — a visual journey through TechnoKraft's vibrant campus life.</p>
    </div></section>

    <section className="services-section" style={{paddingTop: '60px'}}><div className="container">
        {/* Filters */}
        <div className="gallery-filters reveal-smooth" id="galFilters">
            <button className="gal-filter active" data-filter="all">All</button>
            <button className="gal-filter" data-filter="campus">Campus Life</button>
            <button className="gal-filter" data-filter="workshops">Workshops</button>
            <button className="gal-filter" data-filter="placements">Placement Drives</button>
            <button className="gal-filter" data-filter="seminars">Seminars</button>
            <button className="gal-filter" data-filter="celebrations">Celebrations</button>
            <button className="gal-filter" data-filter="certifications">Certifications</button>
        </div>
        <div className="gallery-count reveal-smooth" id="galCount"><strong>13</strong> photos displayed</div>

        {/* Gallery Grid — each item has data-cat for filtering */}
        <div className="gallery-grid" id="galleryGrid">

            <div className="gal-item wide g1 reveal-smooth" data-cat="campus"
                 data-title="Classroom Training Session"
                 data-desc="Students attending a practical classroom training session at TechnoKraft Training & Solution, Nashik."
                 data-tags="Campus,Training,Students,TechnoKraft"
                 data-img="images/campus_life.jpg">
                <div className="gal-thumb"><img src="images/campus_life.jpg" alt="TechnoKraft classroom training session" /></div>
                <div className="gal-cat-pill">Campus Life</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Classroom Training Session</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

            <div className="gal-item g2 reveal-smooth" data-cat="campus"
                 data-title="Hands-on Lab Practice"
                 data-desc="Students working on practical exercises in the computer lab during technical training sessions."
                 data-tags="Campus,Lab,Practice,Learning"
                 data-img="images/campus_life.jpg">
                <div className="gal-thumb"><img src="images/campus_life.jpg" alt="TechnoKraft computer lab practical session" /></div>
                <div className="gal-cat-pill">Campus Life</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Hands-on Lab Practice</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

            <div className="gal-item g3 reveal-smooth" data-cat="workshops"
                 data-title="Power BI Workshop Activity"
                 data-desc="A workshop session focused on Power BI dashboards, data visualization, and reporting skills."
                 data-tags="Power BI,Workshop,Analytics,Dashboard"
                 data-img="images/workshop.jpg">
                <div className="gal-thumb"><img src="images/workshop.jpg" alt="TechnoKraft Power BI workshop activity" /></div>
                <div className="gal-cat-pill">Workshops</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Power BI Workshop Activity</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

            <div className="gal-item g4 reveal-smooth" data-cat="placements"
                 data-title="Internship Interview Drive"
                 data-desc="Students participating in an internship interview drive conducted with industry support."
                 data-tags="Placement,Interview,Internship,Students"
                 data-img="images/placement.jpg">
                <div className="gal-thumb"><img src="images/placement.jpg" alt="TechnoKraft internship interview drive" /></div>
                <div className="gal-cat-pill">Placements</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Internship Interview Drive</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

            <div className="gal-item g5 reveal-smooth" data-cat="seminars"
                 data-title="Industry Seminar Session"
                 data-desc="A career-focused seminar session organized to guide students about IT skills and career opportunities."
                 data-tags="Seminar,Career Guidance,Students,Nashik"
                 data-img="images/seminar.avif">
                <div className="gal-thumb"><img src="images/seminar.avif" alt="TechnoKraft industry seminar session" /></div>
                <div className="gal-cat-pill">Seminars</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Industry Seminar Session</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

            <div className="gal-item wide g6 reveal-smooth" data-cat="celebrations"
                 data-title="Batch Completion Celebration"
                 data-desc="Students celebrating successful course completion and learning achievements at TechnoKraft."
                 data-tags="Celebration,Batch Complete,Achievement,Students"
                 data-img="images/business_analytics_cert.jpg">
                <div className="gal-thumb"><img src="images/business_analytics_cert.jpg" alt="TechnoKraft batch completion celebration" /></div>
                <div className="gal-cat-pill">Celebrations</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Batch Completion Celebration</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

            <div className="gal-item g7 reveal-smooth" data-cat="workshops"
                 data-title="Generative AI Boot Camp"
                 data-desc="Students attending a practical workshop on Generative AI tools, learning concepts, and real-time use cases."
                 data-tags="Generative AI,Workshop,Boot Camp,Learning"
                 data-img="images/workshop.jpg">
                <div className="gal-thumb"><img src="images/workshop.jpg" alt="TechnoKraft Generative AI boot camp" /></div>
                <div className="gal-cat-pill">Workshops</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Generative AI Boot Camp</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

            <div className="gal-item g8 reveal-smooth" data-cat="campus"
                 data-title="Student Learning Activity"
                 data-desc="A glimpse of student learning activities and guided practice sessions at TechnoKraft."
                 data-tags="Campus,Students,Learning,Training"
                 data-img="images/campus_life.jpg">
                <div className="gal-thumb"><img src="images/campus_life.jpg" alt="TechnoKraft student learning activity" /></div>
                <div className="gal-cat-pill">Campus Life</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Student Learning Activity</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

            <div className="gal-item g9 reveal-smooth" data-cat="certifications"
                 data-title="Certificate Achievement"
                 data-desc="A certification achievement moment highlighting student progress and skill development."
                 data-tags="Certificate,Achievement,Student,Skill Development"
                 data-img="images/redhat_cert.jpg">
                <div className="gal-thumb"><img src="images/redhat_cert.jpg" alt="TechnoKraft certificate achievement" /></div>
                <div className="gal-cat-pill">Certifications</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Certificate Achievement</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

            <div className="gal-item g1 reveal-smooth" data-cat="celebrations"
                 data-title="Course Completion Ceremony"
                 data-desc="A course completion ceremony celebrating students who successfully completed their training journey."
                 data-tags="Course Completion,Celebration,Students,Training"
                 data-img="images/business_analytics_cert.jpg">
                <div className="gal-thumb"><img src="images/business_analytics_cert.jpg" alt="TechnoKraft course completion ceremony" /></div>
                <div className="gal-cat-pill">Celebrations</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Course Completion Ceremony</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

            <div className="gal-item wide g2 reveal-smooth" data-cat="seminars"
                 data-title="Guest Lecture Session"
                 data-desc="A guest lecture session conducted to help students understand industry expectations and career paths."
                 data-tags="Guest Lecture,Seminar,Career,Students"
                 data-img="images/seminar.avif">
                <div className="gal-thumb"><img src="images/seminar.avif" alt="TechnoKraft guest lecture session" /></div>
                <div className="gal-cat-pill">Seminars</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Guest Lecture Session</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

            <div className="gal-item g3 reveal-smooth" data-cat="workshops"
                 data-title="Interview Drive Activity"
                 data-desc="Students attending an interview-oriented activity designed to build confidence and career readiness."
                 data-tags="Interview,Workshop,Career Support,Students"
                 data-img="images/workshop.jpg">
                <div className="gal-thumb"><img src="images/workshop.jpg" alt="TechnoKraft interview drive activity" /></div>
                <div className="gal-cat-pill">Workshops</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Interview Drive Activity</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

            <div className="gal-item g4 reveal-smooth" data-cat="placements"
                 data-title="Student Placement Success"
                 data-desc="A placed student achievement image representing TechnoKraft student career success."
                 data-tags="Placement,Success,Placed Student,Career"
                 data-img="images/placement.jpg">
                <div className="gal-thumb"><img src="images/placement.jpg" alt="TechnoKraft placed student success" /></div>
                <div className="gal-cat-pill">Placements</div>
                <div className="gal-overlay">
                    <div className="gal-caption">Student Placement Success</div>
                    <div className="gal-actions"><button className="btn-view-photo"><ion-icon name="expand-outline"></ion-icon> View Photo</button></div>
                </div>
            </div>

        </div>

        <div style={{textAlign: 'center', marginTop: '40px', color: 'var(--text-muted)', fontSize: '14px', padding: '24px', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-light)'}} className="reveal-smooth">
            <ion-icon name="images-outline" style={{fontSize: '32px', marginBottom: '12px', display: 'block', color: 'var(--primary)'}}></ion-icon>
            <strong>More photos coming soon!</strong><br />Follow us on <a href="https://www.instagram.com/TechnoKraft_tts" target="_blank" style={{color: 'var(--primary)'}}>Instagram</a> and <a href="https://www.facebook.com/tts.net.in/" target="_blank" style={{color: 'var(--primary)'}}>Facebook</a> for the latest updates.
        </div>
    </div></section>

    {/* ===== PHOTO LIGHTBOX MODAL ===== */}
    <div className="photo-modal-backdrop" id="photoModal">
        <div className="photo-modal">
            <div className="photo-modal-header">
                <h3 id="modalPhotoTitle">Photo Title</h3>
                <button className="modal-close" id="closePhotoModal"><ion-icon name="close-outline"></ion-icon></button>
            </div>
            <div className="photo-modal-display" id="modalPhotoDisplay">
                <ion-icon name="images-outline"></ion-icon>
            </div>
            <div className="photo-modal-body">
                <p id="modalPhotoDesc">Description here.</p>
                <div className="photo-modal-tags" id="modalPhotoTags"></div>
            </div>
        </div>
    </div>

    
    </main>
  );
}
