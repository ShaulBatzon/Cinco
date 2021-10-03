import { gigService } from "../services/gig.service"

export function loadGigs() {
    return (dispatch) => {
        gigService.query()
            .then(gigs => {
                dispatch({
                    type: 'SET_GIGS',
                    gigs
                })
            })
            .catch(err => {
                console.log('Cannot load gigs', err)
            })

        // gigService.subscribe((gigs) => {
        //     console.log('Got notified');
        //     dispatch({
        //         type: 'SET_CARS',
        //         gigs
        //     })
        // })
    }
}

export function onSelectGig(gigId) {
    return (dispatch, getState) => {
        gigService.getById(gigId)
            .then(() => {
                console.log('onSelectGig!!',gigId);
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