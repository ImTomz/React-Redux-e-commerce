import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const itemsInCart = useSelector(state => state.cartItems);

  return (
    <nav>
      <NavLink to="/">
        <h1>logo</h1>
      </NavLink>
      <ul>
        <li>
          <NavLink exact to="/" className="link" activeClassName="active-link">
            <h4>Home</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className="link"
            activeClassName="active-link"
          >
            <h4>Products</h4>
          </NavLink>
        </li>
      </ul>
      <div className="cart">
        <NavLink to="/cart" className="link" activeClassName="active-link">
          <i className="fas fa-shopping-cart fa-lg"></i>
          <h4>Cart </h4>
          <p style={{ color: "red", fontWeight: "bold" }}>
            {itemsInCart.length > 0 && itemsInCart.length}
          </p>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
