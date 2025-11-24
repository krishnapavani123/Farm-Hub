import React, { Component } from "react";
import { Link } from "react-router-dom";

class Fruits extends Component {
  crops = [
    { name: "Apple",path:"/crops/fruits/apple", image: "https://i.pinimg.com/736x/19/a0/ad/19a0addde7e9da89f46a9956dd3698ad.jpg" },
    { name: "Banana",path:"/crops/fruits/banana", image: "https://i.pinimg.com/736x/a6/18/0c/a6180c351069d85b7eaa9454ad646729.jpg" },
    { name: "Papaya", path:"/crops/fruits/papaya",image: "https://i.pinimg.com/736x/3d/c9/ce/3dc9cea802e451790e5b22d5fa31f6c6.jpg" },
  
    {name:"Guva",path:"/crops/fruits/guva",image: "https://i.pinimg.com/736x/60/36/7f/60367f3ece39352c599dc700f75bb30e.jpg"}
  ];

  render() {
    return (
      <div className="crops-page">
        <div className="back-btn">
          <Link to="/crops">⬅ Back to Categories</Link>
        </div>
        <h2 className="page-title">Grains</h2>
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

export default Fruits;
