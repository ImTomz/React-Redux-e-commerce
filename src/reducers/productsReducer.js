const products = [
  { name: "letenim", price: 10, featured: true, id: 1 },
  { name: "2product", price: 30, featured: true, id: 2 },
  { name: "shubylak", price: 15, featured: true, id: 3 },
  { name: "4product", price: 13, id: 4 },
  { name: "5product", price: 13, id: 5 },
  { name: "5product", price: 13, id: 6 },
  { name: "5product", price: 13, id: 7 },
  { name: "5product", price: 13, id: 8 },
  { name: "5product", price: 13, id: 9 },
  { name: "5product", price: 13, id: 10 }
];

const productsReducer = (state = products, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
