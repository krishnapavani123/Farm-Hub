import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";


const OrganicPotato = () => {
  return (
    <div>
      <Header />
      <div className="farming-detail-page">
        <div className="back-btn">
          <Link to="/crops/vegetables/potato">⬅ Back to Potato</Link>
        </div>

        <h2 className="page-title">Organic Wheat Farming</h2>

        <div className="content-section">
          <img
            src="https://i.pinimg.com/736x/8d/43/31/8d4331f384ad7699ff511251bd0c11e2.jpg"
            alt="Organic Wheat"
            className="farm-image"
          />
          <p className="farm-description">
            Organic wheat cultivation avoids synthetic chemicals, focusing on
            soil health, crop rotation, and natural fertilizers. It ensures
            chemical-free food and better long-term sustainability for the soil.
          </p>
        </div>

        <h3 className="section-title">Farming Guidelines</h3>
        <ul className="info-list">
          <li><b>Soil Type:</b> Loamy or clay-loam with good drainage.</li>
          <li><b>Fertilizers:</b> Use compost, green manure, and cow dung-based inputs.</li>
          <li><b>Pest Control:</b> Neem oil and biological pest regulators.</li>
          <li><b>Irrigation:</b> Limited irrigation at key stages (crown root initiation, flowering).</li>
          <li><b>Yield:</b> 20–25 quintals/acre under ideal conditions.</li>
        </ul>
      </div>
    </div>
  );
};

export default OrganicPotato;
