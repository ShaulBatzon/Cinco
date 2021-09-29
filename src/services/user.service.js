const STORAGE_KEY = 'users'

//function user-service
//get users by id
//delete user
//add user
//calculate rate of user


function getById(userId) {
    return storageService.get(STORAGE_KEY, userId)
}

async function remove(userId) {
    return await storageService.remove(STORAGE_KEY, userId)
}

