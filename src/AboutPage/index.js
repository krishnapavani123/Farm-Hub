import React from "react";
import Header from "../Header";
import "./index.css";

const AboutPage = () => {
return ( <div className="about-page"> <Header />


  {/* Hero Section */}
  <section className="about-hero">
    <h1>About FarmHub</h1>
    <p>
      Bridging tradition and technology — empowering every farmer to grow
      smarter, live greener, and thrive sustainably.
    </p>
  </section>

  {/* Mission */}
  <section className="mission-section">
    <h2>Our Mission</h2>
    <p>
      At <strong>FarmHub</strong>, we unite organic wisdom and
      AI-driven precision. Our mission is to transform agriculture into a
      sustainable, data-informed, and profitable ecosystem for farmers
      across India.
    </p>
  </section>

  {/* Story */}
  <section className="story-section">
    <h2>Our Story</h2>
    <p>
      FarmHub began with a vision to make modern tools accessible to every
      farmer. We saw how digital innovation often ignored the roots of
      traditional farming — so we built a bridge. Today, we connect farmers,
      suppliers, and researchers through a single intelligent platform that
      respects both soil and science.
    </p>
  </section>

  {/* What We Do */}
  <section className="what-we-do">
    <h2>What We Do</h2>
    <div className="service-grid">
      <div className="service-card">
        <span className="icon">🌾</span>
        <h3>Smart Crop Insights</h3>
        <p>
          AI-based recommendations for soil health, irrigation, and crop
          rotation.
        </p>
      </div>
      <div className="service-card">
        <span className="icon">🛒</span>
        <h3>Farmer Marketplace</h3>
        <p>
          Buy and sell seeds, organic products, and farm equipment directly
          with verified partners.
        </p>
      </div>
      <div className="service-card">
        <span className="icon">📚</span>
        <h3>Learning Hub</h3>
        <p>
          Access resources that blend tradition with technology — from
          organic methods to AI tutorials.
        </p>
      </div>
    </div>
  </section>

  {/* Why Choose */}
  <section className="why-choose">
    <h2>Why Choose FarmHub</h2>
    <ul>
      <li>🌱 AI meets nature — balanced innovation for real farmers.</li>
      <li>🌍 Accessible for both rural and urban cultivators.</li>
      <li>✅ Verified suppliers and transparent pricing.</li>
      <li>🗣️ Multilingual and farmer-first platform.</li>
    </ul>
  </section>

  {/* Vision */}
  <section className="vision-section">
    <h2>Our Vision</h2>
    <p>
      We believe the future of farming isn’t machines replacing farmers —
      it’s technology empowering them. Together, we cultivate progress.
    </p>
  </section>

  {/* Footer */}
  <footer className="about-footer">
    <p>© 2025 FarmHub | Cultivating Smarter Futures Together</p>
  </footer>
</div>


);
};

export default AboutPage;
