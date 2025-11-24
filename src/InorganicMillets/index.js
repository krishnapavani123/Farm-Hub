import React from "react";
import { Link } from "react-router-dom";
import CartService from "../CartService";
import Header from "../Header";
import "./index.css";

const steps = [
  {
    id: 1,
    title: "Land Preparation (Conventional)",
    img: "https://thumbs.dreamstime.com/b/rice-stubble-beauty-fields-harvest-82121354.jpg",
    desc: "Deep ploughing + 2 harrowings for a firm seed bed. Apply pre-emergence herbicide if needed.",
    aiTip: "AI soil-condition monitors can identify ideal tillage moisture and reduce diesel cost."
  },
  {
    id: 2,
    title: "Chemical Soil Testing",
    img: "https://th.bing.com/th/id/OIP.5xqXCA0owGR5keplo_kBpwHaE7?w=253&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Test pH, NPK levels and micronutrients before using synthetic fertilizers.",
    aiTip: "App-based nutrient calculators instantly convert pH/NPK reports into recommended fertilizer doses."
  },
  {
    id: 3,
    title: "Sowing (Hybrid Millet Varieties)",
    img: "https://th.bing.com/th/id/R.2cf43647ed01d6d493a3438601ba8fde?rik=OsTtanaEGndrzw&riu=http%3a%2f%2fwww.wfpchinacoe.net%2fpic%2f2024-01%2f31%2f116977301_36cd4595-4f04-45b3-9c8b-d74559c1a64d.png&ehk=Z7aJ25fwAoogIjv4%2bV%2bLFX176rtcGk5Wz4RmsimDQog%3d&risl=&pid=ImgRaw&r=0",
    desc: "Use high-yielding hybrid seeds. Recommended spacing ensures optimum tillering.",
    aiTip: "Weather-model AI helps select a rain-safe sowing day to prevent seed rot."
  },
  {
    id: 4,
    title: "Inorganic Fertilizer Application",
    img: "https://i.pinimg.com/1200x/aa/e6/1c/aae61cdbe86d37626aaaf69340c13152.jpg",
    desc: "Apply DAP at basal stage. Give Urea in 2–3 splits for maximum growth.",
    aiTip: "Yield-prediction systems optimize nitrogen split doses per season."
  },
  {
    id: 5,
    title: "Chemical Pest & Disease Control",
    img: "https://i.pinimg.com/1200x/1c/42/f4/1c42f40544b21db1c0a099452d3fb78d.jpg",
    desc: "Use recommended insecticides to manage stem borers, armyworms, and shoot pests.",
    aiTip: "AI pest-image scanners detect millet pests early using smartphone cameras."
  },
  {
    id: 6,
    title: "Irrigation & Harvesting",
    img: "https://i.pinimg.com/736x/8b/88/19/8b88194b502cfabcc8e3958a7708febe.jpg",
    desc: "Provide irrigation at tillering, flowering and grain-filling stages. Harvest when ears mature uniformly.",
    aiTip: "Irrigation-alert tools notify the exact watering window to avoid stress."
  }
];

const inorganicFertilizers = [
  {
    id: "urea",
    name: "Urea",
    image: "https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg",
    price: "₹650 / 50kg",
    use: "Primary source of Nitrogen for fast growth"
  },
  {
    id: "dap",
    name: "DAP",
    image: "https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg",
    price: "₹1,250 / 50kg",
    use: "Improves roots and early establishment"
  },
  {
    id: "potash",
    name: "Potash",
    image: "https://i.pinimg.com/736x/29/2f/21/292f21eb356ba7ce1a4966232392af72.jpg",
    price: "₹1,100 / 50kg",
    use: "Enhances drought tolerance and grain weight"
  }
];

const pesticides = [
  {
    id: "chlorpyrifos",
    name: "Chlorpyrifos",
    image: "https://atfagrisciences.com/wp-content/uploads/2023/06/atf-agri-sci-product-chlorpyrifos.png",
    use: "Stem borers, shoot fly, soil insects"
  },
  {
    id: "carbaryl",
    name: "Carbaryl",
    image: "https://www.forestrydistributing.com/images/thumbs/0004151_carbaryl-4l-insecticide-sevin-sl-loveland-products_275.jpeg",
    use: "Armyworm, leaf feeders, leaf hoppers"
  },
  {
    id: "malathion",
    name: "Malathion",
    image: "https://th.bing.com/th/id/OIP.Wy_vX6tu4XucQem7E-bCmQHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    use: "General insect control for millets"
  },
  {
    id: "lambda-cyhalothrin",
    name: "Lambda-Cyhalothrin",
    image: "https://th.bing.com/th/id/OIP.oaZXI0lVtY5GInIRB4BdYgHaHa?w=197&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    use: "Fast-acting contact insecticide for major millet pests"
  }
];

const InorganicMillets = () => {
  return (
    <div className="millets-page">
    <Header/>
      <h2 className="page-title">Inorganic Millet Farming (Full Guide)</h2>

      {/* Steps Section */}
      <section className="steps-wrap">
        {steps.map((s) => (
          <article className="step-card" key={s.id}>
            <img className="step-img" src={s.img} alt={s.title} />
            <div className="step-body">
              <h3>{s.id}. {s.title}</h3>
              <p>{s.desc}</p>

              <div className="ai-tip">
                <strong>AI Guidance:</strong> {s.aiTip}
              </div>

              {s.title.toLowerCase().includes("soil") && (
                <div className="test-cta">
                  <Link to="/book-ph-test" className="book-test-btn">
                    Book Soil Test / Field Visit
                  </Link>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* Fertilizers */}
      <section className="fert-section">
        <h3>Inorganic Fertilizers</h3>
        <div className="fert-grid">
          {inorganicFertilizers.map((f) => (
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
                    price: f.price
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

      {/* Pesticides */}
      <section className="fert-section">
        <h3>Pesticides for Millets</h3>
        <div className="fert-grid">
          {pesticides.map((p) => (
            <div className="fert-card" key={p.id}>
              <img className="fert-img" src={p.image} alt={p.name} />

              <div className="fert-name">{p.name}</div>
              <div className="fert-use">{p.use}</div>

              <button
                className="add-to-cart"
                onClick={() => {
                  CartService.addItem({
                    id: p.id,
                    name: p.name,
                    price: "Varies"
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

export default InorganicMillets;
