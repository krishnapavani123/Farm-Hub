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
    img: "https://ssl.c.photoshelter.com/img-get2/I00009PR85vxqbwU/fit=1000x750/India-Ploughing-a-field-for-rice-cultivation.jpg",
    desc: "Plough 2–3 times, level well, ensure proper drainage for nursery and main field.",
    ai: "Use soil-moisture sensors to decide irrigation timing during land prep."
  },
  {
    id: 2,
    title: "Organic Seed Treatment & Nursery",
    img: "https://i.pinimg.com/1200x/9e/ca/34/9eca34399f3332f8ed632e9a8511e149.jpg",
    desc: "Soak seeds in cow urine / panchagavya to improve germination. Prepare raised nursery beds.",
    ai: "AI models can estimate seed health using smartphone image checks."
  },
  {
    id: 3,
    title: "Transplanting",
    img: "https://i.pinimg.com/1200x/aa/43/fe/aa43fe46fca29c4245040676776641ce.jpg",
    desc: "Transplant 18–22 day seedlings at 20×20 spacing for optimum aeration & tillering.",
    ai: "Predictive tools can choose the best transplanting day based on weather."
  },
  {
    id: 4,
    title: "Organic Nutrition",
    img: "https://tse2.mm.bing.net/th/id/OIP.lVyHd76CaUdTJHyYHArxeQHaD2?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Apply farmyard manure/jeevamrutham/vermicompost at intervals for slow nutrient release.",
    ai: "AI nutrient models show compost timing based on plant leaf colour analysis."
  },
  {
    id: 5,
    title: "Pest & Disease (Organic)",
    img: "https://tse2.mm.bing.net/th/id/OIP.qM03IRSVJCBbryjbn3DX9wHaFL?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Use neem oil, pheromone traps, sticky traps for early pest suppression.",
    ai: "Use phone-camera detection for early stem borer or leaf folder signs."
  },
  {
    id: 6,
    title: "Irrigation & Harvest",
    img: "https://eos.com/wp-content/uploads/2023/04/rice-harvesting-on-a-field.jpg.webp",
    desc: "Maintain 2–3 cm water layer. Harvest when grains turn golden & hard.",
    ai: "AI weather alerts help pick best drainage and harvest windows."
  }
];

const fertilizers = [
  {
    id: "vermicompost",
    name: "Vermicompost",
    image: "https://i.pinimg.com/736x/75/58/80/755880fbdd1f6551bc7c2032af8c50a5.jpg",
    price: "₹380 / 25kg",
    use: "Nutrient-rich organic manure"
  },
  {
    id: "neemcake",
    name: "Neem Cake",
    image: "https://i.pinimg.com/736x/f3/50/8e/f3508e4afa735742280a6ef0298539cc.jpg",
    price: "₹450 / 25kg",
    use: "Natural pest suppression + soil health"
  },
  {
    id: "panjagavya",
    name: "Panjagavya",
    image: "https://i.pinimg.com/736x/b0/eb/f2/b0ebf243305bd2696660b1b30a5c7cd4.jpg",
    price: "₹150 / Litre",
    use: "Growth promoter (foliar spray)"
  }
];

export default function OrganicRice() {
  return (
    <div>
      <Header />

      <div className="rice-page">

        <div className="back-btn">
          <Link to="/crops/grains/rice">⬅ Back to Rice</Link>
        </div>

        <h2 className="page-title">Organic Rice Farming Guide</h2>

        <div className="steps-section">
          {steps.map((s) => (
            <div className="step-card" key={s.id}>
              <img src={s.img} alt={s.title} className="step-img" />
              <div className="step-info">
                <h2>{s.id}. {s.title}</h2>
                <p>{s.desc}</p>

                <div className="ai-tip">
                  <b>AI Guidance:</b> {s.ai}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fertilizers */}
        <h3 className="fert-title">Organic Fertilizer Options</h3>
        <div className="fert-grid">
          {fertilizers.map((f) => (
            <div className="fert-card" key={f.id}>
              <img src={f.image} alt={f.name} className="fert-img" />
              <div className="fert-name">{f.name}</div>
              <div className="fert-use">{f.use}</div>
              <div className="fert-price">{f.price}</div>

              <div className="fert-actions">
                <button
                  className="add-to-cart"
                  onClick={() => {
                    CartService.addItem({
                      id: f.id, name: f.name, price: f.price, type: "Fertilizer"
                    });
                    alert("Added to cart");
                  }}>
                  Add to Cart
                </button>

                <Link to={`/machinery/fertilizers/${f.id}`} className="view-link">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>

        <AIAgent />

      </div>
    </div>
  );
}
