import { storageService } from './async-storage.service.js'
const STORAGE_KEY = 'users'

//function user-service
//get users by id
//delete user
//add user
//calculate rate of user

export const userService = {
    query,
    getById,
    remove,
    checkValidLogin

}

async function query() {
    return await storageService.query(STORAGE_KEY)
}

function getById(userId) {
    return storageService.get(STORAGE_KEY, userId)
}
async function remove(userId) {
    return await storageService.remove(STORAGE_KEY, userId)
}

async function checkValidLogin(username, password) {
    try {
        debugger;
        const users = await query(STORAGE_KEY)
        console.log(users);
        const user = users.find(user => user.username === username)
        if (!user) throw 'No such username'
        if (user.password === password){
            sessionStorage['user'] = JSON.stringify({_id:user._id, username:user.username});
            window.location.href = '/';
        }
        else throw 'wrong password'
    }
    catch (_err) {
    throw (_err)
    }
}




