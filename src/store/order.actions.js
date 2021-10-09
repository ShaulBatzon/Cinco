import { orderService } from '../services/order.service'
import { socketService, SOCKET_EVENT_ORDER_ADDED } from '../services/socket.service'
import { userService } from '../services/user.service'


export function loadOrders() {
  return async dispatch => {
    try {
      const orders = await orderService.query()
      const loggedinUser = await userService.getLoginUser()
      const userOrders = orders.filter(order => order.sellerId === loggedinUser._id)
      dispatch({ type: 'SET_ORDERS', userOrders })
      // socketService.on('new order', (order) => {
      //   dispatch({ type: 'ADD_ORDER', order: order })
      // })

    } catch (err) {
      console.log('OrderActions: err in loadOrders', err)
    }
  }
}

export function addOrder(order) {
  return async dispatch => {
    try {
      const addedOrder = await orderService.add(order)
      console.log('addedOrder: ', addedOrder);
      dispatch({ type: 'ADD_ORDER', addedOrder })
        
    } catch (err) {
      console.log('OrderActions: err in addOrder', err)
    }
  }
}

export function removeOrder(orderId) {
  return async dispatch => {
    try {
      await orderService.remove(orderId)
      dispatch({ type: 'REMOVE_ORDER', orderId })
    } catch (err) {
      console.log('OrderActions: err in removeOrder', err)
    }
  }
}

export function acceptOrder(acceptedOrder) {
  return async dispatch => {
    try {
     orderService.update()
      const orderId = acceptedOrder._id
      dispatch({ type: 'UPDATE_ORDER', orderId })
    } catch (err) {
      console.log('OrderActions: err in removeOrder', err)
    }
  }
}

