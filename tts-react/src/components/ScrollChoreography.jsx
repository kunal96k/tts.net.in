import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollChoreography() {
  const { pathname } = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll logic for back-to-top button and scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Calculate progress
      if (scrollHeight > 0) {
        setScrollProgress((scrollTop / scrollHeight) * 100);
      }
      
      // Show/hide back to top button
      if (scrollTop > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger animations and magnetic buttons on route change
  useEffect(() => {
    // Scroll to top on navigation
    window.scrollTo(0, 0);

    // 1. Initial trigger of viewport animations
    const triggerAnimations = () => {
      const allRevealEls = document.querySelectorAll(
        '.reveal, .reveal-smooth, .reveal-scale, .reveal-left, .reveal-right, .reveal-flip'
      );
      
      const observerOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      allRevealEls.forEach(el => {
        el.classList.remove('visible'); // clean slate
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    const cleanupObserver = triggerAnimations();

    // 2. Magnetic buttons setup
    const magneticButtons = document.querySelectorAll('[data-magnetic]');
    const handleMouseMove = (e, btn) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };
    
    const handleMouseLeave = (btn) => {
      btn.style.transform = 'translate(0, 0)';
    };

    magneticButtons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => handleMouseMove(e, btn));
      btn.addEventListener('mouseleave', () => handleMouseLeave(btn));
    });

    // 3. Custom cursor setup for pointer inputs
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    let handleGlobalMouseMove = null;

    if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
      handleGlobalMouseMove = (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.transform = `translate(${posX}px, ${posY}px)`;
        cursorOutline.animate({
          transform: `translate(${posX}px, ${posY}px)`
        }, { duration: 500, fill: "forwards" });
      };

      window.addEventListener('mousemove', handleGlobalMouseMove);

      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, .feature-card, .service-card, .tilt-card, .showcase-card, .cert-card'
      );

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          document.body.classList.add('hovering-link');
          cursorOutline.style.width = '60px';
          cursorOutline.style.height = '60px';
          cursorOutline.style.backgroundColor = 'rgba(229, 57, 53, 0.08)';
        });

        el.addEventListener('mouseleave', () => {
          document.body.classList.remove('hovering-link');
          cursorOutline.style.width = '40px';
          cursorOutline.style.height = '40px';
          cursorOutline.style.backgroundColor = 'transparent';
        });
      });
    }

    return () => {
      if (cleanupObserver) cleanupObserver();
      
      magneticButtons.forEach(btn => {
        btn.removeEventListener('mousemove', (e) => handleMouseMove(e, btn));
        btn.removeEventListener('mouseleave', () => handleMouseLeave(btn));
      });

      if (handleGlobalMouseMove) {
        window.removeEventListener('mousemove', handleGlobalMouseMove);
      }
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%`, position: 'fixed', top: 0, left: 0, height: '4px', zIndex: 10000 }}
      ></div>

      {/* Custom Cursor Elements */}
      <div className="cursor-dot" data-cursor-dot style={{ pointerEvents: 'none' }}></div>
      <div className="cursor-outline" data-cursor-outline style={{ pointerEvents: 'none' }}></div>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'active' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{
          opacity: showBackToTop ? 1 : 0,
          visibility: showBackToTop ? 'visible' : 'hidden',
          transition: 'all 0.3s ease-in-out',
          zIndex: 9999
        }}
      >
        <ion-icon name="chevron-up-outline"></ion-icon>
      </button>
    </>
  );
}
