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
    img: "https://thumbs.dreamstime.com/b/prepare-soil-raise-trench-ready-planting-agricultural-land-day-prepare-soil-raise-trench-248360485.jpg",
    desc:
      "Remove weeds, plough 2–3 times and level the field. Make fine tilth for good seed placement.",
    aiTip:
      "AI tip: Use moisture sensors to decide the right time for primary tillage and avoid unnecessary irrigation.",
  },
  {
    id: 2,
    title: "Soil Testing (pH & Nutrients)",
    img:
      "https://wpassets.graana.com/blog/wp-content/uploads/2022/06/Soil-testing-tips-for-the-perfect-fertilizer-application-e1569355003270.jpeg",
    desc:
      "Check pH (ideal 6.0–7.5) and nutrient status to ensure balanced fertilization.",
    aiTip:
      "AI tip: Mobile pH scanners instantly calculate nutrient deficiencies and recommend organic amendments.",
  },
  {
    id: 3,
    title: "Sowing",
    img:
      "https://morningchores.com/wp-content/uploads/2021/01/Sowing-Seeds.jpg",
    desc:
      "Use high-quality seeds. Maintain 20–25 cm plant spacing and 60–70 cm row spacing.",
    aiTip:
      "AI tip: Weather models can suggest the best sowing window to reduce germination failure.",
  },
  {
    id: 4,
    title: "Fertilizer & Nutrients",
    img:
      "https://tse2.mm.bing.net/th/id/OIP.qDQbXs-HO5dqiwZQli9GoAHaGL?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc:
      "Add compost before sowing. Use bio-fertilizers like Azospirillum and phosphate solubilizing bacteria.",
    aiTip:
      "AI tip: AI yield estimators adjust organic fertilizer amounts for variety and soil type.",
  },
  
  
  {
    id: 5,
    title: "Irrigation & Harvest",
    img:
      "https://tse1.mm.bing.net/th/id/OIP.bvfTbgxkxY8zxTaUvRFoqQHaE8?pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3",
    desc:
      "Irrigate at knee-high, tasseling and cob-formation stages. Harvest when husks turn yellowish.",
    aiTip:
      "AI tip: Smart irrigation alerts notify the exact watering needs based on weather and soil moisture.",
  },
];

const fertilizers = [
  {
    id: "compost",
    name: "Organic Compost",
    image:
      "https://i.pinimg.com/1200x/fb/ca/bc/fbcabc7af36910f8ffa41f9e9a5cd7f4.jpg",
    price: "₹350 / 25kg",
    use: "Improves soil structure and moisture holding for corn",
  },
  {
    id: "vermicompost",
    name: "Vermicompost",
    image:
      "https://i.pinimg.com/736x/75/58/80/755880fbdd1f6551bc7c2032af8c50a5.jpg",
    price: "₹480 / 25kg",
    use: "Boosts root growth and early plant vigor",
  },
  {
    id: "neemcake",
    name: "Neem Cake",
    image:
      "https://i.pinimg.com/736x/f3/50/8e/f3508e4afa735742280a6ef0298539cc.jpg",
    price: "₹900 / 50kg",
    use: "Reduces soil pests naturally while providing nutrients",
  },
];

const OrganicCorn = () => {
  return (
    <div>
      <Header />

      <div className="farming-detail-page">
        <div className="back-btn">
          <Link to="/crops/grains/corn">⬅ Back to Corn</Link>
        </div>

        <h2 className="page-title">Step-by-step: Organic Corn Farming</h2>

        <p className="intro">
          Easy steps with visuals. For soil testing, <strong>book a field visit</strong> and our
          team will come to your farm.
        </p>

        <section className="steps-wrap">
          {steps.map((s) => (
            <article className="step-card" key={s.id}>
              <img src={s.img} alt={s.title} className="step-img" />
              <div className="step-body">
                <h3 className="step-title">
                  {s.id}. {s.title}
                </h3>
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
          <p className="small-note">
            Tap a product to view details. Use the Add to Cart button to buy.
          </p>

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

        <AIAgent />

        <section className="help-section">
          <h3 className="section-title">Help for Farmers</h3>
          <ul className="help-list">
            <li>All steps use simple language so everyone can follow them.</li>
            <li>
              If reading is difficult, click “Book pH Test / Field Visit” and
              our team will guide you directly on your farm.
            </li>
            <li>
              Smartphone users can use AI pest detection for fall armyworm and
              other maize pests.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default OrganicCorn;
