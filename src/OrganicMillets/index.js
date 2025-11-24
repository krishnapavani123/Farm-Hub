import React from "react";
import { Link } from "react-router-dom";
import CartService from "../CartService";
import Header from "../Header";
import "./index.css";

const steps = [
  {
    id: 1,
    title: "Land Preparation",
    img: "https://thumbs.dreamstime.com/b/rice-stubble-beauty-fields-harvest-82121354.jpg",
    desc: "Deep ploughing and leveling for good aeration. Remove weeds and prepare fine tilth.",
    aiTip: "AI tools can monitor soil moisture to suggest ideal ploughing times."
  },
  {
    id: 2,
    title: "Soil Testing",
    img: "https://th.bing.com/th/id/OIP.5xqXCA0owGR5keplo_kBpwHaE7?w=253&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Check pH (6–7) and measure organic carbon before sowing.",
    aiTip: "Mobile apps can analyze pH readings and recommend nutrient corrections."
  },
  {
    id: 3,
    title: "Sowing",
    img: "https://th.bing.com/th/id/OIP.geqQDMWysPoh2qiu830_ngHaEK?w=276&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Use certified seeds. Maintain consistent spacing based on millet variety.",
    aiTip: "Weather-based sowing tools can help avoid sowing before heavy rainfall."
  },
  {
    id: 4,
    title: "Organic Fertilizers",
    img: "https://th.bing.com/th/id/OIP.1YbYYQ0NA69tJnsq21u-iAHaEL?w=325&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Apply compost, FYM and liquid manures (Jeevamrut, Panchagavya).",
    aiTip: "AI yield estimators can suggest nutrient quantities season-wise."
  },
 
];

const fertilizers = [
  {
    id: "Neem Cake",
    name: "Neem Cake",
    price: "₹300 / 25kg",
    image: "https://i.pinimg.com/736x/f3/50/8e/f3508e4afa735742280a6ef0298539cc.jpg",
    use: "Improves soil structure and boosts microorganisms"
  },
  {
    id: "vermicompost",
    name: "Vermicompost",
    price: "₹450 / 25kg",
    image: "https://i.pinimg.com/736x/75/58/80/755880fbdd1f6551bc7c2032af8c50a5.jpg",
    use: "Slow nutrient release for long millet cycles"
  }
];

const OrganicMillets = () => {
  return (
    <div className="millets-page">
      <Header/>
      <h2 className="page-title">Organic Millet Farming</h2>

      <section className="steps-wrap">
        {steps.map((s) => (
          <article className="step-card" key={s.id}>
            <img className="step-img" src={s.img} alt={s.title} />
            <div className="step-body">
              <h3>{s.id}. {s.title}</h3>
              <p>{s.desc}</p>
              <div className="ai-tip"><strong>AI Guidance:</strong> {s.aiTip}</div>

              {s.title.toLowerCase().includes("soil") && (
                <div className="test-cta">
                  <Link to="/book-ph-test" className="book-test-btn">
                    Book Soil pH Test
                  </Link>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="fert-section">
        <h3>Organic Inputs</h3>
        <div className="fert-grid">
          {fertilizers.map((f) => (
            <div className="fert-card" key={f.id}>
              <img className="fert-img" src={f.image} alt={f.name} />
              <div className="fert-name">{f.name}</div>
              <div className="fert-use">{f.use}</div>
              <div className="fert-price">{f.price}</div>

              <button
                className="add-to-cart"
                onClick={() => {
                  CartService.addItem({
                    id: f.id,
                    name: f.name,
                    price: f.price,
                  });
                  alert("Added to cart");
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OrganicMillets;
