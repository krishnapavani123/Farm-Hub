import React, { Component } from "react";
import { Link } from "react-router-dom";

class Spices extends Component {
  crops = [
    { name: "Turmeric", path:'/crops/spices/turmeric',image: "https://i.pinimg.com/736x/1f/8c/5f/1f8c5f160e76fd25cc37ff52e5b2adb7.jpg" },
    { name: "Chilli", path:'/crops/spices/chilli',image: "https://i.pinimg.com/736x/09/af/4c/09af4c1956b736206b743fff29f3b4ff.jpg" },
   
    { name: "Cardamom",path:'/crops/spices/cardamom', image: "https://i.pinimg.com/736x/f6/b5/57/f6b5575c725691f62ed240a432e4ddeb.jpg" },
    {name:"Cinnamon",path:'/crops/spices/cinnamon',image: "https://i.pinimg.com/1200x/66/27/63/662763ff2e2792dddd985121202295ae.jpg"}
  ];

  render() {
    return (
      <div className="crops-page">
        <div className="back-btn">
          <Link to="/crops">⬅ Back to Categories</Link>
        </div>
        <h2 className="page-title">Spices</h2>
        <div className="categories-container">
           {this.crops.map((crop, i) => (
            <Link to={crop.path} key={i} className="category-card">
              <img src={crop.image} alt={crop.name} className="category-image" />
              <div className="category-name">{crop.name}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Spices;

