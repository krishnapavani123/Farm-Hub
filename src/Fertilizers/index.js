import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

import "./index.css";

class Fertilizers extends Component {
  fertilizers = [
    {
      name: "Urea",
      image: "https://i.pinimg.com/1200x/e2/6d/60/e26d60b036615c35c0e4ad75b9610aeb.jpg",
    },
    {
      name: "DAP",
      image: "https://i.pinimg.com/736x/fd/5e/81/fd5e81f96f30af8592a5a271883fe096.jpg",
    },
    {
      name: "Potash",
      image: "https://i.pinimg.com/736x/29/2f/21/292f21eb356ba7ce1a4966232392af72.jpg",
    },
    {
      name: "Compost",
      image: "https://i.pinimg.com/736x/06/ab/83/06ab83a2729480e903e4a8adbcd23bb8.jpg",
    },
    {
      name:"VermiCompost",
      image:"https://i.pinimg.com/736x/75/58/80/755880fbdd1f6551bc7c2032af8c50a5.jpg"
    },
    {
      name:"NeemCake",
      image:"https://i.pinimg.com/736x/f3/50/8e/f3508e4afa735742280a6ef0298539cc.jpg"
    },
    {
      name:"Panjagavya",
      image:"https://i.pinimg.com/736x/b0/eb/f2/b0ebf243305bd2696660b1b30a5c7cd4.jpg"
    }
  ];

  constructor() {
    super();
    this.state = { search: "" };
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const filteredFerts = this.fertilizers.filter((f) =>
      f.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div>
        <Header />

        <div className="mach-products-page">
          <div className="back-btn">
            <Link to="/machinery">⬅ Back</Link>
          </div>

          <h2 className="page-title">Fertilizers</h2>

          <input
            className="search-box"
            placeholder="Search Fertilizers..."
            value={this.state.search}
            onChange={this.updateSearch}
          />

          <div className="products-grid">
            {filteredFerts.map((f, i) => (
              <div className="product-card" key={i}>
                <Link to={`/machinery/fertilizers/${f.name.toLowerCase()}`}>
                  <img src={f.image} className="product-image" alt={f.name} />
                </Link>

                <div className="product-name">{f.name}</div>

                
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Fertilizers;
