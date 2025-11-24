import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import CartService from "../CartService";
import AIAgent from "../AIAgent";
import "./index.css";

const InorganicWheat = () => {
  return (
    <div>
      <Header />

      <div className="farming-detail-page">

        {/* BACK BUTTON */}
        <div className="back-btn">
          <Link to="/crops/grains/wheat">⬅ Back to Wheat</Link>
        </div>

        {/* PAGE TITLE */}
        <h2 className="page-title">Inorganic Wheat Farming — Step-by-Step Guide</h2>

        {/* STEP 1 */}
        <div className="step-box">
          <h3 className="step-title">🚜 Step 1: Land Preparation</h3>

          <div className="step-flex">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.7RYLWpGEIbkSe9LEAZgc9wHaEV?rs=1&pid=ImgDetMain"
              alt="Land Preparation"
              className="step-img"
            />

            <p className="step-desc">
              Plough 2–3 times until the soil becomes fine and weed-free. Proper land 
              prep ensures stronger root systems and better fertilizer absorption.
            </p>
          </div>

          <div className="ai-box">
            🤖 AI Tip: Soil moisture sensors help identify the best time for land preparation.
          </div>
        </div>

        {/* STEP 2 */}
        <div className="step-box">
          <h3 className="step-title">🌾 Step 2: Seed Selection & Sowing</h3>

          <div className="step-flex">
            <img
              src="https://www.agrivi.com/wp-content/uploads/2017/04/Sowing-of-Wheat.jpg"
              alt="Sowing"
              className="step-img"
            />

            <p className="step-desc">
              Choose HYV seeds and sow at 20×5 cm spacing. Do not sow too deep as it can reduce germination.
            </p>
          </div>
        </div>

        {/* STEP 3 — FERTILIZERS */}
        <div className="step-box">
          <h3 className="step-title">💧 Step 3: Fertilizer Application</h3>

          <p className="step-desc">
            Apply fertilizers at the correct stage to boost yield and ensure healthy crop growth.
          </p>

          {/* Fertilizer Card Layout Like Organic Wheat */}
          <section className="fert-section">
            <h3 className="section-title">Fertilizers & Nutrients</h3>
            <p className="small-note">Tap a product to view details or add to cart.</p>

            <div className="fert-grid">

              {/* DAP */}
              <div className="fert-card">
                <img src="https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg" className="fert-img" />
                <div className="fert-name">DAP</div>
                <div className="fert-use">Strong root development</div>
                <div className="fert-price">₹1,250 (100 kg/acre)</div>

                <div className="fert-actions">
                  <button
                    className="add-to-cart"
                    onClick={() =>
                      CartService.addItem({ name: "DAP", price: "₹1250", type: "Fertilizer" })
                    }
                  >
                    Add to Cart
                  </button>

                  <Link to="/machinery/fertilizers/dap" className="view-link">
                    View
                  </Link>
                </div>
              </div>

              {/* UREA */}
              <div className="fert-card">
                <img src="https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg" className="fert-img" />
                <div className="fert-name">Urea</div>
                <div className="fert-use">Nitrogen for vigorous growth</div>
                <div className="fert-price">₹650 (50 kg/acre)</div>

                <div className="fert-actions">
                  <button
                    className="add-to-cart"
                    onClick={() =>
                      CartService.addItem({ name: "Urea", price: "₹650", type: "Fertilizer" })
                    }
                  >
                    Add to Cart
                  </button>

                  <Link to="/machinery/fertilizers/urea" className="view-link">
                    View
                  </Link>
                </div>
              </div>

              {/* POTASH */}
              <div className="fert-card">
                <img src="https://i.pinimg.com/736x/29/2f/21/292f21eb356ba7ce1a4966232392af72.jpg" className="fert-img" />
                <div className="fert-name">Potash</div>
                <div className="fert-use">Improves immunity & stress tolerance</div>
                <div className="fert-price">₹800 (20 kg/acre)</div>

                <div className="fert-actions">
                  <button
                    className="add-to-cart"
                    onClick={() =>
                      CartService.addItem({ name: "Potash", price: "₹800", type: "Fertilizer" })
                    }
                  >
                    Add to Cart
                  </button>

                  <Link to="/machinery/fertilizers/potash" className="view-link">
                    View
                  </Link>
                </div>
              </div>

            </div>
          </section>

          <div className="ai-box">
            🤖 AI Nutrient Alert: Low potassium zones detected — Potash recommended for this region.
          </div>
        </div>

        {/* STEP 4 — PESTICIDES */}
        <div className="step-box">
          <h3 className="step-title">🛡 Step 4: Pest & Disease Management</h3>

          <p className="step-desc">
            Common wheat threats include rust, termites, fungus & leaf blight. Use the right pesticides.
          </p>

          <section className="fert-section">
            <h3 className="section-title">Pesticides</h3>
            <p className="small-note">Tap on product to view details or buy.</p>

            <div className="fert-grid">

              {/* CHLORPYRIFOS */}
              <div className="fert-card">
                <img src="https://atfagrisciences.com/wp-content/uploads/2023/06/atf-agri-sci-product-chlorpyrifos.png" className="fert-img" />
                <div className="fert-name">Chlorpyrifos</div>
                <div className="fert-use">Controls termites & soil pests</div>
                <div className="fert-price">₹450</div>

                <div className="fert-actions">
                  <button
                    className="add-to-cart"
                    onClick={() =>
                      CartService.addItem({ name: "Chlorpyrifos", price: "₹450", type: "Pesticide" })
                    }
                  >
                    Add to Cart
                  </button>

                  <Link to="/machinery/pesticides/chlorpyrifos" className="view-link">
                    View
                  </Link>
                </div>
              </div>

              {/* BAVISTIN */}
              <div className="fert-card">
                <img src="https://tse1.mm.bing.net/th/id/OIP.rN5jbAKHLnLSKlxdCSuzyAHaLG" className="fert-img" />
                <div className="fert-name">Bavistin</div>
                <div className="fert-use">Controls fungal diseases</div>
                <div className="fert-price">₹320</div>

                <div className="fert-actions">
                  <button
                    className="add-to-cart"
                    onClick={() =>
                      CartService.addItem({ name: "Bavistin", price: "₹320", type: "Pesticide" })
                    }
                  >
                    Add to Cart
                  </button>

                  <Link to="/machinery/pesticides/bavistin" className="view-link">
                    View
                  </Link>
                </div>
              </div>

              {/* MANCOZEB */}
              <div className="fert-card">
                <img src="https://i.pinimg.com/1200x/02/62/1f/02621f95e1a087fb6f1bc308a36d9494.jpg" className="fert-img" />
                <div className="fert-name">Mancozeb</div>
                <div className="fert-use">Controls rust & leaf blight</div>
                <div className="fert-price">₹550</div>

                <div className="fert-actions">
                  <button
                    className="add-to-cart"
                    onClick={() =>
                      CartService.addItem({ name: "Mancozeb Fungicide", price: "₹550", type: "Pesticide" })
                    }
                  >
                    Add to Cart
                  </button>

                  <Link to="/machinery/pesticides/mancozeb fungicide" className="view-link">
                    View
                  </Link>
                </div>
              </div>

            </div>
          </section>

          <div className="ai-box">
            🤖 AI Pest Alert: High humidity increases fungal risks — Apply Mancozeb immediately.
          </div>
        </div>

        {/* STEP 5 */}
        <div className="step-box">
          <h3 className="step-title">🚿 Step 5: Irrigation</h3>

          <div className="step-flex">
            <img
              src="https://i.pinimg.com/1200x/1c/b0/4f/1cb04f24e77986dace046ed5d4eac0b2.jpg"
              alt="Irrigation"
              className="step-img"
            />

            <ul className="info-list">
              <li>🌱 CRI (Crown Root Initiation)</li>
              <li>🌾 Booting Stage</li>
              <li>💮 Flowering</li>
              <li>🌟 Grain Filling</li>
            </ul>
          </div>
        </div>

        {/* STEP 6 */}
        <div className="step-box">
          <h3 className="step-title">🌾 Step 6: Harvesting</h3>

          <div className="step-flex">
            <img
              src="https://i.pinimg.com/736x/83/e5/4f/83e54ff51c5ab016e4d563b447138c42.jpg"
              alt="Harvest"
              className="step-img"
            />

            <p className="step-desc">
              Harvest when grains turn golden-yellow and moisture drops below 20%. 
              Use a combine harvester for efficiency.
            </p>
          </div>

          <div className="ai-box">
            🤖 AI Tip: Dry winds next week — Ideal time for harvesting.
          </div>
        </div>
<AIAgent/>
      </div>
    </div>
  );
};

export default InorganicWheat;
