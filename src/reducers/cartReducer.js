const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDTOCART":
      return [
        ...state,
        {
          name: action.name,
          price: action.price,
          id: action.id
        }
      ];
    default:
      return state;
  }
};

export default cartReducer;
