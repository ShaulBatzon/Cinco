import { orderService } from '../services/order.service'
// import { socketService, SOCKET_EVENT_ORDER_ADDED } from '../services/socket.service'
import { userService } from '../services/user.service'
import { gigService } from '../services/gig.service'


export function loadOrders() {
  return async dispatch => {
    try {
      const orders = await orderService.query()
      const loggedinUser = userService.login()
      console.log('orders: ', orders);
      const userOrders = []
      orders.map(order => {
        gigService.getById(order.gigId).then(orderGig => {
          // console.log('orderGig: ',orderGig);
          if (orderGig.seller._id === loggedinUser._id) {
            userOrders.push(order)
          }
        })
      })
      // console.log('userOrders: ', userOrders);

      dispatch({ type: 'SET_ORDERS', userOrders })
      // socketService.on(SOCKET_EVENT_ORDER_ADDED, (order) =>{
      // dispatch({ type: 'ADD_ORDER', order: order })
      // })

    } catch (err) {
      console.log('OrderActions: err in loadOrders', err)
    }
  }
}

export function addOrder(order) {
  console.log('order: ', order);
  return async dispatch => {
    try {
      const addedOrder = await orderService.add(order)
      dispatch({ type: 'ADD_ORDER', order: addedOrder })
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
