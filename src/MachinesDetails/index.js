import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import "./index.css";

// Router fix for class components
function withRouter(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class MachineDetails extends Component {
  machineInfo = {
    tractor: {
      name: "Tractor",
      image:
        "https://i.pinimg.com/1200x/e0/fa/f6/e0faf686dbcd18ad382ee803ac4fa88b.jpg",
      price: "₹1500 / day (Rental)",
      desc: "High-power tractor suitable for ploughing, tilling, soil preparation, and hauling heavy loads efficiently."
    },

    rotavator: {
      name: "Rotavator",
      image:
        "https://i.pinimg.com/736x/f0/66/c7/f066c7c1ae326de47e5a02d9d3288b6e.jpg",
      price: "₹1000 / day (Rental)",
      desc: "Used for breaking, mixing, and levelling soil. Best for preparing land for sowing with less fuel usage."
    },

    cultivator: {
      name: "Cultivator",
      image:
        "https://i.pinimg.com/1200x/22/ea/10/22ea101a99634bd98f9f1ad168a872cd.jpg",
      price: "₹700 / day (Rental)",
      desc: "Ideal for removing weeds, loosening soil, and improving soil aeration for better crop growth."
    },

    "seed drill machine": {
      name: "Seed Drill Machine",
      image:
        "https://i.pinimg.com/736x/da/e0/0b/dae00b0412076dbec07742f467cdd758.jpg",
      price: "₹1200 / day (Rental)",
      desc: "Ensures uniform seed planting with correct depth and spacing, increasing yield and reducing seed wastage."
    }
  };

  render() {
    const { name } = this.props.params;
    const machine = this.machineInfo[name];

    if (!machine) {
      return (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Machine Not Found
        </h2>
      );
    }

    return (
      <div>
        <Header />

        <div className="details-page">

          {/* Back Button */}
          <div className="back-btn">
            <Link to="/machinery/machines">⬅ Back to Machines</Link>
          </div>

          {/* Main Card */}
          <div className="details-card">
            <img
              src={machine.image}
              alt={machine.name}
              className="details-img"
            />

            <div className="details-info">
              <h1 className="details-title">{machine.name}</h1>

              <p className="details-desc">{machine.desc}</p>

              <p className="details-price">
                <strong>Rental Price:</strong> {machine.price}
              </p>

              <Link to="/book-machine">
                <button className="details-book-btn">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(MachineDetails);
