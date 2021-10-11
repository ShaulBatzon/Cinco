import { httpService } from "./http.service.js";
//import { storageService } from "./async-storage.service.js";
import { socketService } from "./socket.service";
const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser";
//var gWatchedUser = null;
//const STORAGE_KEY = "users";
//function user-service
//get users by id
//delete user
//add user
//calculate rate of user

export const userService = {
  query,
  getById,
  update,
  getLoggedinUser,
  getLoginUser,
  // add,
  login,
};

function getLoginUser() {
  var loginUser = JSON.parse(sessionStorage.getItem("loggedinUser")) || {};
  return loginUser;
}

function getLoggedinUser() {
  return JSON.parse(
    sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null'
  );
}

async function query() {
  //return await storageService.query(STORAGE_KEY);
  return await httpService.get(`users`);
}

async function getById(userId) {
 // const user = await storageService.get("user", userId);
   const user = await httpService.get(`user/${userId}`);
  // gWatchedUser = users;
  return user;
}

async function update(user) {
  //await storageService.put("user", user);
  const newUsser = await httpService.put(`user/${user._id}`, user);
  // Handle case in which admin updates other user's details
  return newUsser;
}

async function login(userCred) {
  // const users = await storageService.query("user");
  // const user = users.find((user) => user.username === userCred.username);
  // window.location.href = "/";
  // return _saveLocalUser(user);
  try {
    const user = await httpService.post("auth/login", userCred);
    socketService.emit("set-user-socket", user._id);
    _saveLocalUser(user);
    if (user.isSeller) window.location.href = "/sellerProfile";
    else window.location.href = "/";
    return user;
  } catch (err) {
    console.log(err);
  }
}

// async function signup(userCred) {
//   //const user = await storageService.post("user", userCred);
//    const user = await httpService.post("auth/signup", userCred);
//   return _saveLocalUser(user);
// }

// async function logout() {
//   // sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
//   return await httpService.post("auth/logout");
// }

// async function add(user) {
//  user.wishList=[];
//   user.imgUrl= "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2a23c21c3e54eefe93213653ed04d9db-1582405905281/6e3c6988-7cf8-4395-9f2c-ebfa022c4f02.jpg";
//   user.imgurl2= "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/2a23c21c3e54eefe93213653ed04d9db-1582405905281/6e3c6988-7cf8-4395-9f2c-ebfa022c4f02.jpg-1582405905281/6e3c6988-7cf8-4395-9f2c-ebfa022c4f02.jpg";
//   user.isSeller=false;
//   user.gigs=[];
//   user.description= '';
//   user.languages= [];
//   storageService.post(STORAGE_KEY,user);
//   }

function _saveLocalUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
}


(async () => {
  var user = getLoginUser();
  if (user) socketService.emit("set-user-socket", user._id);
})();
