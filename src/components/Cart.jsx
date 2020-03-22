import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { Link } from "react-router-dom";
import { makeOrder } from "../actions/makeOrder";
import { removeFromCart } from "../actions/removeFromCart";
import { resetCart } from "../actions/resetCart";

function Cart() {
  const dispatch = useDispatch();

  //Showing orders in cart
  const ordersState = useSelector(state => state.order);
  const showOrders = ordersState.map((order, index) => {
    return (
      <div key={index} className="order-container">
        <h3>Order ID: {order.orderID}</h3>
        <div className="ordered-products">
          {order.orderedProducts.map((item, index) => {
            return <div key={index}>{item.itemName}</div>;
          })}
        </div>
        <h3>For pay: {order.toPay}$</h3>
      </div>
    );
  });

  //Map trough products in cart and showing them
  const productsInCart = useSelector(state => state.cartItems);
  const showProductsInCart = productsInCart.map((element, index) => {
    return (
      <div key={index} className="cart-product">
        <div className="delete">
          <button
            onClick={() => {
              dispatch(removeFromCart(index));
            }}
            style={{ color: "red" }}
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
          //If cart is not empty
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
            <div>
              <h3 className="order">Last Orders:</h3>
              {showOrders.length < 1 ? <p>Orders are empty</p> : showOrders}
            </div>
          </div>
        ) : (
          //If cart is empty
          <div className="empty-container">
            <div className="empty-flex">
              <h1> cart empty </h1>
              <Link to="/products">
                <button>Continue Shoping</button>
              </Link>
            </div>
            <div className="orders-container">
              <h3 className="order">Last Orders:</h3>
              {showOrders.length < 1 ? <p>Orders are empty</p> : showOrders}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
