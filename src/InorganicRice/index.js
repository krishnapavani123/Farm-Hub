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
    desc: "Puddling required for lowland rice. Ensure proper bunding and water level.",
    ai: "AI moisture trackers guide ideal puddling intervals."
  },
  {
    id: 2,
    title: "Seed Selection & Treatment",
    img: "https://thefarminginsider.com/wp-content/uploads/2024/12/seed-selection-techniques-for-resilient-crops-post-512x512.png",
    desc: "Use HYV or hybrid seeds for high yield. Treat seeds with fungicide before sowing.",
    ai: "AI disease prediction helps choose right seed treatment chemical."
  },
  {
    id: 3,
    title: "Transplanting",
    img: "https://bangladeshpost.net/webroot/uploads/featureimage/2020-05/5eb682aa02998.jpg",
    desc: "Transplant 20–25 day old seedlings spaced at 20×15 cm.",
    ai: "Weather AI helps pick the safest transplanting window."
  },
  {
    id: 4,
    title: "Fertilizer Application",
    img: "https://tse2.mm.bing.net/th/id/OIP.ZKeldYLTZPoJJiftZqXRBAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Apply DAP, Urea & MOP in split doses at basal, tillering & panicle initiation.",
    ai: "Leaf colour AI suggests nitrogen adjustments."
  },
  {
    id: 5,
    title: "Pesticides & Diseases",
    img: "https://tse1.mm.bing.net/th/id/OIP.okgyLReJ9Jfkfhv4m54G4QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Brown plant hopper, stem borer & blast are common. Use recommended pesticides.",
    ai: "AI pest scanners detect BPH early via camera input."
  },
  {
    id: 6,
    title: "Irrigation & Harvest",
    img: "https://th.bing.com/th/id/R.3acf3fc7c76d62ade6506bb3181c0793?rik=%2bV3OODSqgz2%2fqw&riu=http%3a%2f%2findianorphanage.com%2fio%2fwp-content%2fuploads%2f2016%2f10%2fharvesting-orphanage-farm.jpg&ehk=P1D7uAz6k18g%2fT7nv%2bzORWmsGZ8RjmExlOeSmBurHlg%3d&risl=&pid=ImgRaw&r=0",
    desc: "Maintain standing water. Drain 10 days before harvest.",
    ai: "AI alerts show ideal harvest moisture range."
  }
];

const fertilizers = [
  {
    id: "urea",
    name: "Urea",
    image: "https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg",
    price: "₹650 / 50kg",
    use: "Main nitrogen supply"
  },
  {
    id: "dap",
    name: "DAP",
    image: "https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg",
    price: "₹1250 / 50kg",
    use: "Phosphorus for strong roots"
  },
  {
    id: "potash",
    name: "Potash",
    image: "https://i.pinimg.com/736x/29/2f/21/292f21eb356ba7ce1a4966232392af72.jpg",
    price: "₹900 / 50kg",
    use: "Stress tolerance & immunity"
  }
];

const pesticides = [
  {
    id: "chlorpyrifos",
    name: "Chlorpyrifos",
    image: "https://atfagrisciences.com/wp-content/uploads/2023/06/atf-agri-sci-product-chlorpyrifos.png",
    price: "₹450",
    use: "Stem borer & termites"
  },
  {
    id: "tricyclazole",
    name: "Tricyclazole",
    image: "https://tse2.mm.bing.net/th/id/OIP.TMrr7Qms8BEtvseXGWV0NwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "₹330",
    use: "Rice blast disease"
  },
  {
    id: "buprofezin",
    name: "Buprofezin",
    image: "https://www.engebiotech.com/uploads/Buprofezin-25WP.jpg",
    price: "₹500",
    use: "Brown plant hopper"
  }
];

export default function InorganicRice() {
  return (
    <div>
      <Header />

      <div className="rice-page">

        <div className="back-btn">
          <Link to="/crops/grains/rice">⬅ Back to Rice</Link>
        </div>

        <h2 className="page-title">Inorganic Rice Farming Guide</h2>

        <div className="steps-section">
          {steps.map((s) => (
            <div className="step-card" key={s.id}>
              <img src={s.img} alt={s.title} className="step-img" />
              <div className="step-info">
                <h2>{s.id}. {s.title}</h2>
                <p>{s.desc}</p>
                <div className="ai-tip"><b>AI Tip:</b> {s.ai}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Fertilizers */}
        <h3 className="fert-title">Recommended Fertilizers</h3>
        <div className="fert-grid">
          {fertilizers.map((f) => (
            <div className="fert-card" key={f.id}>
              <img src={f.image} className="fert-img" />
              <div className="fert-name">{f.name}</div>
              <div className="fert-use">{f.use}</div>
              <div className="fert-price">{f.price}</div>

              <div className="fert-actions">
                <button
                  className="add-to-cart"
                  onClick={() =>
                    CartService.addItem({
                      id: f.id, name: f.name, price: f.price, type: "Fertilizer"
                    })
                  }
                >
                  Add to Cart
                </button>
                <Link to={`/machinery/fertilizers/${f.id}`} className="view-link">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pesticides */}
        <h3 className="fert-title">Pesticides</h3>
        <div className="fert-grid">
          {pesticides.map((p) => (
            <div className="fert-card" key={p.id}>
              <img src={p.image} className="fert-img" />
              <div className="fert-name">{p.name}</div>
              <div className="fert-use">{p.use}</div>
              <div className="fert-price">{p.price}</div>

              <button
                className="add-to-cart"
                onClick={() =>
                  CartService.addItem({
                    id: p.id, name: p.name, price: p.price, type: "Pesticide"
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <AIAgent />
      </div>
    </div>
  );
}
