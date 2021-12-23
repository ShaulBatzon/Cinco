//import { storageService } from "./async-storage.service.js";
import { httpService } from "./http.service.js";
//const STORAGE_KEY = "gigs";
// const listeners = []

export const gigService = {
  query,
  getById,
  save,
  remove,
  getGigId,
  // subscribe
};
window.gs = gigService;

async function query() {
  return await httpService.get(`gig`);
  // let gigs = await httpService.get(`gig`);
  
  //   const { tag } = filterBy

  //   if (tag) {
  //     var gigsByTags = gigs.filter((entity) =>
  //       entity.tags.find((tagg) => tagg === tag)
  //     )
  //     const filteredGigs = gigsByTags;
  //     return filteredGigs;
  //   }else return gigs
  //return await storageService.query(STORAGE_KEY);
}

async function getById(gigId) {
  //return await storageService.get(STORAGE_KEY, gigId);
    return httpService.get(`gig/${gigId}`)
}

async function remove(gigId) {
  //return await storageService.remove(STORAGE_KEY, gigId);
   return httpService.delete(`gig/${gigId}`)
}

async function save(gig) {
  if (gig._id) {
    //return await storageService.put(STORAGE_KEY, gig);
    return httpService.put(`gig/${gig._id}`, gig);
  } else {
    return httpService.post(`gig`, gig);
    // gig.owner = userService.getLoggedinUser()
    // return await storageService.post(STORAGE_KEY, gig)
  }
}

//ask oren about it
function getGigId() {
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("id")) {
    let param = searchParams.get("id");
    // console.log('param',param);
    return param;
  }
}
