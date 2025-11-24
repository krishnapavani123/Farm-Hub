import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from '../Header'
import "./index.css";

class Crops extends Component {
  categories = [
    { name: "Grains", path: "/crops/grains", image: "https://i.pinimg.com/736x/82/34/96/82349634fcf5e49654ab4779b19e2353.jpg" },
    { name: "Fruits", path: "/crops/fruits", image: "https://i.pinimg.com/1200x/9c/00/1a/9c001a3fe8dfe7012c11fe22847d9030.jpg" },
    { name: "Vegetables", path: "/crops/vegetables", image: "https://i.pinimg.com/736x/90/a2/7c/90a27c547bd8ec87706f2c3a0a335f22.jpg" },
    { name: "Pulses", path: "/crops/pulses", image: "https://i.pinimg.com/736x/49/72/e7/4972e7b76f10c1914b23e971ec40efcb.jpg" },
    { name: "Spices", path: "/crops/spices", image: "https://i.pinimg.com/736x/70/dd/58/70dd58848fe502574e96ec2d0aeae59f.jpg" },
  ];

  render() {
    return (
      <div>
        <Header/>
      <div className="crops-page">
      
        <h2 className="page-title">Select a Crop Category</h2>
        <div className="categories-container">
          {this.categories.map((cat) => (
            <Link to={cat.path} key={cat.name} className="category-card">
              <img src={cat.image} alt={cat.name} className="category-image" />
              <div className="category-name">{cat.name}</div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    );
  }
}

export default Crops;
