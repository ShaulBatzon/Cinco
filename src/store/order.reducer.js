const initialState = {
  orders: [],
  }
  
  export function orderReducer(state = initialState, action = {}) {
    switch (action.type) {
      case 'SET_ORDERS':
        return { ...state, orders: action.userOrders }
      case 'ADD_ORDER':
        console.log("from action omer",action.orders);
        return { ...state, orders: [...state.orders, action.orders] }
      case 'REMOVE_ORDER':
        return { ...state, orders: state.orders.filter(order => order._id !== action.ordersId) }
      case 'UPDATE_ORDER':
        return {
          ...state,
          orders: state.orders.map(order =>
            order._id === action.order._id ? action.order : order
          )}
      default:
        return state
    }
  }
  