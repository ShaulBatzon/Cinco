import { httpService } from "./http.service";
import { storageService } from "./async-storage.service.js";
import { userService } from "./user.service.js";

const STORAGE_KEY = "orders";
// const listeners = []

export const orderService = {
  // save,
  query,
  add,
  update
};

async function query(filterBy) {
  var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  return httpService.get(`order${queryStr}`) // query to filter orders from db
  // return await storageService.query(STORAGE_KEY);
}

async function add(order) {
  const addedOrder = await httpService.post(`order`, order)
  // const addedOrder = storageService.post(STORAGE_KEY, order);
  return addedOrder;
}

async function update(order) {
  //await storageService.put('user', user)
   order = await httpService.put(`order/${order._id}`, order)
  // Handle case in which admin updates other user's details
  return order;
}
// async function save(order) {
//     if (order._id) {
//         return await storageService.put(STORAGE_KEY, order)
//     } else {
//         // gig.owner = userService.getLoggedinUser()
//         return await storageService.post(STORAGE_KEY, order)
//     }
// }
