import { gigService } from "../services/gig.service"


export function loadGigs() {
    return async dispatch => {
      try {
        const gigs = await gigService.query()
        dispatch({ type: 'SET_GIGS', gigs })
      } catch (err) {
        console.log('ReviewActions: err in loadGigs', err)
      }
    }
  }
  

export function onSelectGig(gigId) {
    return (dispatch, getState) => {
        gigService.getById(gigId)
            .then(() => {
                dispatch({
                    type: 'SELECT_GIG',
                    gigId
                })
            })
            .catch(err => {
                console.log('Cannot select Gig', err)
            })
    }
}


// export function loadGigsBySeller(sellerId) {
//     return (dispatch, getState) => {
//         gigService.query()
//             .then((gigs) => {
//                 // console.log('onSelectGig!!',gigId);
//                 dispatch({
//                     type: 'SELLER_GIG',
//                     sellerId,
//                     gigs
//                 })
//             })
//             .catch(err => {
//                 console.log('Cannot select Gig', err)
//             })
//     }
// }