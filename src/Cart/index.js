import React from "react";
import cartService from "../CartService";
import Header from "../Header";   // ✅ Add header
import "./index.css";

const Cart = () => {
  const cart = cartService.getCart();

  return (
    <div>
      <Header />   {/* ✅ Header now shows in Cart page */}

      <div className="cart-page">
        <h2 className="cart-title">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} className="cart-img" alt={item.name} />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>

              <button
                className="cart-remove"
                onClick={() => {
                  cartService.removeItem(index);
                  window.location.reload();
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
