import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <h1>logo</h1>
      </NavLink>
      <ul>
        <li>
          <NavLink exact to="/" className="link" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className="link"
            activeClassName="active-link"
          >
            Products
          </NavLink>
        </li>
      </ul>
      <div className="cart">
        <NavLink to="/cart" className="link" activeClassName="active-link">
          Cart
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
