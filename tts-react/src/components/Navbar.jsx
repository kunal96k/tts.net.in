import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.classList.remove('menu-active');
    document.body.style.overflow = '';
  }, [location]);

  // Handle scroll events for navbar styles & hide/show on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/show on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      document.body.classList.add('menu-active');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-active');
      document.body.style.overflow = '';
    }
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
    document.body.classList.remove('menu-active');
    document.body.style.overflow = '';
  };

  const handleDropdownToggle = (e, menuName) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === menuName ? null : menuName);
    }
  };

  return (
    <>
      <div 
        className={`nav-overlay ${isOpen ? 'active' : ''}`} 
        id="navOverlay"
        onClick={handleOverlayClick}
      ></div>

      <nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`} 
        id="navbar"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out, background 0.3s, box-shadow 0.3s'
        }}
      >
        <div className="nav-inner">
          <Link to="/" className="logo-box">
            <img src="/images/tts_logo.png" alt="TechnoKraft Logo" />
            <div className="brand-text">
              <span className="brand-main">TechnoKraft</span>
            </div>
          </Link>

          <div className={`nav-links ${isOpen ? 'active' : ''}`} id="navLinks">
            <div className="sidebar-logo">
              <div className="logo-box">
                <img src="/images/tts_logo.png" alt="TechnoKraft Logo" />
                <div className="brand-text">
                  <span className="brand-main">TechnoKraft</span>
                </div>
              </div>
            </div>

            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>

            <div className={`dropdown ${activeDropdown === 'courses' ? 'open' : ''}`}>
              <a 
                href="#" 
                className="dropdown-toggle"
                onClick={(e) => handleDropdownToggle(e, 'courses')}
              >
                Courses
              </a>
              <div className="dropdown-menu">
                <Link to="/courses">All Courses</Link>
                <span className="dropdown-header">[ Short Learning ]</span>
                <Link to="/crash-courses">Crash Courses</Link>
                <Link to="/workshops">Workshops</Link>
                <Link to="/sessions-seminars">Sessions & Seminars</Link>
                <div className="sub-menu">
                  <Link to="/career-guidance">Career Guidance Sessions</Link>
                  <Link to="/resume-building">Resume Building Sessions</Link>
                  <Link to="/interview-prep">Interview Preparation</Link>
                </div>
                <span className="dropdown-header">[ Programs ]</span>
                <Link to="/cert-programs">Certification Programs</Link>
              </div>
            </div>

            <div className={`dropdown ${activeDropdown === 'students' ? 'open' : ''}`}>
              <a 
                href="#" 
                className="dropdown-toggle"
                onClick={(e) => handleDropdownToggle(e, 'students')}
              >
                Students
              </a>
              <div className="dropdown-menu">
                <Link to="/placements">Placed Students</Link>
                <Link to="/certifications">Certified Students</Link>
                <Link to="/testimonials">Student Testimonials</Link>
              </div>
            </div>

            <div className={`dropdown ${activeDropdown === 'resources' ? 'open' : ''}`}>
              <a 
                href="#" 
                className="dropdown-toggle"
                onClick={(e) => handleDropdownToggle(e, 'resources')}
              >
                Resources
              </a>
              <div className="dropdown-menu">
                <Link to="/blogs">Blogs</Link>
                <Link to="/events">Events</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/videos">Videos</Link>
                <Link to="/top-institutes">Top Institutes in Nashik</Link>
              </div>
            </div>

            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About Us
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>

            <Link to="/contact" className="nav-cta">
              Get Counseling
            </Link>
          </div>

          <div 
            className={`hamburger ${isOpen ? 'active' : ''}`} 
            id="hamburger"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}
