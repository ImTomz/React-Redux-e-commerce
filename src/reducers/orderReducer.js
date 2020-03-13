const orderReducer = (state = [],action) => {
    switch(action.type){
        case "MAKEORDER":
            return [...state,
                {
                    orderID: Math.floor(Math.random() * 1000),
                    orderedProducts:
                        action.list.map((item,index) =>{
                            return {
                                itemName: item.name,
                                itemID: item.id,
                                itemPrice: item.price
                            }
                        })
                    
                }];
        default: 
            return state
    }
}

export default orderReducer;