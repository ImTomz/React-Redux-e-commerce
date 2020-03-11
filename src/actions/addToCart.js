export const addToCart = (name, price,id,) => {
  return {
    type: "ADDTOCART",
    name,
    id,
    price,
  };
};
