import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

class Machinery extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="machinery-page">
          <h2 className="mach-title">Farming Essentials</h2>

          <p className="mach-sub">
            Select a category to explore fertilizers, pesticides and farming
            tools used by Indian farmers.
          </p>

          <div className="mach-buttons">
            <Link to="/machinery/fertilizers" className="mach-btn fert">🌱 Fertilizers</Link>
            <Link to="/machinery/pesticides" className="mach-btn pest">🐞 Pesticides</Link>
            <Link to="/machinery/machines" className="mach-btn machines">🚜 Machines</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Machinery;
