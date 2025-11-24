import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cartService from "../CartService";
import "./index.css";

const Header = () => {
  const [count, setCount] = useState(cartService.getCount());

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(cartService.getCount());
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">🌾 FarmHub</Link>
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">☰</label>

      <ul className="nav-links">
        <li><Link to="/crops">Crops</Link></li>
        <li><Link to="/machinery">Farming Essentials</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        <li className="cart-link-container">
          <Link to="/cart">Cart</Link>
          {count > 0 && <span className="cart-badge">{count}</span>}
        </li>
      </ul>
    </div>
  );
};

export default Header;
