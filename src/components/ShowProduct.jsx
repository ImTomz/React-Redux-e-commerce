import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/addToCart";
import "./ShowProduct.css";

//URL Id
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ShowProduct() {
  const dispatch = useDispatch(0);

  //Getting all products from redux store
  const allProducts = useSelector(state => state.products);

  //Filtered selected product from redux store with URL ID
  const query = useQuery();
  const id = query.get("id");
  const filteredItem = allProducts.filter(item => {
    return item.id == id;
  });

  return (
    <div>
      {filteredItem.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <p>{item.price}$</p>
            <p>{item.info}</p>
            <button
              onClick={() => {
                dispatch(addToCart(item.name, item.price, item.id));
              }}
            >
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
