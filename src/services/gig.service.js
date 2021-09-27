import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'gig'
const listeners = []

export const gigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig,
    subscribe
    
}
window.gs = gigService;


async function query() {
    return await storageService.query(STORAGE_KEY)
}

function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

function remove(gigId) {
    return storageService.remove(STORAGE_KEY, gigId)
}

function save(gig) {
    if (gig._id) {
        return storageService.put(STORAGE_KEY, gig)
    } else {
        // gig.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, gig)
    }
}

function getEmptyGig() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        // price: utilService.getRandomIntInclusive(1000, 9000),
    }
}

function subscribe(listener) {
    listeners.push(listener)
}

function _notifySubscribersGigsChanged(gigs) {
    console.log('Notifying Listeners');
    listeners.forEach(listener => listener(gigs))
}

window.addEventListener('storage', () => {
    console.log('Storage Changed from another Browser!');
    query()
        .then(gigs => {
            _notifySubscribersGigsChanged(gigs)
        }) 
})

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




