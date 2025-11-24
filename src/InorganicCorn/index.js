import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import CartService from "../CartService";
import AIAgent from "../AIAgent";
import "./index.css";

const steps = [
  {
    id: 1,
    title: "Land Preparation",
    img:
      "https://thumbs.dreamstime.com/b/prepare-soil-raise-trench-ready-planting-agricultural-land-day-prepare-soil-raise-trench-248360485.jpg",
    desc:
      "Plough 2–3 times, level the land and create a fine seedbed for uniform germination.",
    aiTip:
      "AI tip: Automated soil moisture forecasting helps schedule tillage operations precisely.",
  },
  {
    id: 2,
    title: "Soil Testing (pH & Nutrients)",
    img:
      "https://wpassets.graana.com/blog/wp-content/uploads/2022/06/Soil-testing-tips-for-the-perfect-fertilizer-application-e1569355003270.jpeg",
    desc:
      "Ideal pH is 6.0–7.5. Soil testing ensures balanced fertilizer application.",
    aiTip:
      "AI tip: Soil test apps analyse nutrient levels and instantly calculate NPK dosage.",
  },
  {
    id: 3,
    title: "Sowing",
    img:
      "https://i.pinimg.com/1200x/c6/ab/1a/c6ab1a4dc6e9143b7cdf2e250902919e.jpg",
    desc:
      "Use certified hybrid seeds. Maintain spacing of 60–70 cm between rows & 20–25 cm between plants.",
    aiTip:
      "AI tip: Weather prediction models help avoid sowing before heavy rainfall.",
  },
  {
    id: 4,
    title: "Fertilizer Application (NPK)",
    img:
      "https://i.pinimg.com/1200x/f8/1e/44/f81e443e1146acdea3a0af24d7efd875.jpg",
    desc:
      "Apply basal DAP or NPK. Top-dress Urea at knee-high and tasseling stages.",
    aiTip:
      "AI tip: Yield-forecasting tools optimize nitrogen doses and reduce wastage.",
  },
  {
    id: 5,
    title: "Pest & Disease Control",
    img:
      "https://i.pinimg.com/1200x/aa/e6/1c/aae61cdbe86d37626aaaf69340c13152.jpg",
    desc:
      "For fall armyworm, use recommended chemical insecticides only when necessary.",
    aiTip:
      "AI tip: Phone-camera AI detects FAW eggs & early damage before it spreads.",
  },
  {
    id: 6,
    title: "Irrigation & Harvest",
    img:
      "https://i.pinimg.com/1200x/77/7b/53/777b53c06177318f0420e397ce23f971.jpg",
    desc:
      "Irrigate at critical stages: germination, knee-high, tasseling, silking and grain filling.",
    aiTip:
      "AI tip: Smart irrigation alerts notify the exact watering needs & prevent overwatering.",
  },
];

const fertilizers = [
  {
    id: "urea",
    name: "Urea (Top Dressing)",
    image:
      "https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg",
    price: "₹650 / 50kg",
    use: "Main nitrogen source for strong vegetative growth",
  },
  {
    id: "dap",
    name: "DAP (Basal Dose)",
    image:
      "https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg",
    price: "₹1,250 / 50kg",
    use: "Essential early phosphorus for root growth",
  },
  {
    id: "potash",
    name: "Potash",
    image:
      "https://i.pinimg.com/736x/29/2f/21/292f21eb356ba7ce1a4966232392af72.jpg",
    price: "₹950 / 50kg",
    use: "Improves grain size, disease resistance & kernel weight",
  },
];




const InorganicCorn = () => {
  return (
    <div>
      <Header />

      <div className="farming-detail-page">
        <div className="back-btn">
          <Link to="/crops/grains/corn">⬅ Back to Corn</Link>
        </div>

        <h2 className="page-title">Step-by-step: Inorganic Corn Farming</h2>

        <p className="intro">
          Follow every step carefully. For pH or nutrient testing,{" "}
          <strong>book a field visit</strong> and our team will support you directly.
        </p>

        <section className="steps-wrap">
          {steps.map((s) => (
            <article className="step-card" key={s.id}>
              <img src={s.img} alt={s.title} className="step-img" />
              <div className="step-body">
                <h3 className="step-title">{s.id}. {s.title}</h3>
                <p className="step-desc">{s.desc}</p>

                <div className="ai-tip">
                  <strong>AI guidance:</strong> <span>{s.aiTip}</span>
                </div>

                {s.title.toLowerCase().includes("soil") ? (
                  <div className="test-cta">
                    <Link to="/book-ph-test" className="book-test-btn">
                      Book pH Test / Field Visit
                    </Link>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        <section className="fert-section">
          <h3 className="section-title">Fertilizers & Inputs</h3>
          <p className="small-note">Tap a product to view details. Use the Add to Cart button to buy.</p>

          <div className="fert-grid">
            {fertilizers.map((f) => (
              <div className="fert-card" key={f.id}>
                <img src={f.image} alt={f.name} className="fert-img" />
                <div className="fert-body">
                  <div className="fert-name">{f.name}</div>
                  <div className="fert-use">{f.use}</div>
                  <div className="fert-price">{f.price}</div>

                  <div className="fert-actions">
                    <button
                      className="add-to-cart"
                      onClick={() => {
                        CartService.addItem({
                          id: f.id,
                          name: f.name,
                          price: f.price,
                          type: "Fertilizer",
                        });
                        alert("✅ Added to cart");
                      }}
                      aria-label={`Add ${f.name} to cart`}
                    >
                      Add to Cart
                    </button>

                    <Link to={`/machinery/fertilizers/${f.id}`} className="view-link">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
<div className="fert-section">
  
  <p className="small-note">Tap to view details. Add to Cart to buy.</p>

  
  </div>


        <AIAgent />

        <section className="help-section">
          <h3 className="section-title">Help for Farmers</h3>
          <ul className="help-list">
            <li>Clear instructions make each step easy to follow.</li>
            <li>Click “Book pH Test / Field Visit” for on-field assistance.</li>
            <li>AI tools can help detect pests like FAW early to reduce losses.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default InorganicCorn;
