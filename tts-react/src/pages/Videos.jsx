import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function Videos() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "Videos | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="page-hero">
        <div className="container">
            <div className="section-label reveal-smooth">Learn for Free</div>
            <h1 className="reveal-scale">Video <span className="shimmer-text">Library</span></h1>
            <p className="reveal-smooth">Watch free IT tutorials, student success stories, and workshop recordings curated by TechnoKraft experts.</p>
        </div>
    </section>

    <section className="services-section" style={{paddingTop: '60px'}}>
        <div className="container">

            {/* YouTube Banner */}
            <div className="yt-banner reveal-smooth">
                <div className="yt-icon-wrap"><ion-icon name="logo-youtube"></ion-icon></div>
                <div>
                    <h3>Subscribe to Our YouTube Channel</h3>
                    <p>Get free Java, Python, DevOps, and career tip videos every week. Join 10,000+ learners on YouTube and grow your IT career faster.</p>
                    <a href="https://www.youtube.com/@technokraft-tts455" target="_blank" className="btn-yt"><ion-icon name="logo-youtube"></ion-icon> Subscribe on YouTube</a>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="vid-filters reveal-smooth">
                <button className="vid-filter active" data-vcat="all">All Videos</button>
                <button className="vid-filter" data-vcat="java">Java</button>
                <button className="vid-filter" data-vcat="data">Data Science</button>
                <button className="vid-filter" data-vcat="devops">DevOps</button>
                <button className="vid-filter" data-vcat="career">Career Tips</button>
                <button className="vid-filter" data-vcat="ai">AI & GenAI</button>
                <button className="vid-filter" data-vcat="story">Student Stories</button>
            </div>

            {/* Video Grid */}
            {/* Each card has:
                 data-ytid  = YouTube video ID (used for thumbnail + embed)
                 data-yt    = full YouTube URL (used for "Watch on YouTube" button)
            */}
            <div className="video-grid" id="videoGrid">

                {/* Featured */}
                <div className="video-card reveal-smooth" data-vcat="java"
                    data-title="Why TechnoKraft is the Best IT Institute in Nashik"
                    data-desc="Watch why thousands of students choose TechnoKraft for their IT career transformation."
                    data-tags="TechnoKraft,Success,Placement,Nashik,Java"
                    data-duration="5:24"
                    data-views="12K"
                    data-cat-label="Featured"
                    data-ytid="b3RAi5bWfBU"
                    data-yt="https://youtu.be/b3RAi5bWfBU">
                    <div className="video-thumb vt1">
                        <img className="yt-thumb-img" src="https://img.youtube.com/vi/b3RAi5bWfBU/hqdefault.jpg" alt="Why TechnoKraft is the Best IT Institute in Nashik" />
                        <div className="thumb-overlay"></div>
                        <div className="play-btn"><ion-icon name="play"></ion-icon></div>
                        <div className="video-duration">5:24</div>
                        <div className="video-cat-tag">Featured</div>
                    </div>
                    <div className="video-body">
                        <div className="video-title">Why TechnoKraft is the Best IT Institute in Nashik</div>
                        <div className="video-meta">
                            <span><ion-icon name="eye-outline"></ion-icon> 12K views</span>
                        </div>
                        <button className="btn-watch">Watch Now</button>
                    </div>
                </div>

                {/* Java */}
                <div className="video-card reveal-smooth" data-vcat="java"
                    data-title="Java Full Stack Course"
                    data-desc="Complete Java Full Stack course covering core Java, Spring Boot, REST APIs, and more."
                    data-tags="Java,Spring Boot,REST API"
                    data-duration="1:24:00"
                    data-views="45K"
                    data-cat-label="Java"
                    data-ytid="BGTx91t8q50"
                    data-yt="https://www.youtube.com/watch?v=BGTx91t8q50">
                    <div className="video-thumb vt1">
                        <img className="yt-thumb-img" src="https://img.youtube.com/vi/BGTx91t8q50/hqdefault.jpg" alt="Java Full Stack Course" />
                        <div className="thumb-overlay"></div>
                        <div className="play-btn"><ion-icon name="play"></ion-icon></div>
                        <div className="video-duration">1:24:00</div>
                        <div className="video-cat-tag">Java</div>
                    </div>
                    <div className="video-body">
                        <div className="video-title">Java Full Stack Course</div>
                        <div className="video-meta">
                            <span><ion-icon name="eye-outline"></ion-icon> 45K views</span>
                        </div>
                        <button className="btn-watch">Watch Now</button>
                    </div>
                </div>

                {/* Data Science */}
                <div className="video-card reveal-smooth" data-vcat="data"
                    data-title="Data Science Roadmap"
                    data-desc="Data Science for beginners — Python, ML, and data analysis roadmap explained step by step."
                    data-tags="Python,Data Science,ML"
                    data-duration="45:00"
                    data-views="32K"
                    data-cat-label="Data Science"
                    data-ytid="ua-CiDNNj30"
                    data-yt="https://www.youtube.com/watch?v=ua-CiDNNj30">
                    <div className="video-thumb vt2">
                        <img className="yt-thumb-img" src="https://img.youtube.com/vi/ua-CiDNNj30/hqdefault.jpg" alt="Data Science Roadmap" />
                        <div className="thumb-overlay"></div>
                        <div className="play-btn"><ion-icon name="play"></ion-icon></div>
                        <div className="video-duration">45:00</div>
                        <div className="video-cat-tag">Data Science</div>
                    </div>
                    <div className="video-body">
                        <div className="video-title">Data Science Roadmap</div>
                        <div className="video-meta">
                            <span><ion-icon name="eye-outline"></ion-icon> 32K views</span>
                        </div>
                        <button className="btn-watch">Watch Now</button>
                    </div>
                </div>

                {/* DevOps */}
                <div className="video-card reveal-smooth" data-vcat="devops"
                    data-title="Docker & Kubernetes"
                    data-desc="DevOps beginner tutorial covering Docker containers, Kubernetes orchestration, and CI/CD pipelines."
                    data-tags="Docker,Kubernetes,DevOps"
                    data-duration="55:30"
                    data-views="28K"
                    data-cat-label="DevOps"
                    data-ytid="9SGDpanrc8U"
                    data-yt="https://www.youtube.com/watch?v=9SGDpanrc8U">
                    <div className="video-thumb vt3">
                        <img className="yt-thumb-img" src="https://img.youtube.com/vi/9SGDpanrc8U/hqdefault.jpg" alt="Docker & Kubernetes" />
                        <div className="thumb-overlay"></div>
                        <div className="play-btn"><ion-icon name="play"></ion-icon></div>
                        <div className="video-duration">55:30</div>
                        <div className="video-cat-tag">DevOps</div>
                    </div>
                    <div className="video-body">
                        <div className="video-title">Docker & Kubernetes</div>
                        <div className="video-meta">
                            <span><ion-icon name="eye-outline"></ion-icon> 28K views</span>
                        </div>
                        <button className="btn-watch">Watch Now</button>
                    </div>
                </div>

                {/* Student Story */}
                <div className="video-card reveal-smooth" data-vcat="story"
                    data-title="Student Success Story"
                    data-desc="Inspiring career journey of a TechnoKraft student from zero to job placement at a top IT company."
                    data-tags="Career,Student,Placement"
                    data-duration="12:00"
                    data-views="18K"
                    data-cat-label="Student Story"
                    data-ytid="6DZBPEdjWlA"
                    data-yt="https://www.youtube.com/watch?v=6DZBPEdjWlA">
                    <div className="video-thumb vt4">
                        <img className="yt-thumb-img" src="https://img.youtube.com/vi/6DZBPEdjWlA/hqdefault.jpg" alt="Student Success Story" />
                        <div className="thumb-overlay"></div>
                        <div className="play-btn"><ion-icon name="play"></ion-icon></div>
                        <div className="video-duration">12:00</div>
                        <div className="video-cat-tag">Student Story</div>
                    </div>
                    <div className="video-body">
                        <div className="video-title">Student Success Story</div>
                        <div className="video-meta">
                            <span><ion-icon name="eye-outline"></ion-icon> 18K views</span>
                        </div>
                        <button className="btn-watch">Watch Now</button>
                    </div>
                </div>

                {/* AI */}
                <div className="video-card reveal-smooth" data-vcat="ai"
                    data-title="Generative AI"
                    data-desc="AI for developers — understanding Generative AI, ChatGPT, and how to use AI tools in your development workflow."
                    data-tags="AI,ChatGPT,GenAI"
                    data-duration="38:00"
                    data-views="52K"
                    data-cat-label="AI"
                    data-ytid="mEsleV16qdo"
                    data-yt="https://www.youtube.com/watch?v=mEsleV16qdo">
                    <div className="video-thumb vt5">
                        <img className="yt-thumb-img" src="https://img.youtube.com/vi/mEsleV16qdo/hqdefault.jpg" alt="Generative AI" />
                        <div className="thumb-overlay"></div>
                        <div className="play-btn"><ion-icon name="play"></ion-icon></div>
                        <div className="video-duration">38:00</div>
                        <div className="video-cat-tag">AI</div>
                    </div>
                    <div className="video-body">
                        <div className="video-title">Generative AI</div>
                        <div className="video-meta">
                            <span><ion-icon name="eye-outline"></ion-icon> 52K views</span>
                        </div>
                        <button className="btn-watch">Watch Now</button>
                    </div>
                </div>

                {/* Career */}
                <div className="video-card reveal-smooth" data-vcat="career"
                    data-title="Placement Prep"
                    data-desc="Complete campus placement preparation guide — aptitude, coding rounds, HR interviews, and how to crack top IT companies."
                    data-tags="Placement,TCS,Interview,Career"
                    data-duration="20:00"
                    data-views="67K"
                    data-cat-label="Career"
                    data-ytid="1mHjMNZZvFo"
                    data-yt="https://www.youtube.com/watch?v=1mHjMNZZvFo">
                    <div className="video-thumb vt6">
                        <img className="yt-thumb-img" src="https://img.youtube.com/vi/1mHjMNZZvFo/hqdefault.jpg" alt="Placement Prep" />
                        <div className="thumb-overlay"></div>
                        <div className="play-btn"><ion-icon name="play"></ion-icon></div>
                        <div className="video-duration">20:00</div>
                        <div className="video-cat-tag">Career</div>
                    </div>
                    <div className="video-body">
                        <div className="video-title">Placement Prep</div>
                        <div className="video-meta">
                            <span><ion-icon name="eye-outline"></ion-icon> 67K views</span>
                        </div>
                        <button className="btn-watch">Watch Now</button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* Video Watch Modal */}
    <div className="vid-modal-backdrop" id="vidModal">
        <div className="vid-modal">

            {/* Player area */}
            <div className="vid-modal-player" id="vidModalPlayer">
                {/* Poster (thumbnail + big play) shown before video starts */}
                <div className="vid-poster" id="vidPoster">
                    <img id="vidPosterImg" src="" alt="" />
                    <div className="poster-overlay"></div>
                    <div className="vid-modal-play-btn" id="vidModalPlayBtn">
                        <ion-icon name="play"></ion-icon>
                    </div>
                </div>
                {/* iframe injected here when play is clicked */}
                <div className="vid-iframe-wrap" id="vidIframeWrap"></div>
            </div>

            <div className="vid-modal-header">
                <h3 id="vidModalTitle">Video Title</h3>
                <button className="modal-close-btn" id="closeVidModal"><ion-icon name="close-outline"></ion-icon></button>
            </div>
            <div className="vid-modal-body">
                <p id="vidModalDesc">Description</p>
                <div className="vid-meta-tags" id="vidModalTags"></div>
                <div className="vid-modal-actions">
                    <Link  to="#" id="vidModalYtLink" target="_blank" className="btn-yt-watch">
                        <ion-icon name="logo-youtube"></ion-icon> Watch on YouTube
                    </Link>
                    <button className="btn-share" id="vidShareBtn"><ion-icon name="share-social-outline"></ion-icon> Share</button>
                </div>
            </div>
        </div>
    </div>

    <section className="cta-section">
        <div className="container">
            <div className="cta-banner reveal">
                <h2>Ready to Go <span className="gradient-text">Beyond Videos?</span></h2>
                <p>Enroll in a live, instructor-led course and get personal mentorship, mock interviews, and 100% placement support.</p>
                <Link  to="/courses" className="btn-primary">Explore Courses</Link>
            </div>
        </div>
    </section>

    
    </main>
  );
}
