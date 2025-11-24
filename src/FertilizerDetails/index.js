import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import CartService from "../CartService";
import "./index.css";

// Fix for react-router v6 in class components
function withRouter(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class FertilizerDetails extends Component {
  fertilizerInfo = {
    urea: {
      name: "Urea",
      image: "https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg",
      price: "₹650 / 50kg bag",
      desc: "Urea is a widely used nitrogen fertilizer that boosts plant growth and increases crop yield. Suitable for most soil types."
    },
    dap: {
      name: "DAP",
      image: "https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg",
      price: "₹1,250 / 50kg bag",
      desc: "DAP (Diammonium Phosphate) is a balanced fertilizer ideal for root development and early crop growth."
    },
    potash: {
      name: "Potash",
      image: "https://i.pinimg.com/736x/29/2f/21/292f21eb356ba7ce1a4966232392af72.jpg",
      price: "₹800 / 50kg bag",
      desc: "Potash improves resistance to pests and enhances overall plant health, especially for grains and vegetables."
    },
    compost: {
      name: "Compost",
      image: "https://i.pinimg.com/736x/84/38/52/843852f0b1f14fe78860308f8aa61d22.jpg",
      price: "₹350 / 25kg bag",
      desc: "Organic compost improves soil fertility naturally and supports long-term sustainable farming."
    },
    vermicompost:{
      name:"Vermi Compost",
      image:"https://i.pinimg.com/736x/75/58/80/755880fbdd1f6551bc7c2032af8c50a5.jpg",
      price:"₹350 / 25kg bag",
      desc:"Organic Compost good for crops like paddy"

    },
    neemcake:{
      name:"Neem Cake",
      image:"https://i.pinimg.com/736x/f3/50/8e/f3508e4afa735742280a6ef0298539cc.jpg",
      price:"₹450 / 25kg",
      desc:"Conatins  manufacturers of Essential Oils, Cold Pressed Oils, Herbal Powders, Raw Butters and more."

    },
    panjagavya:{
      name:"Panjagavya",
      image:"https://i.pinimg.com/736x/b0/eb/f2/b0ebf243305bd2696660b1b30a5c7cd4.jpg",
      price:"₹150 / Litre",
      desc:"Panchagavya is organic and Natural Products.Panchagavya improve soil Fertility and improve water holding Capacity"

    }
  };

  render() {
    const { name } = this.props.params;
    const fert = this.fertilizerInfo[name];

    if (!fert) {
      return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Fertilizer Not Found</h2>;
    }

    return (
      <div>
        <Header />

        <div className="details-page">

          <div className="back-btn">
            <Link to="/machinery/fertilizers">⬅ Back</Link>
          </div>

          <div className="details-card">
            <img src={fert.image} alt={fert.name} className="details-img" />

            <div className="details-info">
              <h1 className="details-title">{fert.name}</h1>
              <p className="details-desc">{fert.desc}</p>
              <p className="details-price"><strong>Price:</strong> {fert.price}</p>

              <button
                className="details-cart-btn"
                onClick={() => {
                  CartService.addItem(fert);
                  alert("Added to cart!");
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
 <h1>HOW TO USE IT:</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(FertilizerDetails);
