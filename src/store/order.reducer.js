const initialState = {
  orders: []
}

export function orderReducer(state = initialState, action = {}) {
  console.log('is order reducer')
  switch (action.type) {
    case 'SET_ORDERS':
      console.log('action', action);
      console.log('initialState', state);
      return { ...state, orders: [...action.userOrders] }
    case 'ADD_ORDER':
      console.log('action', action);
      console.log('initialState', state);
      return { ...state, orders: [...state.orders, action.order] }
    case 'REMOVE_ORDER':
      return { ...state, orders: state.orders.filter(order => order._id !== action.ordersId) }
    case 'UPDATE_ORDER':
      return {
        ...state,
        orders: state.orders.map(order =>
          order._id === action.order._id ? action.order : order
        )
      }
    default:
      return state
  }
}
