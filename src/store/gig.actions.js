import { gigService } from "../services/gig.service.js";
import { userService } from "../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function loadGigs() {
    return (dispatch) => {
        gigService.query()
            .then(gigs => {
                console.log('gigs from DB:', gigs)
                dispatch({
                    type: 'SET_gigs',
                    gigs
                })
            })
            .catch(err => {
                showErrorMsg('Cannot load gigs')
                console.log('Cannot load gigs', err)
            })

        gigService.subscribe((gigs) => {
            console.log('Got notified');
            dispatch({
                type: 'SET_gigs',
                gigs
            })
        })
    }
}

export function onRemoveGig(GigId) {
    return (dispatch, getState) => {
        gigservice.remove(GigId)
            .then(() => {
                console.log('Deleted Succesfully!');
                dispatch({
                    type: 'REMOVE_Gig',
                    GigId
                })
                showSuccessMsg('Gig removed')
            })
            .catch(err => {
                showErrorMsg('Cannot remove Gig')
                console.log('Cannot remove Gig', err)
            })
    }
}

export function onAddGig() {
    return (dispatch) => {
        const Gig = gigservice.getEmptyGig();
        gigservice.save(Gig)
            .then(savedGig => {
                console.log('Added Gig', savedGig);
                dispatch({
                    type: 'ADD_Gig',
                    Gig: savedGig
                })
                showSuccessMsg('Gig added')
            })
            .catch(err => {
                showErrorMsg('Cannot add Gig')
                console.log('Cannot add Gig', err)
            })
    }
}

export function onEditGig(GigToSave) {
    return (dispatch) => {
        gigservice.save(GigToSave)
            .then(savedGig => {
                console.log('Updated Gig:', savedGig);
                dispatch({
                    type: 'UPDATE_Gig',
                    Gig: savedGig
                })
                showSuccessMsg('Gig updated')
            })
            .catch(err => {
                showErrorMsg('Cannot update Gig')
                console.log('Cannot save Gig', err)
            })
    }
}

export function addToGigt(Gig) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_GigT',
            Gig
        })
    }
}
export function removeFromGigt(GigId) {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_FROM_GigT',
            GigId
        })
    }
}

export function checkout() {
    return async (dispatch, getState) => {
        try {
            const state = getState()
            const total = state.GigModule.Gigt.reduce((acc, Gig) => acc + Gig.price, 0)
            const score = await userService.changeScore(-total)
            dispatch({ type: 'SET_SCORE', score })
            dispatch({ type: 'CLEAR_GigT'})
            showSuccessMsg('Charged you: $' + total.toLocaleString())


        } catch (err) {
            showErrorMsg('Cannot checkout, login first')
            console.log('GigActions: err in checkout', err)
        }
    }
}



// Demo for Optimistic Mutation (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveGigOptimistic(GigId) {

    return (dispatch, getState) => {

        dispatch({
            type: 'REMOVE_Gig',
            GigId
        })
        showSuccessMsg('Gig removed')

        gigService.remove(GigId)
            .then(() => {
                console.log('Server Reported - Deleted Succesfully');
            })
            .catch(err => {
                showErrorMsg('Cannot remove Gig')
                console.log('Cannot load gigs', err)
                dispatch({
                    type: 'UNDO_REMOVE_Gig',
                })
            })
    }
}