import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const productsInCart = useSelector(state => state.cartItems);

  return (
    <div className="center">
      <div className="flex-container">
        {productsInCart.length > 0 ? (
          <div className="cart-container">
            {productsInCart.map((element, index) => {
              return (
                <div key={index} className="cart-product">
                  <h4>{element.name}</h4>
                  <h4>{element.price}$</h4>
                </div>
              );
            })}
            <div className="total-price">
              <Link to="/products">
                <button>Continue Shoping</button>
              </Link>
              Total price :
              {productsInCart.reduce((total, itemPrice) => {
                return itemPrice.price + total;
              }, 0)}
              $
            </div>
          </div>
        ) : (
          <div className="empty-container">
            <h1> cart empty </h1>
            <Link to="/products">
              <button>Continue Shoping</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
