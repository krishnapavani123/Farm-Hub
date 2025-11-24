import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pulses extends Component {
  crops = [
    { name: "BengalGram", path:'/crops/pulses/bengal-gram',image: "https://i.pinimg.com/736x/91/d0/18/91d018511e577b946f3153b99ce03cbe.jpg" },
    { name: "PigeonPea",path:'/crops/pulses/pigeon-pea', image: "https://i.pinimg.com/1200x/be/64/00/be6400c52269faacbbf7109a5046faf5.jpg" },
    { name: "GreenGram",path:'/crops/pulses/green-gram', image: "https://i.pinimg.com/736x/8c/05/bf/8c05bfb8c4e5446d57d57bf25777e777.jpg" },
    { name: "BlackGram", path:'/crops/pulses/black-gram',image: "https://i.pinimg.com/736x/f2/c3/a3/f2c3a3ea192ff9e6f7a61793539a68fe.jpg" },
    
  ];

  render() {
    return (
      <div className="crops-page">
        <div className="back-btn">
          <Link to="/crops">⬅ Back to Categories</Link>
        </div>
        <h2 className="page-title">Pulses</h2>
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

export default Pulses;
