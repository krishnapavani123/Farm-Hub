import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

class Machines extends Component {
  machines = [
    {
      name: "Tractor",
      image: "https://i.pinimg.com/1200x/e0/fa/f6/e0faf686dbcd18ad382ee803ac4fa88b.jpg",
    },
    {
      name: "Rotavator",
      image: "https://i.pinimg.com/736x/f0/66/c7/f066c7c1ae326de47e5a02d9d3288b6e.jpg",
    },
    {
      name: "Cultivator",
      image: "https://i.pinimg.com/1200x/22/ea/10/22ea101a99634bd98f9f1ad168a872cd.jpg",
    },
    {
      name: "Seed Drill Machine",
      image: "https://i.pinimg.com/736x/da/e0/0b/dae00b0412076dbec07742f467cdd758.jpg",
    },
  ];

  constructor() {
    super();
    this.state = { search: "" };
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const results = this.machines.filter((m) =>
      m.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div>
        <Header />

        <div className="mach-products-page">
          <div className="back-btn">
            <Link to="/machinery">⬅ Back</Link>
          </div>

          <h2 className="page-title">Farm Machinery</h2>

          <input
            className="search-box"
            placeholder="Search machinery..."
            value={this.state.search}
            onChange={this.updateSearch}
          />

          <div className="products-grid">
            {results.map((m, i) => (
              <div className="mach-card" key={i}>
                <Link to={`/machinery/machines/${m.name.toLowerCase()}`}>
                  <img src={m.image} className="mach-image" alt={m.name} />
                </Link>
                <div className="product-name">{m.name}</div>
                <Link
                  to={`/machinery/machines/${m.name.toLowerCase()}`}
                  className="view-details-btn"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Machines;
