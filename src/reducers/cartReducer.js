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
      case "REMOVEFROMCART":
        let newState = [...state];
        newState.splice(action.index, 1);
        return newState;

      case "RESETCART":
        let resetState = [];
        return resetState
        
    default:
      return state;
  }
};

export default cartReducer;
