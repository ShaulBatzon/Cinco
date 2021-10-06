import { httpService } from './http.service.js'
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
    checkValidLogin,
    getLoginUser,
    add
}

function getLoginUser() {
    var loginUser = JSON.parse(sessionStorage.getItem('loginUser')) || {}
    return loginUser
}

async function query() {
    //return await storageService.query(STORAGE_KEY)
    return await httpService.get(`user`);
}

async function getById(userId) {
    return httpService.get(`user/${userId}`)
    //return await storageService.get(STORAGE_KEY, userId)
}
async function remove(userId) {
   // return await storageService.remove(STORAGE_KEY, userId)
    return httpService.delete(`user/${userId}`);
}

async function checkValidLogin(username, password) {
    try {
        const users = await query()
        console.log(users);
        const user = users.find(user => user.username === username)
        if (!user) throw 'No such username'
        if (user.password === password){
            user.password = ''
            sessionStorage['loginUser'] = JSON.stringify(user);
            window.location.href = '/';
        }
        else throw 'wrong password'
    }
    catch (_err) {
    throw (_err)
    }
}


async function add(user) {
 user.wishList=[];
  user.imgUrl= "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2a23c21c3e54eefe93213653ed04d9db-1582405905281/6e3c6988-7cf8-4395-9f2c-ebfa022c4f02.jpg";
  user.imgurl2= "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/2a23c21c3e54eefe93213653ed04d9db-1582405905281/6e3c6988-7cf8-4395-9f2c-ebfa022c4f02.jpg-1582405905281/6e3c6988-7cf8-4395-9f2c-ebfa022c4f02.jpg";
  user.isSeller=false;
  user.gigs=[];
  user.description= '';
  user.languages= [];
  storageService.post(STORAGE_KEY,user);
  }




