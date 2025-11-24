import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import AIAgent from "../AIAgent";
import CartService from "../CartService";
import "./index.css";

const organicSteps = [
  {
    id: 1,
    title: "Land Preparation",
    img: "https://tse2.mm.bing.net/th/id/OIP.DqbLAXBfwNEh1be2AljtQgHaED?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc:
      "Deep ploughing + addition of organic manure. Prepare pits 45–60 cm wide and fill with FYM and topsoil.",
    aiTip:
      "AI tip: Use moisture sensors to decide the right time for pit preparation and water scheduling.",
  },
  {
    id: 2,
    title: "Soil Testing",
    img: "https://i.pinimg.com/1200x/87/c7/a0/87c7a0b3ea1e1e26ed3cb49bd8d6a5d3.jpg",
    desc: "Check pH (ideal 6.5–7.5), micronutrients, and organic carbon.",
    aiTip:
      "AI tip: Use mobile pH meters to record data and get automatic fertilizer recommendations.",
  },
  {
    id: 3,
    title: "Planting (Suckers/Tissue Culture)",
    img: "https://th.bing.com/th/id/R.0809b96489c05a04e2807e3cb7b03fba?rik=PzRfJwVo9MTBfw&riu=http%3a%2f%2fwww.agritech.tnau.ac.in%2fexpert_system%2fbanana%2fimages%2fpitmethod.png&ehk=q5Ihuak8Ee13RHDrn6LezCfiA9wv88QcIjIGVisd5bw%3d&risl=&pid=ImgRaw&r=0",
    desc:
      "Use certified tissue-culture plants. Spacing: 6×6 or 7×7 ft. Plant vertically and firm the soil.",
    aiTip:
      "AI tip: Apps can track seedling survival and alert early growth issues.",
  },
  {
    id: 4,
    title: "Organic Fertilizer Application",
    img: "https://th.bing.com/th/id/R.0c31d932af3bb75a21ae116e21a75dea?rik=gC7Jke33EzD1pQ&riu=http%3a%2f%2fwww.agritech.tnau.ac.in%2fexpert_system%2fbanana%2fimages%2fct4.png&ehk=ApUdPV8ZGMkTdEQ8XJbhPyMLl%2fSoB2sheEVQhg1ZCvY%3d&risl=&pid=ImgRaw&r=0",
    desc:
      "Apply FYM (20–25 kg), Vermicompost (5 kg), Neem Cake (1 kg) per plant. Follow top dressing every 60 days.",
    aiTip:
      "AI tip: Yield prediction models can guide how much organic fertilizer to add for optimal bunch size.",
  },
 
  {
    id: 5,
    title: "Irrigation & Harvest",
    img:
      "https://i.pinimg.com/1200x/06/e2/d0/06e2d07a1dffeed082e69da183059f56.jpg",
    desc:
      "Provide irrigation every 5–7 days. Harvest bunches at 80–90% maturity for best quality.",
    aiTip:
      "AI tip: Irrigation apps can alert exact water requirement based on humidity and soil moisture.",
  },
];

const organicFertilizers = [
  {
    id: "fym",
    name: "Farmyard Manure",
    image:
      "https://th.bing.com/th/id/OIP.B6a08PWBqQpfNVYD22slEwHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    price: "₹450 / 25kg",
    use: "Improves soil health and moisture retention",
  },
  {
    id: "vermicompost",
    name: "Vermicompost",
    image: "https://i.pinimg.com/736x/75/58/80/755880fbdd1f6551bc7c2032af8c50a5.jpg",
    price: "₹350 / 25kg",
    use: "Boosts plant vigor and bunch weight",
  },
];

const BananaOrganic = () => {
  return (
    <div>
      <Header />

      <div className="farming-detail-page">
        <div className="back-btn">
          <Link to="/crops/fruits/banana">⬅ Back to Banana</Link>
        </div>

        <h2 className="page-title">Step-by-step: Organic Banana Farming</h2>

        <p className="intro">
          Follow these simple steps. For soil/pH testing, <strong>book our field visit</strong>.
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

                {s.title.toLowerCase().includes("soil") && (
                  <div className="test-cta">
                    <Link to="/book-ph-test" className="book-test-btn">
                      Book Soil / pH Test
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="fert-section">
          <h3 className="section-title">Organic Fertilizers</h3>

          <div className="fert-grid">
            {organicFertilizers.map((f) => (
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

      </div>
    </div>
  );
};

export default BananaOrganic;
