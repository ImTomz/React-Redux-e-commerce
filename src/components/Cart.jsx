import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { Link } from "react-router-dom";
import { makeOrder } from "../actions/makeOrder";
import { removeFromCart } from "../actions/removeFromCart";
import { resetCart } from "../actions/resetCart";

function Cart() {
  const productsInCart = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  //Map trough products in cart and showing them
  const showProductsInCart = productsInCart.map((element, index) => {
    return (
      <div key={index} className="cart-product">
        <div className="delete">
          <button
            onClick={() => {
              dispatch(removeFromCart(index));
            }}
          >
            X
          </button>
          <h4>{element.name}</h4>
        </div>
        <h4>{element.price}$</h4>
      </div>
    );
  });

  // Get total price from products
  const totalPrice = productsInCart.reduce((total, itemPrice) => {
    return itemPrice.price + total;
  }, 0);

  return (
    <div className="center">
      <div className="flex-container">
        {productsInCart.length > 0 ? (
          <div className="cart-container">
            {showProductsInCart}
            <div className="total-price">
              <Link to="/products">
                <button>Continue Shoping</button>
              </Link>
              <h4>Total price: {totalPrice}$</h4>
            </div>
            <div>
              <button
                onClick={() => {
                  dispatch(makeOrder(productsInCart));
                  dispatch(resetCart());
                }}
              >
                Make Order
              </button>
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
