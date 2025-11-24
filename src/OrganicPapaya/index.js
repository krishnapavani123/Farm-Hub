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
      "https://th.bing.com/th/id/OIP.Rg8yCFNZL_YxCmh5Z4b3TQHaFj?w=249&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc:
      "Clear weeds and plough the land deeply. Prepare raised beds or pits for papaya planting.",
    aiTip:
      "AI tip: Use GPS-based layout tools to mark pit spacing accurately for uniform orchard design.",
  },
  {
    id: 2,
    title: "Soil Testing (pH & Nutrients)",
    img:
      "https://i.pinimg.com/1200x/60/59/36/60593605da015149338d21ef0a3d93db.jpg",
    desc:
      "Papaya prefers well-drained soil with pH 6–7. Test soil nutrients before planting.",
    aiTip:
      "AI tip: Mobile soil apps can suggest micronutrient corrections for papaya-specific needs.",
  },
  {
    id: 3,
    title: "Planting & Spacing",
    img:
      "https://www.farmatma.in/wp-content/uploads/2018/01/papaya-plantation.jpg",
    desc:
      "Plant healthy seedlings at 1.8–2.5m spacing. Ensure pits are filled with compost and topsoil.",
    aiTip:
      "AI tip: Use weather forecast models to avoid planting during heavy rains.",
  },
  {
    id: 4,
    title: "Fertilizer & Nutrient Management",
    img:
      "https://i.pinimg.com/736x/04/37/d4/0437d4542e25127e77093e619492b038.jpg",
    desc:
      "Apply compost and balanced fertilizers regularly. Papaya requires nitrogen, phosphorus, and potassium for growth and fruiting.",
    aiTip:
      "AI tip: AI-based yield prediction can help adjust fertilizer doses for optimal fruit size.",
  },
  
  {
    id: 5,
    title: "Irrigation & Harvest",
    img:
      "https://i.pinimg.com/736x/b6/e0/39/b6e0399903c942516426db0d4fe5839e.jpg",
    desc:
      "Irrigate regularly but avoid waterlogging. Harvest fruits when skin turns yellowish for best taste.",
    aiTip:
      "AI tip: Smart irrigation scheduling tools notify the best watering times and harvest readiness.",
  },
];

const fertilizers = [
  {
    id: "compost",
    name: "Organic Compost",
    image:
      "https://i.pinimg.com/1200x/fb/ca/bc/fbcabc7af36910f8ffa41f9e9a5cd7f4.jpg",
    price: "₹350 / 25kg",
    use: "Improves soil structure and provides slow-release nutrients",
  },
  {
    id: "npk",
    name: "NPK (10:26:26)",
    image:
      "https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg",
    price: "₹1,200 / 50kg",
    use: "Balanced nutrient supply for fruit development",
  },
  {
    id: "micronutrients",
    name: "Papaya Micronutrient Mix",
    image:
      "https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg",
    price: "₹800 / 10kg",
    use: "Corrects deficiencies of zinc, boron, and magnesium",
  },
];

const OrganicPapaya = () => {
  return (
    <div>
      <Header />

      <div className="farming-detail-page">
        <div className="back-btn">
          <Link to="/crops/fruits/papaya">⬅ Back to Papaya</Link>
        </div>

        <h2 className="page-title">Step-by-step: Organic Papaya Farming</h2>

        <p className="intro">
          Simple steps with pictures — follow each step. For pH or lab tests,{" "}
          <strong>book a field test</strong> below and a member will come to your field.
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

        <AIAgent />

        <section className="help-section">
          <h3 className="section-title">Help for Farmers</h3>
          <ul className="help-list">
            <li>All steps are explained in simple language so every farmer can follow them easily.</li>
            <li>
              If reading is difficult, you can call a local helper or click the “Book pH Test / Field Visit” button — our team member will come to your field and guide you.
            </li>
            <li>
              Farmers with smartphones can use the camera-based pest detection feature for quick AI support and early problem identification.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default OrganicPapaya;
