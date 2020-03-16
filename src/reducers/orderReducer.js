const orderReducer = (state = [], action) => {
  switch (action.type) {
    case "MAKEORDER":
      return [
        ...state,
        {
          orderID: Math.floor(Math.random() * 1000),
          orderedProducts: action.list.map(item => {
            return {
              itemName: item.name,
              itemID: item.id,
              itemPrice: item.price
            };
          }),
          toPay: action.list.reduce((total, item) => {
            return item.price + total;
          }, 0)
        }
      ];
    default:
      return state;
  }
};

export default orderReducer;
