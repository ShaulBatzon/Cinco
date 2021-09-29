import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'orders'
const listeners = []

export const orderService = {
    save,

}

async function save(order) {
    if (order._id) {
        return await storageService.postOrders(STORAGE_KEY, order)
    } else {
        // gig.owner = userService.getLoggedinUser()
        return await storageService.postOrders(STORAGE_KEY, order)
    }
}