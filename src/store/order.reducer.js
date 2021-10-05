const initialState = {
  orders: [],
  }
  
  export function orderReducer(state = initialState, action = {}) {
    switch (action.type) {
      case 'SET_ORDERS':
        return { ...state, orders: action.userOrders }
      case 'ADD_ORDER':
        return { ...state, orders: [...state.orders, action.orders] }
      case 'REMOVE_ORDER':
        return { ...state, orders: state.orders.filter(order => order._id !== action.ordersId) }
      case 'UPDATE_ORDER':
        return {
          ...state,
          orders: state.orders.map(orders =>
            orders._id === action.orders._id ? action.orders : orders
          )}
      default:
        return state
    }
  }
  