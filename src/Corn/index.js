import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Corn = () => {
  return (
    <div>
      <Header />
      <div className="grain-detail-page">
        <div className="back-btn">
          <Link to="/crops/grains">⬅ Back to Grains</Link>
        </div>

        <h2 className="page-title">Corn Cultivation</h2>

        <div className="grain-info-container">
          <img
            src="https://i.pinimg.com/736x/4c/f5/58/4cf5583bb8c239dec0d5e659f9beb1ca.jpg"
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
          <Link to="/crops/grains/corn/organic" className="farm-btn organic">
            🌱 Organic Farming
          </Link>
          <Link to="/crops/grains/corn/inorganic" className="farm-btn inorganic">
            💧 Inorganic Farming
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Corn;
