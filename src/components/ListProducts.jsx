import React, { useState } from "react";
import Product from "./Product";
import "./ListProducts.css";
import { useSelector } from "react-redux";

export default function ListProducts() {
  const products = useSelector(state => state.products);

  //Search input value
  const [text, setText] = useState("");

  return (
    <div className="list-container">
      <div className="search-bar">
        <h1>Search</h1>
        <input
          type="text"
          onChange={e => setText(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="container">
        {products
          .filter(item => {
            return item.name.toLowerCase().indexOf(text.toLowerCase()) >= 0;
          })
          .map(element => {
            return (
              <Product
                id={element.id}
                name={element.name}
                price={element.price}
                key={element.id}
              />
            );
          })}
      </div>
    </div>
  );
}
