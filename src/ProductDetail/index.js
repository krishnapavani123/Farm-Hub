import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import CartService from "../CartService";
import "./index.css";

const productDatabase = {
  fertilizers: [
    { name: "Urea", image: "https://i.pinimg.com/736x/64/19/a9/6419a9b0d438e8b85b2e1fa89bbf908f.jpg", desc: "Urea improves nitrogen content in soil." },
    { name: "DAP", image: "https://i.pinimg.com/736x/d6/4f/66/d64f66027c8492cbaba3e8a4a7c39fbe.jpg", desc: "DAP is a major phosphorus fertilizer." }
  ],
  pesticides: [
    { name: "Neem Oil", image: "https://i.pinimg.com/736x/20/55/f7/2055f7f9aa8fc9de3dcfdd7a52d69f52.jpg", desc: "Neem oil controls pests naturally." }
  ],
  machines: [
    { name: "Tractor", image: "https://i.pinimg.com/736x/74/f5/8a/74f58add38afcb7631c6fba58866f59b.jpg", desc: "Essential for ploughing and land preparation." }
  ]
};

// Wrapper for class component to read URL params
function ProductDetailWrapper() {
  const params = useParams();
  return <ProductDetail category={params.category} productName={params.productName} />;
}

class ProductDetail extends Component {

  findProduct() {
    const { category, productName } = this.props;
    const list = productDatabase[category];
    return list.find((item) => item.name.toLowerCase() === productName.toLowerCase());
  }

  render() {
    const product = this.findProduct();

    if (!product) return <h2>Product not found</h2>;

    return (
      <div>
        <Header />

        <div className="detail-container">

          <div className="back-btn">
            <Link to={`/machinery/${this.props.category}`}>⬅ Back</Link>
          </div>

          <h1>{product.name}</h1>
          <img src={product.image} className="detail-image" alt=""/>
          <p className="detail-desc">{product.desc}</p>

          <button
            className="detail-add-btn"
            onClick={() => {
              CartService.addItem(product);
              alert("✅ Added to cart!");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetailWrapper;
