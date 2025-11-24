import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";


const Millets = () => {
  return (
    <div>
      <Header />
      <div className="grain-detail-page">
        <div className="back-btn">
          <Link to="/crops/grains">⬅ Back to Grains</Link>
        </div>

        <h2 className="page-title">Wheat Cultivation</h2>

        <div className="grain-info-container">
          <img
            src="https://i.pinimg.com/736x/d9/24/27/d9242777a2e7c009fa4a4ed5bace7765.jpg"
            alt="Wheat"
            className="grain-image"
          />
          <p className="grain-description">
            Wheat is one of India’s most important cereal crops, grown mainly in
            northern states such as Punjab, Haryana, Uttar Pradesh, and Madhya
            Pradesh. It is a rabi crop, sown in winter and harvested in summer.
          </p>
        </div>

        <h3 className="section-title">Choose Your Farming Method</h3>
        <div className="farming-options">
          <Link to="/crops/grains/millets/organic" className="farm-btn organic">
            🌱 Organic Farming
          </Link>
          <Link to="/crops/grains/millets/inorganic" className="farm-btn inorganic">
            💧 Inorganic Farming
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Millets;
