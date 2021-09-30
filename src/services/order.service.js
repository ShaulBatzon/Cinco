import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'orders'
// const listeners = []

export const orderService = {
    save,

}

async function save(order) {
    if (order._id) {
        return await storageService.put(STORAGE_KEY, order)
    } else {
        // gig.owner = userService.getLoggedinUser()
        return await storageService.post(STORAGE_KEY, order)
    }
}