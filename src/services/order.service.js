import { httpService } from './http.service'
import { storageService } from './async-storage.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'orders'
// const listeners = []

export const orderService = {
    // save,
    query,
    add
}

async function query(filterBy) {
    var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
    return await httpService.get('order') // query to filter orders from db
    // return await storageService.query(STORAGE_KEY)
  }

async function add(order) {
    const addedOrder = await httpService.post(`order`, order)
    // const addedOrder = storageService.post(STORAGE_KEY, order)
    return addedOrder
  }

// async function save(order) {
//     if (order._id) {
//         return await storageService.put(STORAGE_KEY, order)
//     } else {
//         // gig.owner = userService.getLoggedinUser()
//         return await storageService.post(STORAGE_KEY, order)
//     }
// }