import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

export default function Product({ name, price, id }) {
  return (
    <>
      <Link to={"/products/product?id=" + id}>
        <div className="box-container">
          <div className="text-container">
            <div className="img"></div>
            <h2>{name}</h2>
            <div className="flex">
              <p>{price} $</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
