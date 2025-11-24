import React, { Component } from "react";
import Carousel from "../carousel";
import Header from "../Header";
import "./index.css";

class MainPage extends Component {
  render() {
    return (
      <div className="home-page">
        <Header />

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-overlay">
            <h1 className="hero-quote">
              “Farming is not a job, it’s a way of life.”
            </h1>
            <p className="hero-subtext">
             Organic Roots. Digital Wings.


            </p>
          </div>
        </section>

        {/* Carousel Section */}
        <Carousel />

        {/* Mission Section */}
        <section className="aim-section">
          <h2>Our Mission</h2>
          <p>
            FarmHub empowers farmers by blending <strong>organic wisdom</strong>{" "}
            with <strong>AI-driven innovation</strong>. From nurturing the soil
            to predicting harvests, we unite nature and technology to cultivate
            a smarter, sustainable tomorrow.
          </p>
        </section>

        {/* Smart Crops Section */}
      {/* Smart Crops Section */}
<section className="smart-crops">
  <h2>Our Works</h2>
  <div className="scroll-gallery">
    <div className="scroll-track">
      <img src="https://i.pinimg.com/736x/d6/ed/4d/d6ed4d80b0ea2c7ab9c7ba78d7b7b818.jpg" alt="Wheat" />
      <img src="https://i.pinimg.com/1200x/a2/91/31/a29131ada27602e5c341aa25f794dd1e.jpg" alt="Tomato" />
      <img src="https://i.pinimg.com/1200x/ea/83/12/ea831267737476b9bb2bad554b531b50.jpg" alt="Corn" />
      <img src="https://i.pinimg.com/1200x/08/8b/7c/088b7cd089a36c97cb202c7cf341a542.jpg" alt="Banana" />
      <img src="https://i.pinimg.com/1200x/60/59/36/60593605da015149338d21ef0a3d93db.jpg" alt="Wheat" />
      <img src="https://i.pinimg.com/736x/09/10/14/091014973edd33216419c1c3fd87b8cd.jpg" alt="Tomato" />
      <img src="https://i.pinimg.com/736x/3f/48/6d/3f486d86661b8f9c8dd10a00b21c928f.jpg" alt="Corn" />
      <img src="https://i.pinimg.com/1200x/de/5c/f5/de5cf503edbd8e11f92dee5b5c00c32a.jpg" alt="Banana" />
       <img src="https://i.pinimg.com/736x/c7/a9/02/c7a902e02fc05918537dc379603cadac.jpg" alt="Wheat" />
      <img src="https://i.pinimg.com/1200x/ee/d2/6b/eed26b8fb66fdcbd0101a0c1b584ed4a.jpg" alt="Tomato" />
      <img src="https://i.pinimg.com/736x/41/63/e2/4163e2aadac91d3de72bdfad5c0ca13c.jpg" alt="Corn" />
      <img src="https://i.pinimg.com/1200x/bd/73/65/bd7365aca221aee15f1bc6937d24c05e.jpg" alt="Banana" />
      <img src="https://i.pinimg.com/1200x/9e/02/6c/9e026ce124c37cc02dcc69767791ae2c.jpg" alt="Wheat" />
      <img src="https://i.pinimg.com/736x/d9/b3/9d/d9b39d408a5b2f9735ef4729fe59c28d.jpg" alt="Tomato" />
    </div>
  </div>
</section>


        {/* Agri-Tech Innovation */}
        <section className="innovation-section">
          <h2>Agri-Tech Innovation</h2>
          <div className="innovation-grid">
            <div className="innovation-card">
              <h3>🚁 Drone Crop Monitoring</h3>
              <p>Real-time aerial insights improve crop health and yield.</p>
            </div>
            <div className="innovation-card">
              <h3>🌱 Soil Health AI Reports</h3>
              <p>Smart algorithms analyze soil patterns for optimized nutrition.</p>
            </div>
            <div className="innovation-card">
              <h3>💧 Smart Irrigation Systems</h3>
              <p>Automated irrigation saves water and boosts efficiency.</p>
            </div>
            <div className="innovation-card">
              <h3>📊 Market Prediction</h3>
              <p>AI models forecast prices, helping farmers sell smarter.</p>
            </div>
          </div>
        </section>

        {/* Farmer Stories */}
        <section className="stories-section">
          <h2>Farmer Stories</h2>
          <div className="stories-grid">
            <div className="story-card">
              <p>
                “Using FarmHub’s insights, my water usage dropped by 30% while yield increased.”
              </p>
              <h4>- Ravi, Maharashtra</h4>
            </div>
            <div className="story-card">
              <p>
                “AI-driven soil analysis helped me switch to crops that thrive locally.”
              </p>
              <h4>- Lakshmi, Andhra Pradesh</h4>
            </div>
            <div className="story-card">
              <p>
                “The platform connects me directly with organic buyers across India.”
              </p>
              <h4>- Karan, Punjab</h4>
            </div>
          </div>
          <button className="cta-btn">Join Our Community →</button>
        </section>

        {/* Impact Metrics */}
        <section className="impact-section">
          <h2>Our Impact</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <h3>🌍</h3>
              <p>10K+ Farmers Empowered</p>
            </div>
            <div className="impact-item">
              <h3>💧</h3>
              <p>25% Water Saved</p>
            </div>
            <div className="impact-item">
              <h3>🌿</h3>
              <p>5K+ Acres Digitally Cultivated</p>
            </div>
            <div className="impact-item">
              <h3>⚙️</h3>
              <p>98% Predictive Accuracy</p>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="get-involved">
          <h2>Get Involved</h2>
          <div className="involved-grid">
            <div className="involved-card">
              <h3>👨‍🌾 For Farmers</h3>
              <p>Register to digitize your farm with FarmHub’s smart tools.</p>
              <button>Register</button>
            </div>
            <div className="involved-card">
              <h3>💰 For Investors</h3>
              <p>Support the future of sustainable agri-tech innovation.</p>
              <button>Invest</button>
            </div>
            <div className="involved-card">
              <h3>💻 For Developers</h3>
              <p>Contribute to our open-source agri-intelligence ecosystem.</p>
              <button>Collaborate</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-quote">“The future belongs to those who cultivate it.”</p>
          <p className="footer-text">© 2025 FarmHub | Cultivating Smarter Futures Together</p>
        </footer>
      </div>
    );
  }
}

export default MainPage;
