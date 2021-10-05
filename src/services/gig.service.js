import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'gigs'
// const listeners = []


export const gigService = {
    query,
    getById,
    save,
    remove,
    // getEmptyGig,
    getGigId,
    getGigBySeller
    // subscribe
}
window.gs = gigService;


async function query() {
        return await storageService.query(STORAGE_KEY)
}

async function getById(gigId) {
    return await storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    return await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    if (gig._id) {
        return await storageService.put(STORAGE_KEY, gig)
    } else {
        // gig.owner = userService.getLoggedinUser()
        return await storageService.post(STORAGE_KEY, gig)
    }
}

// function getEmptyGig() {
//     return {

//     }
// }

 function getGigId() {
    let searchParams = new URLSearchParams(window.location.search)
    if( searchParams.has('id')){
        let param = searchParams.get('id')
        // console.log('param',param);
        return param
    }
}

 function getGigBySeller(sellerId) {
     storageService.query(STORAGE_KEY)
     .then((gigs)=>{
         console.log('gigs',gigs);
         const crrgig =  gigs.filter(gig=>gig.seller._id === sellerId)
         console.log('crr',crrgig);
         return crrgig
     })
    }

// function subscribe(listener) {
//     listeners.push(listener)
// }

// function _notifySubscribersGigsChanged(gigs) {
//     console.log('Notifying Listeners');
//     listeners.forEach(listener => listener(gigs))
// }

// window.addEventListener('storage', () => {
//     console.log('Storage Changed from another Browser!');
//     query()
//         .then(gigs => {
//             _notifySubscribersGigsChanged(gigs)
//         }) 
// })

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




