import React, { Component } from "react";
import { Link } from "react-router-dom";
import './index.css'
class Grains extends Component {
  crops = [
    { name: "Wheat",path:"/crops/grains/wheat", image: "https://i.pinimg.com/1200x/38/6c/7a/386c7a44d7fa37ebfa016511c3bba558.jpg" },
    { name: "Rice",path:"/crops/grains/rice", image: "https://i.pinimg.com/736x/12/bd/a5/12bda54f6c2f266d3716447d303c184a.jpg" },
    { name: "Corn", path:"/crops/grains/corn",image: "https://i.pinimg.com/736x/74/dd/9c/74dd9c1e448da119a9703ab6ed64efdf.jpg" },
  
    {name:"Millets",path:"/crops/grains/millets",image: "https://i.pinimg.com/736x/d2/9a/20/d29a20e87247eee405c5b96b1360b460.jpg"}
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

export default Grains;
