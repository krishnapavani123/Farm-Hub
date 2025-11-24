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
    img: "https://th.bing.com/th/id/OIP.Rg8yCFNZL_YxCmh5Z4b3TQHaFj?w=249&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Plough the land thoroughly and prepare pits with soil mixed with chemical fertilizers like DAP and MOP.",
    aiTip: "AI tip: GPS-based layout tools ensure uniform pit spacing for better orchard design."
  },
  {
    id: 2,
    title: "Soil Testing (pH & Nutrients)",
    img: "https://i.pinimg.com/1200x/87/c7/a0/87c7a0b3ea1e1e26ed3cb49bd8d6a5d3.jpg",
    desc: "Papaya prefers pH 6–7. Use lime or gypsum for correction, and chemical amendments for nutrient deficiencies.",
    aiTip: "AI tip: Apps can suggest fertilizer mixes based on soil test results."
  },
  {
    id: 3,
    title: "Planting & Spacing",
    img: "https://www.farmatma.in/wp-content/uploads/2018/01/papaya-plantation.jpg",
    desc: "Plant seedlings at 1.8–2.5m spacing. Fill pits with soil mixed with DAP and urea.",
    aiTip: "AI tip: Weather forecast models help avoid planting during heavy rains."
  },
  {
    id: 4,
    title: "Fertilizer & Nutrient Management",
    img: "https://i.pinimg.com/736x/04/37/d4/0437d4542e25127e77093e619492b038.jpg",
    desc: "Apply basal dose of DAP + MOP. Follow with urea top dressing every 30–40 days. Spray micronutrients as needed.",
    aiTip: "AI tip: Yield-prediction tools optimize chemical fertilizer schedules for maximum returns."
  },
  {
    id: 5,
    title: "Pest & Disease Management",
    img: "https://i.pinimg.com/1200x/03/56/a8/0356a81c785fc9488bc51d1ea7491e56.jpg",
    desc: "Papaya is prone to viral diseases and fruit flies. Use chemical pesticides like Malathion, Carbaryl, or systemic fungicides when infestations occur.",
    aiTip: "AI tip: Image-recognition apps can detect papaya leaf curl virus early using phone cameras."
  },
  {
    id: 6,
    title: "Irrigation & Harvest",
    img: "https://i.pinimg.com/736x/b6/e0/39/b6e0399903c942516426db0d4fe5839e.jpg",
    desc: "Irrigate regularly but avoid waterlogging. Fruits may be harvested earlier and sometimes ripened with ethylene sprays.",
    aiTip: "AI tip: Smart irrigation scheduling tools notify the best watering times and harvest readiness."
  }
];

const inputs = [
  {
    id: "urea",
    name: "Urea",
    image: "https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg",
    price: "₹650 / 50kg",
    use: "Nitrogen supply for vegetative growth and fruit filling"
  },
  {
    id: "dap",
    name: "DAP (Diammonium Phosphate)",
    image: "https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg",
    price: "₹1,250 / 50kg",
    use: "Phosphorus for root development and early growth"
  },
  {
    id: "mop",
    name: "MOP (Muriate of Potash)",
    image: "https://i.pinimg.com/1200x/fb/ca/bc/fbcabc7af36910f8ffa41f9e9a5cd7f4.jpg",
    price: "₹900 / 50kg",
    use: "Potassium for fruit quality and disease resistance"
  },

];

const InorganicPapaya = () => {
  return (
    <div>
      <Header />

      <div className="farming-detail-page">
        <div className="back-btn">
          <Link to="/crops/fruits/papaya">⬅ Back to Papaya</Link>
        </div>

        <h2 className="page-title">Step-by-step: Inorganic Papaya Cultivation</h2>

        <p className="intro">
          Conventional papaya farming using chemical fertilizers and pesticides. For pH or lab tests,{" "}
          <strong>book a field test</strong> below and a member will come to your field.
        </p>

        <section className="steps-wrap">
          {steps.map((s) => (
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
          <h3 className="section-title">Chemical Fertilizers & Pesticides</h3>
          <p className="small-note">Tap a product to view details. Use the Add to Cart button to buy.</p>

          <div className="fert-grid">
            {inputs.map((f) => (
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
                        CartService.addItem({ id: f.id, name: f.name, price: f.price, type: "Input" });
                        alert("✅ Added to cart");
                      }}
                      aria-label={`Add ${f.name} to cart`}
                    >
                      Add to Cart
                    </button>
                    <Link to={`/machinery/fertilizers/${f.id}`} className="view-link">View</Link>
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
            <li>All steps are explained in simple language so every farmer can follow them easily.</li>
            <li>If reading is difficult, you can call a local helper or click the “Book pH Test / Field Visit” button — our team member will come to your field and guide you.</li></ul>
            </section>
          
            </div>
            </div>

          )
}
export default InorganicPapaya