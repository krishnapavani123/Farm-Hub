import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import CartService from "../CartService";
import AIAgent from "../AIAgent";
import "./index.css";

const inorganicSteps = [
  {
    id: 1,
    title: "Land Preparation",
    img: "https://tse2.mm.bing.net/th/id/OIP.DqbLAXBfwNEh1be2AljtQgHaED?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc:
      "Plough 2–3 times, prepare pits, and mix soil with chemical basal dose fertilizers.",
    aiTip:
      "AI tip: Use digital soil maps to identify fertilizer needs before planting.",
  },
  {
    id: 2,
    title: "Soil Testing",
    img: "https://i.pinimg.com/1200x/87/c7/a0/87c7a0b3ea1e1e26ed3cb49bd8d6a5d3.jpg",
    desc: "Test for pH, NPK, Sulphur, and micronutrients.",
    aiTip:
      "AI tip: Apps can recommend exact fertilizer ratios based on pH and NPK levels.",
  },
  {
    id: 3,
    title: "Planting",
    img: "https://th.bing.com/th/id/OIP.ChA7NwYJtdy0aJgGpdEQnQHaE8?w=257&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc:
      "Use tissue culture plants for uniform growth. Maintain 6×6 ft spacing.",
    aiTip: "AI tip: Growth tracking tools help monitor survival rate.",
  },
  {
    id: 4,
    title: "Chemical Fertilizers (NPK)",
    img:
      "https://th.bing.com/th/id/OIP.SrubFqJ1-Q3ZDvBDUUT9UAHaFE?w=277&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc:
      "Apply Urea, DAP, and MOP in split doses: 30, 60, 90 days and at bunch initiation.",
    aiTip:
      "AI tip: Smart apps can notify exact fertilizer timing based on leaf color detection.",
  },
  {
    id: 5,
    title: "Pesticides & Disease Control",
    img:
      "https://th.bing.com/th/id/OIP.0KzqDDSFivwzzsJJp-YeoAHaE8?w=250&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc:
      "Use Chlorothalonil for leaf spot, Imidacloprid for aphids, and Quinalphos for weevils.",
    aiTip:
      "AI tip: Phone-based disease detection helps spot sigatoka early using leaf photos.",
  },
  {
    id: 6,
    title: "Irrigation & Harvest",
    img:
      "https://th.bing.com/th/id/OIP.8m0ex_Kl8Ia7oi1nWwdU9gHaE8?w=194&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc:
      "Irrigate every 5–7 days. Harvest at 80–90% maturity for transport-friendly fruit.",
    aiTip:
      "AI tip: Evapotranspiration-based irrigation apps reduce water waste.",
  },
];

const inorganicFertilizers = [
  {
    id: "urea",
    name: "Urea",
    image:
      "https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg",
    price: "₹650 / 50kg",
    use: "Supports fast plant growth",
  },
  {
    id: "mop",
    name: "MOP (Potash)",
    image: "https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg",
    price: "₹1,200 / 50kg",
    use: "Improves fruit size & sweetness",
  },
];

const InorganicBanana = () => {
  return (
    <div>
      <Header />

      <div className="farming-detail-page">
        <div className="back-btn">
          <Link to="/crops/fruits/banana">⬅ Back to Banana</Link>
        </div>

        <h2 className="page-title">Step-by-step: Inorganic Banana Farming</h2>

        <p className="intro">
          Simple chemical-based farming steps with AI recommendations.
        </p>

        <section className="steps-wrap">
          {inorganicSteps.map((s) => (
            <article className="step-card" key={s.id}>
              <img src={s.img} alt={s.title} className="step-img" />
              <div className="step-body">
                <h3 className="step-title">{s.id}. {s.title}</h3>
                <p className="step-desc">{s.desc}</p>

                <div className="ai-tip">
                  <strong>AI guidance:</strong> <span>{s.aiTip}</span>
                </div>

                {s.title.toLowerCase().includes("soil") && (
                  <div className="test-cta">
                    <Link to="/book-ph-test" className="book-test-btn">
                      Book Soil / pH Test
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="fert-section">
          <h3 className="section-title">Chemical Fertilizers</h3>

          <div className="fert-grid">
            {inorganicFertilizers.map((f) => (
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
                        alert("Added to cart");
                      }}
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

        <AIAgent />
      </div>
    </div>
  );
};

export default InorganicBanana;
