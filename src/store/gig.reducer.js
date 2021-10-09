const initialState = {
    gigs: [],
    currGig: null,
    gig:{},
    filterBy:null
}

export function gigReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_GIGS':
            newState = { ...state, gigs: action.gigs }
            break
        case 'SELECT_GIG':
            const currGig = state.gigs.find(gig => gig._id === action.gigId)
            newState = { ...state, currGig: currGig }
            break

            // case 'SELLER_GIG':
            //     // console.log('from re',action.sellerId);
            // const gig = action.gigs.find(gig => gig.seller._id === action.sellerId )
            // newState = { ...state, currGig: currGig }
            // break
        default:
    }
    return newState

}