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
    img: "https://i.pinimg.com/736x/1d/35/a0/1d35a06ffc0511e0425248b27056895b.jpg",
    desc: "Deep plough (30–40 cm), remove stones, level the land and prepare planting basins. Add basal fertilizers based on soil test.",
    aiTip: "AI soil moisture prediction helps identify ideal land preparation days."
  },
  {
    id: 2,
    title: "Soil Testing & pH Correction",
    img: "https://i.pinimg.com/736x/bd/80/06/bd800671ba8d66c99c1068b6aafb57d6.jpg",
    desc: "Test soil for pH (ideal: 6.0–6.5). Add lime if pH is low. Check NPK and micronutrients.",
    aiTip: "Use soil-test apps to instantly get recommended NPK dosage for your orchard."
  },
  {
    id: 3,
    title: "Planting",
    img: "https://tse2.mm.bing.net/th/id/OIP.ghuMhiVdvDwkmOjTXSkO1wHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Plant during dormancy. Dig 60×60×60 cm pits. Mix soil with DAP (150–300g), MOP (150–200g) and FYM. Ensure graft union is above soil.",
    aiTip: "Use GPS markers for perfect spacing in slope orchards."
  },
  {
    id: 4,
    title: "Training & Pruning",
    img: "https://i.pinimg.com/1200x/b8/36/3e/b8363edec3924dc5ac24f52295f85f9d.jpg",
    desc: "Train central leader or modified leader. Remove crossing, diseased and inward-growing branches.",
    aiTip: "AI vision tools can suggest branches to prune for ideal sunlight distribution."
  },
  {
    id: 5,
    title: "Fertilizer Application (Chemical)",
    img: "https://th.bing.com/th/id/OIP.ABLpGcy-BoSrU-_mrhIxUwHaE6?w=268&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Apply Urea (100–400g/tree split doses), DAP (150–300g/tree), MOP (150–300g/tree). Apply Zn & B sprays if deficiency appears.",
    aiTip: "Predictive yield models help you avoid overuse of nitrogen fertilizers."
  },
  {
    id: 6,
    title: "Pest & Disease Management (Chemical)",
    img: "https://th.bing.com/th/id/OIP.qv33IjN4CR3pgXuxACkg2gHaFo?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Use preventive fungicides like Mancozeb/Captan. Use Chlorantraniliprole or Spinosad for fruit borers. For mites, use Fenpyroximate.",
    aiTip: "Camera-based pest identification detects early scab or mite infestation."
  },
  {
    id: 7,
    title: "Irrigation & Fruit Development",
    img: "https://th.bing.com/th/id/OIP.1AQJb22x6r3MiI5ul-M2MwHaE8?w=239&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Irrigate during flowering and fruit enlargement. Avoid water stress which causes fruit cracking.",
    aiTip: "AI irrigation scheduling reduces water usage by 25–40%."
  },
  {
    id: 8,
    title: "Harvesting & Post-Harvest",
    img: "https://th.bing.com/th/id/OIP.0oID0qkzN3jFBe4rU2ijGQHaFX?w=263&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Harvest when fruits reach color and Brix maturity. Use post-harvest fungicides if required for long storage.",
    aiTip: "Use mobile camera color index tools to identify perfect harvest timing."
  },
];

const fertilizers = [
  {
    id: "urea",
    name: "Urea (46% N)",
    image: "https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg",
    price: "₹650 / 50kg",
    use: "Nitrogen source for vegetative growth."
  },
  {
    id: "dap",
    name: "DAP (18-46-0)",
    image: "https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg",
    price: "₹1,250 / 50kg",
    use: "Phosphorus for root growth and early development."
  },
  {
    id: "potash",
    name: "potash",
    image: "https://i.pinimg.com/736x/29/2f/21/292f21eb356ba7ce1a4966232392af72.jpg",
    price: "₹800 / 50kg",
    use: "Improves fruit size, color and disease resistance."
  },
];

const pesticides = [
  {
    id: "mancozeb",
    name: "Mancozeb",
    image: "https://i5.walmartimages.com/asr/4866ca43-898b-4d38-8e24-8b92493ac69b_1.8775e9022ab381dfd5f9a90c7b76a52f.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
    price: "₹550 / kg",
    use: "Fungicide for apple scab, leaf spot and blight."
  },
  {
    id: "chlorantraniliprole",
    name: "Chlorantraniliprole",
    image: "https://tse3.mm.bing.net/th/id/OIP.pSUl94gTSK00sZ3Sh5jmvwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "₹1,450 / 100ml",
    use: "Controls fruit borer, codling moth and caterpillars."
  },
  {
    id: "fenpyroximate",
    name: "Fenpyroximate",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/3/497655844/YR/BE/ZB/10148300/fenpyroximate-5-500x500.jpeg",
    price: "₹980 / 250ml",
    use: "Miticide for sucking pests and mites."
  },
];

const InorganicApple = () => {
  return (
    <div>
      <Header />

      <div className="farming-detail-page">
        
        <div className="back-btn">
          <Link to="/crops/fruits/apple">⬅ Back to Apple</Link>
        </div>

        <h2 className="page-title">Inorganic Apple Farming – Step-by-Step Guide</h2>

        <p className="intro">
          High-yield, conventional apple farming with fertilizers & pesticides. Follow step-wise instructions carefully.
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

        {/* FERTILIZERS */}
        <section className="fert-section">
          <h3 className="section-title">Fertilizers</h3>
          <p className="small-note">Tap a product to view details or buy.</p>

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
                        alert("Added to cart");
                      }}
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

        {/* PESTICIDES */}
        <section className="fert-section">
          <h3 className="section-title">Pesticides</h3>
          <p className="small-note">Use only as per label instructions.</p>

          <div className="fert-grid">
            {pesticides.map((p) => (
              <div className="fert-card" key={p.id}>
                <img src={p.image} alt={p.name} className="fert-img" />
                <div className="fert-body">
                  <div className="fert-name">{p.name}</div>
                  <div className="fert-use">{p.use}</div>
                  <div className="fert-price">{p.price}</div>

                  <div className="fert-actions">
                    <button
                      className="add-to-cart"
                      onClick={() => {
                        CartService.addItem({
                          id: p.id,
                          name: p.name,
                          price: p.price,
                          type: "Pesticide",
                        });
                        alert("Added to cart");
                      }}
                    >
                      Add to Cart
                    </button>

                    <Link
                      to={`/machinery/pesticides/${p.id}`}
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

        <AIAgent />

        <section className="help-section">
          <h3 className="section-title">Help for Farmers</h3>
          <ul className="help-list">
            <li>Follow chemical spray intervals strictly for best results.</li>
            <li>Always wear gloves & mask while spraying.</li>
            <li>Use AI pest detection to avoid late infestations.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default InorganicApple;
