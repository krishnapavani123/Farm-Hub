import React, { Component } from "react";
import { Link } from "react-router-dom";

class Vegetables extends Component {
  crops = [
    { name: "Tomato", path:"/crops/vegetables/tomato",image: "https://i.pinimg.com/736x/df/1a/c4/df1ac4ef8e0103e466d4c89d265fa21a.jpg" },

    { name: "Capsicum",path:"/crops/vegetables/capsicum", image: "https://i.pinimg.com/736x/5f/8a/a6/5f8aa6c4b6b273c6e46b24eb85cc1b45.jpg" },
    { name: "Potato",path:"/crops/vegetables/potato", image: "https://i.pinimg.com/736x/eb/95/75/eb95756727d0e100830cc2b64bc8b109.jpg" },
    {name:"Onion",path:"/crops/vegetables/onion",image: "https://i.pinimg.com/736x/16/5e/6f/165e6f24df657daecce50dde8fcd0037.jpg"}
  ];

  render() {
    return (
      <div className="crops-page">
        <div className="back-btn">
          <Link to="/crops">⬅ Back to Categories</Link>
        </div>
        <h2 className="page-title">Vegetables</h2>
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

export default Vegetables;


