import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLightbox } from '../components/LightboxContext';

export default function Placements() {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    document.title = "Placements | TechnoKraft - Best IT Courses Institute in Nashik";
  }, []);

  return (
    <main id="main-content">
      

    <section className="page-hero">
      <div className="container">
        <div className="section-label reveal-smooth">Our Pride & Achievement</div>
        <h1 className="reveal-scale">
          Placed <span className="shimmer-text">Students</span>
        </h1>
        <p className="reveal-smooth">
          3000+ students placed at top IT companies across India. Our commitment
          to 100% placement makes the difference.
        </p>
      </div>
    </section>

    <section className="services-section" style={{paddingTop: '60px'}}>
      <div className="container">
        <div className="placement-stats reveal-smooth">
          <div className="stat-box reveal-scale">
            <div className="num">3000+</div>
            <div className="lbl">Students Placed</div>
          </div>
          <div className="stat-box reveal-scale">
            <div className="num">250+</div>
            <div className="lbl">Hiring Companies</div>
          </div>
          <div className="stat-box reveal-scale">
            <div className="num">₹5 LPA</div>
            <div className="lbl">Avg. Package</div>
          </div>
          <div className="stat-box reveal-scale">
            <div className="num">100%</div>
            <div className="lbl">Placement Rate</div>
          </div>
        </div>

        <div className="section-header reveal-flip" style={{marginBottom: '40px'}}>
          <div className="section-label reveal-smooth">Our Recruiters</div>
          <h2 className="section-title">
            Top Companies That
            <span className="gradient-text">Hire Our Students</span>
          </h2>
        </div>
        <div className="company-strip reveal-smooth">
          <div className="company-chip">TCS</div>
          <div className="company-chip">Infosys</div>
          <div className="company-chip">Wipro</div>
          <div className="company-chip">Cognizant</div>
          <div className="company-chip">HCL Technologies</div>
          <div className="company-chip">Tech Mahindra</div>
          <div className="company-chip">Capgemini</div>
          <div className="company-chip">Accenture</div>
          <div className="company-chip">LTIMindtree</div>
          <div className="company-chip">Persistent Systems</div>
          <div className="company-chip">Mphasis</div>
          <div className="company-chip">Hexaware</div>
          <div className="company-chip">KPIT Technologies</div>
          <div className="company-chip">Zensar</div>
          <div className="company-chip">Oracle</div>
          <div className="company-chip">IBM</div>
          <div className="company-chip">Sopra Steria</div>
          <div className="company-chip">Birlasoft</div>
        </div>

        <div className="section-header reveal-flip" style={{margin: '60px 0 40px'}}>
          <div className="section-label reveal-smooth">Recent Success Stories</div>
          <h2 className="section-title">
            Meet Our <span className="gradient-text">Placed Alumni</span>
          </h2>
        </div>

        <div className="placed-grid">
          <div
            className="placed-card reveal-smooth"
            data-name="Chetana Sonawane"
            data-role="Jr. Technical Executive"
            data-company="Matrix Smart Technologies Pvt. Ltd"
            data-pkg="₹2.5 LPA"
            data-init="CS"
          >
            <div className="placed-avatar">CS</div>
            <div className="placed-name">Chetana Sonawane</div>
            <div className="placed-role">Jr. Technical Executive</div>
            <div className="placed-company">
              Matrix Smart Technologies Pvt. Ltd.
            </div>
            <button className="placed-view-btn">
              View Profile <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>

          <div
            className="placed-card reveal-smooth"
            data-name="Jayesh Mahajan"
            data-role="Jr. Technical Executive"
            data-company="AVGN Infotech Pvt. Ltd."
            data-pkg="₹2.8 LPA"
            data-init="JM"
          >
            <div className="placed-avatar">JM</div>
            <div className="placed-name">Jayesh Mahajan</div>
            <div className="placed-role">Jr. Technical Executive</div>
            <div className="placed-company">AVGN Infotech Pvt. Ltd.</div>
            <button className="placed-view-btn">
              View Profile <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
          <div
            className="placed-card reveal-smooth"
            data-name="Kalyani Bachhav"
            data-role="Jr. Technical Executive"
            data-company="Matrix Smart Technologies Pvt. Ltd."
            data-pkg="₹2.3 LPA"
            data-init="KB"
          >
            <div className="placed-avatar">KB</div>
            <div className="placed-name">Kalyani Bachhav</div>
            <div className="placed-role">Jr. Technical Executive</div>
            <div className="placed-company">Matrix Smart Technologies Pvt. Ltd.</div>
            <button className="placed-view-btn">
              View Profile <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>

          <div
            className="placed-card reveal-smooth"
            data-name="Yash Ahire"
            data-role="Jr. Technical Executive"
            data-company="Matrix Smart Technologies Pvt. Ltd."
            data-pkg="₹2.2 LPA"
            data-init="YA"
          >
            <div className="placed-avatar">YA</div>
            <div className="placed-name">Yash Ahire</div>
            <div className="placed-role">Jr. Technical Executive</div>
            <div className="placed-company">Matrix Smart Technologies Pvt. Ltd.</div>
            <button className="placed-view-btn">
              View Profile <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>

          <div
            className="placed-card reveal-smooth"
            data-name="Tejas Thakur"
            data-role="Jr. Network Engineer"
            data-company="Cloud Armour IT Consultancy Pvt. Ltd."
            data-pkg="₹2.7 LPA"
            data-init="TT"
          >
            <div className="placed-avatar">TT</div>
            <div className="placed-name">Tejas Thakur</div>
            <div className="placed-role">Jr. Network Engineer</div>
            <div className="placed-company">Cloud Armour IT Consultancy Pvt. Ltd.</div>
            <button className="placed-view-btn">
              View Profile <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>

          <div
            className="placed-card reveal-smooth"
            data-name="Shubham Wani"
            data-role="Jr. Network Engineer"
            data-company="Cloud Armour IT Consultancy Pvt. Ltd."
            data-pkg="₹1.8 LPA"
            data-init="SW"
          >
            <div className="placed-avatar">SW</div>
            <div className="placed-name">Shubham Wani</div>
            <div className="placed-role">Jr. Network Engineer</div>
            <div className="placed-company">Cloud Armour IT Consultancy Pvt. Ltd.</div>
            <button className="placed-view-btn">
              View Profile <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>

          <div
            className="placed-card reveal-smooth"
            data-name="Sachin Gawai"
            data-role="Jr. Network Engineer"
            data-company="Cloud Armour IT Consultancy Pvt. Ltd."
            data-pkg="₹1.9 LPA"
            data-init="SG"
          >
            <div className="placed-avatar">SG</div>
            <div className="placed-name">Sachin Gawai</div>
            <div className="placed-role">Jr. Network Engineer</div>
            <div className="placed-company">Cloud Armour IT Consultancy Pvt. Ltd.</div>
            <button className="placed-view-btn">
              View Profile <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>

          <div
            className="placed-card reveal-smooth"
            data-name="Nandini Tambe"
            data-role="Linux Technical Support Executive"
            data-company="Milesweb Internet Services Pvt. Ltd."
            data-pkg="₹1.5 LPA"
            data-init="NT"
          >
            <div className="placed-avatar">NT</div>
            <div className="placed-name">Nandini Tambe</div>
            <div className="placed-role">Linux Technical Support Executive</div>
            <div className="placed-company">Milesweb Internet Services Pvt. Ltd.</div>
            <button className="placed-view-btn">
              View Profile <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="container">
        <div className="cta-banner reveal">
          <h2>
            Ready to Be Our Next
            <span className="gradient-text">Success Story?</span>
          </h2>
          <p>
            Enroll today and join 3000+ placed alumni building thriving tech
            careers.
          </p>
          <Link  to="/contact" className="btn-primary">Start Your Journey</Link>
        </div>
      </div>
    </section>

    {/* Profile Modal */}
    <div className="profile-modal-backdrop" id="profileModal">
      <div className="profile-modal">
        <div className="pm-header">
          <div className="pm-avatar" id="pmAvatar">RK</div>
          <div className="pm-info">
            <h3 id="pmName">Student Name</h3>
            <p className="pm-role" id="pmRole">Role</p>
          </div>
          <button className="pm-close" id="pmClose">
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <div className="pm-body">
          <div className="pm-row">
            <ion-icon name="business-outline"></ion-icon>
            <div>
              <div className="pm-label">Company</div>
              <div className="pm-val" id="pmCompany">-</div>
            </div>
          </div>
          <div className="pm-row">
            <ion-icon name="cash-outline"></ion-icon>
            <div>
              <div className="pm-label">Package</div>
              <div className="pm-val" id="pmPkg">-</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </main>
  );
}
