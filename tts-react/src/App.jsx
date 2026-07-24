import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollChoreography from './components/ScrollChoreography';
import { LightboxProvider } from './components/LightboxContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Placements from './pages/Placements';
import Certifications from './pages/Certifications';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Videos from './pages/Videos';
import Testimonials from './pages/Testimonials';
import TopInstitutes from './pages/TopInstitutes';
import Careers from './pages/Careers';
import CrashCourses from './pages/CrashCourses';
import Workshops from './pages/Workshops';
import SessionsSeminars from './pages/SessionsSeminars';
import CareerGuidance from './pages/CareerGuidance';
import ResumeBuilding from './pages/ResumeBuilding';
import InterviewPrep from './pages/InterviewPrep';
import CertPrograms from './pages/CertPrograms';
import ItSolutions from './pages/ItSolutions';
import MarketResearch from './pages/MarketResearch';
import DigitalMarketing from './pages/DigitalMarketing';
import CustomerSupport from './pages/CustomerSupport';

export default function App() {
  return (
    <Router>
      <LightboxProvider>
        <ScrollChoreography />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/top-institutes" element={<TopInstitutes />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/crash-courses" element={<CrashCourses />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/sessions-seminars" element={<SessionsSeminars />} />
          <Route path="/career-guidance" element={<CareerGuidance />} />
          <Route path="/resume-building" element={<ResumeBuilding />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route path="/cert-programs" element={<CertPrograms />} />
          <Route path="/it-solutions" element={<ItSolutions />} />
          <Route path="/market-research" element={<MarketResearch />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </LightboxProvider>
    </Router>
  );
}
