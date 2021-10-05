const initialState = {
    gigs: [],
    currGig: null
}

export function gigReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_GIGS':
            console.log('kk');
            newState = { ...state, gigs: action.gigs }
            break
        case 'SELECT_GIG':
            const currGig = state.gigs.find(gig => gig._id === action.gigId)
            newState = { ...state, currGig: currGig }
            break
        default:
    }
    return newState

}