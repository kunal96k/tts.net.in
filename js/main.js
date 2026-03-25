// ============================================================
// CAPERNAUM SOLUTIONS - ULTRA PREMIUM EXPERIENCE JS
// Level 200% Creativity
// Designed by Technokraft Services LLP
// ============================================================

// ===== PRELOADER & INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('loader-progress');
    let loaded = false;

    function finishLoading() {
        if (loaded) return;
        loaded = true;

        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => {
                if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
            }, 1000);
        }

        document.body.style.overflow = ''; // Ensure scroll is enabled
        document.body.classList.add('loaded');
        triggerInitialAnimations();
    }

    function simulateProgress() {
        if (!progressBar) {
            finishLoading();
            return;
        }

        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                setTimeout(finishLoading, 200);
            } else {
                width += Math.random() * 5 + 2;
                if (width > 100) width = 100;
                progressBar.style.width = width + '%';
            }
        }, 30);
    }

    simulateProgress();
    setTimeout(finishLoading, 3500);
});

function triggerInitialAnimations() {
    // Trigger split text animations in hero immediately
    const heroTitle = document.querySelector('h1[data-split-text]');
    if (heroTitle) {
        if (!heroTitle.dataset.splitDone) splitTextIntoWords(heroTitle);
        const words = heroTitle.querySelectorAll('.split-word');
        words.forEach((word, i) => {
            setTimeout(() => { word.classList.add('visible'); }, i * 80);
        });
    }

    // === VIEWPORT REVEAL: Force-animate all above-fold reveal elements ===
    // The observer skipped these during preloader phase. Now we:
    //   1. Remove 'visible' if it was accidentally added (ensures transition fires)
    //   2. Force a layout flush so the browser registers the removed state
    //   3. Re-add 'visible' with staggered delays to play the proper animation
    const revealSelectors = [
        '.reveal', '.reveal-smooth', '.reveal-scale',
        '.reveal-left', '.reveal-right', '.reveal-flip'
    ];

    const allRevealEls = document.querySelectorAll(revealSelectors.join(','));
    const viewportHeight = window.innerHeight;
    let staggerIndex = 0;

    allRevealEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
            // Step 1: Strip any premature 'visible' class
            el.classList.remove('visible');
            // Step 2: Force layout recalc (browser registers opacity:0 / transform state)
            void el.offsetHeight;
            // Step 3: Staggered re-add to play the CSS transition
            const delay = 80 + staggerIndex * 110;
            setTimeout(() => {
                el.classList.add('visible');
            }, delay);
            staggerIndex++;
        }
    });
}


// ===== TEXT SPLIT UTILITY =====
function splitTextIntoWords(element) {
    if (element.dataset.splitDone === "true") return;

    const originalText = element.textContent.trim();
    if (!originalText) return;

    const words = originalText.split(/\s+/);
    element.innerHTML = '';

    words.forEach((word, i) => {
        const span = document.createElement('span');
        span.className = 'split-word';
        span.textContent = word + '\u00A0';
        span.style.transitionDelay = (i * 0.05) + 's';
        span.style.display = 'inline-block';
        element.appendChild(span);
    });

    element.dataset.splitDone = "true";
}

document.querySelectorAll('[data-split-text]').forEach(el => {
    splitTextIntoWords(el);
});

// ===== CUSTOM CURSOR =====
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.transform = `translate(${posX}px, ${posY}px)`;
        cursorOutline.animate({
            transform: `translate(${posX}px, ${posY}px)`
        }, { duration: 500, fill: "forwards" });
    });

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .feature-card, .service-card, .tilt-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('hovering-link');
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(200, 164, 94, 0.1)';
        });

        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovering-link');
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });
}

// ===== MAGNETIC BUTTON EFFECT =====
const magneticButtons = document.querySelectorAll('[data-magnetic]');
magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ===== SCROLL PROGRESS BAR =====
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = progress + '%';
    }
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (navbar) {
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        if (currentScroll > lastScroll && currentScroll > 300) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    }
    lastScroll = currentScroll;
});

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        if (navOverlay) navOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
}

if (navOverlay) {
    navOverlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('menu-active');
        document.body.style.overflow = '';
    });
}

