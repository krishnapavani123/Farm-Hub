import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";


const Fenugreek = () => {
  return (
    <div>
      <Header />
      <div className="grain-detail-page">
        <div className="back-btn">
          <Link to="/crops/spices">⬅ Back to Spices</Link>
        </div>

        <h2 className="page-title">Paddy Cultivation</h2>

        <div className="grain-info-container">
          <img
            src="https://i.pinimg.com/1200x/a0/89/4f/a0894fad1e8483cf76e069d8305c3f34.jpg"
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
          <Link to="/crops/spices/cardamom/organic" className="farm-btn organic">
            🌱 Organic Farming
          </Link>
          <Link to="/crops/spices/cardamom/inorganic" className="farm-btn inorganic">
            💧 Inorganic Farming
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fenugreek;
