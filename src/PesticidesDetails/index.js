import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import CartService from "../CartService";
import "./index.css";

// Wrapper for class components in React Router v6
function withRouter(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class PesticidesDetails extends Component {
  pesticideInfo = {
    "neem oil": {
      name: "Neem Oil",
      image: "https://i.pinimg.com/1200x/bd/ff/ec/bdffecc95076f80493649c2ae6aecbef.jpg",
      price: "₹450 / Litre",
      desc: "Organic pesticide effective against insects, mites, and fungal infections. Safe for all crops."
    },

    "arber insecticide": {
      name: "Arber Insecticide",
      image: "https://i.pinimg.com/736x/ff/23/11/ff2311963cd249c7db8daadc15403907.jpg",
      price: "₹950 / Litre",
      desc: "Powerful insecticide used for soil termite control and leaf-eating insects."
    },

    "roundup quickpro": {
      name: "Roundup Quickpro",
      image: "https://i.pinimg.com/736x/90/07/2f/90072fc12a07adfdeda570f4e14c1fca.jpg",
      price: "₹320 / 250g pack",
      desc: "Fungicide protects crops from fungal diseases like rot, mildew, and blight."
    },

    "bavistin": {
      name: "Bavistin",
      image: "https://tse1.mm.bing.net/th/id/OIP.rN5jbAKHLnLSKlxdCSuzyAHaLG?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: "₹550 / Litre",
      desc: "Commonly used insecticide to control a wide range of pests in vegetables."
    },
    "mancozeb fungicide":{
      name:"Mancozeb Fungicide",
      image:"https://i5.walmartimages.com/asr/4866ca43-898b-4d38-8e24-8b92493ac69b_1.8775e9022ab381dfd5f9a90c7b76a52f.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
      price:"₹550 / Litre",
      desc:"Commonly used insecticide to control a wide range of pests in vegetables."
    },
    "chlorpyrifos":{
      name:"Chlorpyrifos",
      image:"https://atfagrisciences.com/wp-content/uploads/2023/06/atf-agri-sci-product-chlorpyrifos.png",
      price:"₹450 / Litre",
      desc:"Commonly used insecticide to control a wide range of pests in vegetables"
    },
    "tricyclazole":{
      name:"Tricyclazole",
      image:"https://www.chinapesticidefactory.com/uploads/202025238/fungicide-tricyclazole-95-tc-75-wp-cas-no42067241756.jpg",
      price:"₹330",
      desc:"Tricyclazole is a systemic fungicide primarily used to control rice blast disease, effective in various agricultural formulations"
    },
    "buprofezin":{
      name:"Buprofezin",
      inage:"https://www.engebiotech.com/uploads/Buprofezin-25WP.jpg",
      price:"₹500",
      desc:"Buprofezin is a chitin synthesis inhibitor that acts by inhibiting the synthesis of chitin, a key component of insect cuticles"
    }
 
  };

  render() {
    const { name } = this.props.params;
    const pesticide = this.pesticideInfo[name];

    if (!pesticide) {
      return (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Pesticide Not Found
        </h2>
      );
    }

    return (
      <div>
        <Header />

        <div className="details-page">

          <div className="back-btn">
            <Link to="/machinery/pesticides">⬅ Back</Link>
          </div>

          <div className="details-card">
            <img src={pesticide.image} alt={pesticide.name} className="details-img" />

            <div className="details-info">
              <h1 className="details-title">{pesticide.name}</h1>

              <p className="details-desc">{pesticide.desc}</p>

              <p className="details-price">
                <strong>Price:</strong> {pesticide.price}
              </p>

              <button
                className="details-cart-btn"
                onClick={() => {
                  CartService.addItem(pesticide);
                  alert("Added to cart!");
                }}
              >
                Add to Cart
              </button>
            </div>
            <div>
              
            </div>
          </div>
          <div>

            <h1>HOW TO USE IT:</h1>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(PesticidesDetails);