// ===== MOBILE DROPDOWN TOGGLE =====
const dropdowns = document.querySelectorAll('.dropdown-toggle');
dropdowns.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        // Only active on mobile/tablet view where hover isn't primary
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            const parent = toggle.parentElement;

            // Toggle current
            parent.classList.toggle('open');

            // Close siblings
            const siblings = parent.parentElement.querySelectorAll('.dropdown');
            siblings.forEach(sib => {
                if (sib !== parent && sib.classList.contains('open')) {
                    sib.classList.remove('open');
                }
            });
        }
    });
});

// ===== ADVANCED SCROLL CHOREOGRAPHY (AUTO-STAGGER) =====
const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // === KEY FIX: Skip preloader phase ===
            // If the body isn't marked 'loaded' yet, the preloader is still showing.
            // Hero-section elements are intersecting but shouldn't animate yet —
            // triggerInitialAnimations() will handle them after preloader fades.
            if (!document.body.classList.contains('loaded')) {
                return; // Do NOT add visible — wait for triggerInitialAnimations
            }

            // Add visible class with a tiny stagger for "organic" feel
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, Math.random() * 50);

            // Handle counters inside
            if (entry.target.classList.contains('stat-item')) {
                const counter = entry.target.querySelector('.stat-number');
                if (counter && !counter.dataset.counted) {
                    animateCounter(counter);
                    counter.dataset.counted = 'true';
                }
            }

            // Unobserve after showing to save performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 1. Auto-tag Headings & Text
document.querySelectorAll('h1, h2, h3, p.section-subtitle').forEach(el => {
    if (!el.classList.contains('reveal') && !el.classList.contains('reveal-left') && !el.classList.contains('no-anim')) {
        el.classList.add('reveal-smooth');
        if (el.tagName === 'H2') el.classList.add('reveal-left');
    }
    observer.observe(el);
});

// 2. Auto-Stagger Grids & Lists
const staggerGroups = document.querySelectorAll('.services-grid, .features-grid, .showcase-grid, .about-features, .stats-grid, .trust-content');

staggerGroups.forEach(group => {
    const children = group.children;
    Array.from(children).forEach((child, index) => {
        child.classList.add('reveal-smooth');
        if (index % 2 === 0) child.classList.add('reveal-scale');
        const delay = Math.min((index + 1) * 100, 800);
        child.classList.add(`delay-${delay}`);
        observer.observe(child);
    });
});

// 3. Catch-all for manually tagged elements
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-flip, .reveal-smooth').forEach(el => {
    observer.observe(el);
});

// 4. Animate Buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.classList.add('reveal-scale');
    observer.observe(btn);
});

// ===== COUNTER ANIMATION =====
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(ease * target);
        element.textContent = current + suffix;
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target + suffix;
        }
    }
    requestAnimationFrame(update);
}

