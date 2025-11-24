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
    img: "https://i.pinimg.com/736x/1d/35/a0/1d35a06ffc0511e0425248b27056895b.jpg",
    desc: "Clear weeds, plough 30–40 cm, level the land and add compost to improve soil structure.",
    aiTip: "Use moisture sensors to avoid over-irrigating while preparing basins for apple planting."
  },
  {
    id: 2,
    title: "Soil Testing & pH Correction",
    img: "https://i.pinimg.com/736x/bd/80/06/bd800671ba8d66c99c1068b6aafb57d6.jpg",
    desc: "Test soil for pH (ideal 6.0–6.5). Add lime if pH is low. Organic matter must be ≥ 2%.",
    aiTip: "Use AI soil-test apps to get instant nutrient deficiency predictions.",
  },
  {
    id: 3,
    title: "Planting",
    img: "https://i.pinimg.com/736x/a0/b0/be/a0b0be94965736b2a0c81d026ee98944.jpg",
    desc: "Plant during dormancy. Dig 60×60×60 cm pits, fill with compost, and place sapling with graft above soil.",
    aiTip: "Simple GPS markers ensure correct spacing in terraced orchards.",
  },
  {
    id: 4,
    title: "Training & Pruning",
    img: "https://i.pinimg.com/736x/e4/a9/e5/e4a9e5201b2d55deff203010e7e34b7d.jpg",
    desc: "Shape the central leader system in the first two years. Remove dead and intersecting branches.",
    aiTip: "AI vision tools can suggest which branches to remove for ideal sunlight angles.",
  },
  {
    id: 5,
    title: "Organic Nutrition",
    img: "https://i.pinimg.com/1200x/11/57/70/115770964e31f80c663110e3f459d8dd.jpg",
    desc: "Apply FYM 20–25 kg/tree and vermicompost 5–10 kg/tree twice yearly. Use liquid seaweed monthly.",
    aiTip: "Use crop-growth prediction tools to adjust organic inputs for fruit size.",
  },
  {
    id: 6,
    title: "Pest & Disease (Organic)",
    img: "https://i.pinimg.com/736x/d5/86/10/d586102cf2e39de93c47954b9f723653.jpg",
    desc: "Use neem oil (2%), Bt sprays for caterpillars, pheromone traps and copper-based sprays for scab.",
    aiTip: "Camera-based early disease detection reduces losses by 20–30%.",
  },
  {
    id: 7,
    title: "Irrigation & Fruit Development",
    img: "https://i.pinimg.com/736x/30/78/ad/3078ad170910f0b58b4baf495de923c5.jpg",
    desc: "Irrigate deeply at flowering and fruit enlargement. Maintain mulch to reduce water loss.",
    aiTip: "AI irrigation schedulers predict the exact watering window for fruit size.",
  },
  {
    id: 8,
    title: "Harvesting",
    img: "https://i.pinimg.com/736x/e0/78/f8/e078f8a18081e5463b20223c3bd84715.jpg",
    desc: "Harvest when apples reach full color and sweetness. Handle gently and avoid bruising.",
    aiTip: "Use phone apps to check harvest maturity by color index.",
  },
];

const organicInputs = [
  {
    id: "fym",
    name: "Farmyard Manure",
    image: "https://i.pinimg.com/1200x/fb/ca/bc/fbcabc7af36910f8ffa41f9e9a5cd7f4.jpg",
    price: "₹400 / 25kg",
    use: "Improves soil fertility and structure."
  },
  {
    id: "vermi",
    name: "Vermicompost",
    image: "https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg",
    price: "₹250 / 10kg",
    use: "Boosts root growth and microbial activity."
  },
  {
    id: "neem-oil",
    name: "Neem Oil",
    image: "https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg",
    price: "₹180 / Litre",
    use: "Organic pest control for insects and mites."
  },
];

const OrganicApple = () => {
  return (
    <div>
      <Header />

      <div className="farming-detail-page">
        <div className="back-btn">
          <Link to="/crops/fruits/apple">⬅ Back to Apple</Link>
        </div>

        <h2 className="page-title">Organic Apple Farming – Step-by-Step Guide</h2>

        <p className="intro">
          Clear steps with pictures. Follow each step carefully to get high-quality organic apples.
        </p>

        <section className="steps-wrap">
          {organicSteps.map((s) => (
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
                      Book Soil / pH Test
                    </Link>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        <section className="fert-section">
          <h3 className="section-title">Organic Inputs</h3>
          <p className="small-note">Tap a product to view details or add to cart.</p>

          <div className="fert-grid">
            {organicInputs.map((f) => (
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
                          type: "Organic Input",
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

        <section className="help-section">
          <h3 className="section-title">Help for Farmers</h3>
          <ul className="help-list">
            <li>All steps are explained in simple language.</li>
            <li>You can book a field visit for soil tests.</li>
            <li>AI pest detection helps find early diseases.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default OrganicApple;
