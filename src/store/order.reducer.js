const initialState = {
  orders: [],
};

export function orderReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SET_ORDERS":
      return { ...state, orders: [...action.userOrders] };
    // case "SET_NOTIFY":
    //   return { ...state, notify: [...action.userPendingOrders] };
    case "ADD_ORDER":
      return { ...state, orders: [...state.orders, action.addedOrder] };
    case "REMOVE_ORDER":
      return {
        ...state,
        orders: state.orders.filter((order) => order._id !== action.ordersId),
      };
    case "UPDATE_ORDER":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order._id === action.updatedOrder._id ? action.updatedOrder : order
        )
      };
    default:
      return state;
  }
}
