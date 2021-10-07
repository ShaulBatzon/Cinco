import io from 'socket.io-client'
export const SOCKET_EMIT_USER_WATCH = 'user-watch';
export const SOCKET_EVENT_USER_UPDATED = 'user-updated';
export const SOCKET_EVENT_ORDER_ADDED = 'order-added';
export const SOCKET_EVENT_YOU_GOT_ORDER = 'you-got-review';


const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'
export const socketService = createSocketService()

window.socketService = socketService

// var socketIsReady = false;
socketService.setup()


function createSocketService() {
  var socket = null; 
  const socketService = {
    setup() {
      socket = io(baseUrl)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb = null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      socket.emit(eventName, data)
    },
    terminate() {
      socket = null
    }
  }
  return socketService
}

socketService.on(SOCKET_EVENT_YOU_GOT_ORDER, order => {
  console.log('I got order!', order);

})