// ===== SMOOTH PARALLAX =====
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    document.querySelectorAll('.float-shape').forEach((shape, index) => {
        const speed = (index + 1) * 0.1;
        shape.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.05}deg)`;
    });
    document.querySelectorAll('.glow-orb').forEach((orb, index) => {
        const speed = (index + 1) * 0.05;
        orb.style.transform = `translateY(${scrollY * speed * -1}px)`;
    });
});

// ===== BACK TO TOP =====
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (backToTop) {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== 3D TILT EFFECT =====
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});

// ===== CONTACT FORM SUBMIT =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        if (btn) {
            btn.textContent = 'Sending...';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = 'Message Sent!';
                btn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
                setTimeout(() => {
                    btn.textContent = 'Send Message';
                    btn.style.background = '';
                    btn.disabled = false;
                    contactForm.reset();
                }, 2500);
            }, 1500);
        }
    });
}

// ===== AI COURSE SUGGESTION LOGIC =====
const aiSuggestionLogic = () => {
    const getSuggestionsBtn = document.getElementById("get-suggestions-btn");
    const userGoalInput = document.getElementById("user-goal");
    const suggestionsResults = document.getElementById("suggestions-results");

    if (!getSuggestionsBtn || !userGoalInput || !suggestionsResults) return;

    const courseData = [
        {
            name: "Java Full Stack Development",
            modalId: "java",
            duration: "6 Months",
            fees: "&#8377;40,000",
            rating: 4.8,
            description: "Master end-to-end Java development with Spring Boot, React, and REST APIs. Perfect for IT aspirants targeting top software roles.",
            keywords: ["java", "software", "development", "fullstack", "backend", "frontend", "coding", "it", "non-it", "placement"]
        },
        {
            name: "Data Science & AI",
            modalId: "datascience",
            duration: "6 Months",
            fees: "&#8377;45,000",
            rating: 4.9,
            description: "Deep dive into Python, Machine Learning, and Power BI. Prepare for high-paying data analyst & AI engineer roles.",
            keywords: ["data", "ai", "science", "machine", "learning", "python", "analytics", "business", "statistics", "genai", "artificial intelligence"]
        },
        {
            name: "DevOps & Cloud Computing",
            modalId: "devops",
            duration: "4 Months",
            fees: "&#8377;35,000",
            rating: 4.7,
            description: "Learn AWS, Docker, Kubernetes, and CI/CD pipelines. The most in-demand infrastructure and deployment skill set.",
            keywords: ["cloud", "devops", "operations", "aws", "docker", "kubernetes", "jenkins", "infrastructure"]
        },
        {
            name: "Modern Web Development",
            modalId: "web",
            duration: "4 Months",
            fees: "&#8377;30,000",
            rating: 4.6,
            description: "Build stunning, responsive web applications from scratch using HTML, CSS, JavaScript, React, and Node.js.",
            keywords: ["web", "frontend", "html", "css", "javascript", "react", "programming", "design"]
        },
        {
            name: "Short Learning Workshops",
            modalId: null,
            duration: "3-5 Days",
            fees: "Varies",
            rating: 4.9,
            description: "Power BI, Generative AI, and more. High-impact workshops designed for quick, focused skill acquisition.",
            keywords: ["workshop", "powerbi", "genai", "seminar", "crash", "short", "quick", "learning", "sessions", "interview", "resume"]
        }
    ];

    getSuggestionsBtn.addEventListener("click", () => {
        const userInput = userGoalInput.value.toLowerCase().trim();
        
        if (!userInput) {
            userGoalInput.style.borderColor = "#E53935";
            setTimeout(() => userGoalInput.style.borderColor = "", 2000);
            return;
        }

        // Simulating loading
        getSuggestionsBtn.disabled = true;
        getSuggestionsBtn.innerHTML = `<span>Analyzing...</span><ion-icon name="sync-outline" class="spin"></ion-icon>`;
        
        // Add a style for the spin icon if not already there
        if (!document.getElementById("ai-logic-styles")) {
            const style = document.createElement("style");
            style.id = "ai-logic-styles";
            style.innerHTML = `
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .spin { animation: spin 1s linear infinite; }
            `;
            document.head.appendChild(style);
        }

        setTimeout(() => {
            // Logic to suggest courses
            let matchedCourses = courseData.filter(course => 
                course.keywords.some(keyword => userInput.includes(keyword))
            );

            // If no match, show default top courses
            if (matchedCourses.length === 0) {
                matchedCourses = [courseData[0], courseData[1]];
            } else {
                // Limit to 2-3 courses
                matchedCourses = matchedCourses.slice(0, 3);
            }

            // Display results
            suggestionsResults.innerHTML = matchedCourses.map(course => `
                <div class="suggestion-item">
                    <div class="course-meta">
                        <span class="meta-badge"><ion-icon name="time-outline"></ion-icon> ${course.duration}</span>
                        <span class="meta-badge rating"><ion-icon name="star"></ion-icon> ${course.rating}</span>
                    </div>
                    <h3>${course.name}</h3>
                    <p style="font-size:14px; color: var(--text-muted, #aaa); margin-bottom: 14px; line-height: 1.6;">${course.description}</p>
                    <div class="course-details">
                        <div class="detail-row">
                            <span class="label">Course Fees:</span>
                            <span class="value">${course.fees}</span>
                        </div>
                    </div>
                    <button class="btn-view-details" data-course-id="${course.modalId}" onclick="if(typeof openCourseModal==='function'){openCourseModal('${course.modalId}');}else{window.location='courses.html';}">View Details</button>
                </div>
            `).join("");

            // Reset button
            getSuggestionsBtn.disabled = false;
            getSuggestionsBtn.innerHTML = `<span>Get Suggestions</span><ion-icon name="sparkles-outline"></ion-icon>`;
            
            // Show results with fade-in
            suggestionsResults.classList.add("visible");
            
            // Scroll to results
            suggestionsResults.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 1200);
    });
};

// Initialize AI Suggestion Logic
document.addEventListener("DOMContentLoaded", () => {
    aiSuggestionLogic();
});

