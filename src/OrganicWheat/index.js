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
      "https://tse3.mm.bing.net/th/id/OIP.7RYLWpGEIbkSe9LEAZgc9wHaEV?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc:
      "Clear weeds, plough deeply and level the land. Break big clods into fine tilth so seeds sit well.",
    aiTip:
      "AI tip: Use simple soil-moisture sensors to decide when to plough. Sensors save water and time.",
  },
  {
    id: 2,
    title: "Soil Testing (pH & Nutrients)",
    img:
      "https://i.pinimg.com/1200x/87/c7/a0/87c7a0b3ea1e1e26ed3cb49bd8d6a5d3.jpg",
    desc:
      "Test soil pH and nutrients before sowing. Good soil helps good plants.",
    aiTip:
      "AI tip: Mobile apps can read test results and suggest exact fertilizer mixes for the soil.",
  },
  {
    id: 3,
    title: "Sowing",
    img:
      "https://kj1bcdn.b-cdn.net/media/56276/sri.jpg?width=1200",
    desc:
      "Sow seeds at recommended depth and spacing for your variety. Do not sow too deep.",
    aiTip:
      "AI tip: Use weather forecast models to pick the best sowing day (avoid rains immediately after sowing).",
  },
  {
    id: 4,
    title: "Fertilizer & Nutrients",
    img:
      "https://www.shutterstock.com/image-photo/orai-uttar-pradesh-indiafebruary-15-600nw-1868137396.jpg",
    desc:
      "Apply compost or recommended fertilizers at the right time (basal + top dressing).",
    aiTip:
      "AI tip: Use yield-prediction tools to adjust fertilizer doses for better returns.",
  },
  {
    id: 5,
    title: "Pest & Disease Management",
    img:
      "https://tse2.mm.bing.net/th/id/OIP.QOuY0rKxPJSIYqXY1P95WQHaE8?w=1500&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3",
    desc:
      "Monitor often. Use organic solutions first (Neem oil). Apply chemical pesticides only when needed.",
    aiTip:
      "AI tip: Image-based pest detectors (phone camera + simple app) can detect early infestations.",
  },
  {
    id: 6,
    title: "Irrigation & Harvest",
    img:
      "https://c8.alamy.com/comp/TAR98N/female-farmer-harvesting-wheat-crops-in-a-wheat-field-TAR98N.jpg",
    desc:
      "Irrigate at key crop stages and harvest when grain moisture is right to avoid losses.",
    aiTip:
      "AI tip: Scheduling tools can notify you the best irrigation windows and optimal harvest date.",
  },
];

const fertilizers = [
  {
    id: "compost",
    name: "Organic Compost",
    image:
      "https://i.pinimg.com/1200x/fb/ca/bc/fbcabc7af36910f8ffa41f9e9a5cd7f4.jpg",
    price: "₹350 / 25kg",
    use: "Baseline organic matter and slow nutrients release",
  },
  {
    id: "urea",
    name: "Urea (Split top dressing)",
    image:
      "https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg",
    price: "₹650 / 50kg",
    use: "Nitrogen supply for better tillering and grain filling",
  },
  {
    id: "dap",
    name: "DAP (Basal P & N)",
    image:
      "https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg",
    price: "₹1,250 / 50kg",
    use: "Phosphorus for root development and early growth",
  },
];

const OrganicWheat = () => {
  return (
    <div>
      <Header />

      <div className="farming-detail-page">
        <div className="back-btn">
          <Link to="/crops/grains/wheat">⬅ Back to Wheat</Link>
        </div>

        <h2 className="page-title">Step-by-step: Organic Wheat Farming</h2>

        <p className="intro">
          Simple steps with pictures — follow each step. For pH or lab tests, <strong>book a field test</strong> below and a member will come to your field.
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

                {/* If step is soil testing, show book pH test CTA */}
                {s.title.toLowerCase().includes("soil") ||
                s.title.toLowerCase().includes("soil testing") ? (
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

                    <Link
                      to={`/machinery/fertilizers/${f.id}`}
                      className="view-link"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
<AIAgent/>
        <section className="help-section">
          <h3 className="section-title">Help for Farmers</h3>
           <ul className="help-list">
    <li>All steps are explained in simple language so every farmer can follow them easily.</li>
    <li>If reading is difficult, you can call a local helper or click the “Book pH Test / Field Visit” button — our team member will come to your field and guide you.</li>
    <li>Farmers with smartphones can use the camera-based pest detection feature for quick AI support and early problem identification.</li>
  </ul>
        </section>
      </div>
    </div>
  );
};

export default OrganicWheat;
