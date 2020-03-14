import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "./Home.css";

function Home() {
  //Getting featured products from redux and showing them
  const featProducts = useSelector(state => state.products);
  const showFeatProducts = featProducts.map((element, index) => {
    if (element.featured === true)
      return (
        <Product
          name={element.name}
          price={element.price}
          id={element.id}
          key={index}
        />
      );
    return null;
  });

  return (
    <div className="home">
      <h1>Welcome on nightmare shop</h1>
      <div className="feat-container">{showFeatProducts}</div>
    </div>
  );
}

export default Home;
