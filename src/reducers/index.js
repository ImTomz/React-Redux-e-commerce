import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer"

import { combineReducers } from "redux";

const allReducers = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  order: orderReducer,
});

export default allReducers;
