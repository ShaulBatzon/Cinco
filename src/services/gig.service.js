
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'Gig'
const listeners = []

export const GigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig,
    subscribe
    
}
window.cs = GigService;


function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(GigId) {
    return storageService.get(STORAGE_KEY, GigId)
}
function remove(GigId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    return storageService.remove(STORAGE_KEY, GigId)
}
function save(Gig) {
    if (Gig._id) {
        return storageService.put(STORAGE_KEY, Gig)
    } else {
        Gig.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, Gig)
    }
}

function getEmptyGig() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}

function subscribe(listener) {
    listeners.push(listener)
}

function _notifySubscribersGigsChanged(Gigs) {
    console.log('Notifying Listeners');
    listeners.forEach(listener => listener(Gigs))
}

window.addEventListener('storage', () => {
    console.log('Storage Changed from another Browser!');
    query()
        .then(Gigs => {
            _notifySubscribersGigsChanged(Gigs)
        }) 
})

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




