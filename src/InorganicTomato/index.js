import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";


const InorganicTomato = () => {
  return (
    <div>
      <Header />
      <div className="farming-detail-page">
        <div className="back-btn">
          <Link to="/crops/vegetables/tomato">⬅ Back to Tomato</Link>
        </div>

        <h2 className="page-title">Inorganic Wheat Farming</h2>

        <div className="content-section">
          <img
            src="https://i.pinimg.com/736x/33/eb/a5/33eba579d76a096f19e4e20630daeb28.jpg"
            alt="Inorganic Wheat"
            className="farm-image"
          />
          <p className="farm-description">
            Inorganic wheat farming relies on chemical fertilizers and
            pesticides for higher productivity. While it provides quick yields,
            it requires precise soil and water management to prevent degradation.
          </p>
        </div>

        <h3 className="section-title">Farming Guidelines</h3>
        <ul className="info-list">
          <li><b>Soil Type:</b> Fertile loam with moderate moisture.</li>
          <li><b>Fertilizers:</b> NPK 120:60:40 kg/ha; urea and DAP are commonly used.</li>
          <li><b>Pest Control:</b> Synthetic pesticides for aphids and rusts.</li>
          <li><b>Irrigation:</b> 5–6 rounds, especially during grain formation.</li>
          <li><b>Yield:</b> 35–40 quintals/acre under intensive care.</li>
        </ul>
      </div>
    </div>
  );
};

export default InorganicTomato;
