import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import CartService from "../CartService";
import AIAgent from "../AIAgent";
import "./index.css";

const organicSteps = [
  {
    id: 1,
    title: "Land Preparation",
    img: "https://thumbs.dreamstime.com/b/prepare-soil-raise-trench-ready-planting-agricultural-land-day-prepare-soil-raise-trench-248360485.jpg",
    desc: "Prepare pits with compost, green manure, and mulch. Guava thrives in well-drained soil.",
    aiTip: "AI tip: Use soil sensors to decide compost application timing."
  },
  {
    id: 2,
    title: "Soil Testing (pH & Nutrients)",
    img: "https://i.pinimg.com/1200x/87/c7/a0/87c7a0b3ea1e1e26ed3cb49bd8d6a5d3.jpg",
    desc: "Guava prefers pH 6–7. Use organic amendments like lime or gypsum if needed.",
    aiTip: "AI tip: Mobile apps can suggest organic nutrient corrections."
  },
  {
    id: 3,
    title: "Planting & Spacing",
    img: "https://th.bing.com/th/id/OIP.ZxlWGRamT6psGW3X6dIJVQHaEK?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Plant seedlings at 5–6m spacing. Fill pits with compost and topsoil.",
    aiTip: "AI tip: Weather models help avoid planting during heavy rains."
  },
  {
    id: 4,
    title: "Fertilizer & Nutrient Management",
    img: "https://th.bing.com/th/id/OIP.VTciSuIusyax3_IYYsugTQHaEb?w=300&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Apply farmyard manure, neem cake, and biofertilizers regularly.",
    aiTip: "AI tip: Yield prediction tools can optimize organic input use."
  },
  
  {
    id: 5,
    title: "Irrigation & Harvest",
    img: "https://th.bing.com/th/id/OIP.z_RIU-uw3fvW9wmsodRATgHaFW?w=254&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Use drip irrigation with mulching. Harvest naturally ripened fruits.",
    aiTip: "AI tip: Smart irrigation scheduling tools notify best watering times."
  }
];

const organicInputs = [
  {
    id: "compost",
    name: "Organic Compost",
    image: "https://i.pinimg.com/1200x/fb/ca/bc/fbcabc7af36910f8ffa41f9e9a5cd7f4.jpg",
    price: "₹350 / 25kg",
    use: "Improves soil structure and provides slow-release nutrients"
  },
  {
    id: "neemcake",
    name: "Neem Cake",
    image: "https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg",
    price: "₹600 / 25kg",
    use: "Natural pest deterrent and soil enrichment"
  },
  {
    id: "biofert",
    name: "Biofertilizer Mix",
    image: "https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg",
    price: "₹450 / 10kg",
    use: "Azospirillum & Trichoderma for healthy root growth"
  }
];

const OrganicGuava = () => (
  <div>
    <Header />
    <div className="farming-detail-page">
      <div className="back-btn">
        <Link to="/crops/fruits/guava">⬅ Back to Guava</Link>
      </div>
      <h2 className="page-title">Step-by-step: Organic Guava Farming</h2>
      <p className="intro">Eco-friendly methods using compost, biofertilizers, and natural pest control.</p>

      <section className="steps-wrap">
        {organicSteps.map(s => (
          <article className="step-card" key={s.id}>
            <img src={s.img} alt={s.title} className="step-img" />
            <div className="step-body">
              <h3 className="step-title">{s.id}. {s.title}</h3>
              <p className="step-desc">{s.desc}</p>
              <div className="ai-tip"><strong>AI guidance:</strong> <span>{s.aiTip}</span></div>
              {s.title.toLowerCase().includes("soil") && (
                <div className="test-cta">
                  <Link to="/book-ph-test" className="book-test-btn">Book pH Test / Field Visit</Link>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="fert-section">
        <h3 className="section-title">Organic Fertilizers & Inputs</h3>
        <div className="fert-grid">
          {organicInputs.map(f => (
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
                      CartService.addItem({ id: f.id, name: f.name, price: f.price, type: "Fertilizer" });
                      alert("✅ Added to cart");
                    }}
                  >Add to Cart</button>
                  <Link to={`/machinery/fertilizers/${f.id}`} className="view-link">View</Link>
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

export default OrganicGuava;
