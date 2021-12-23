const initialState = {
    gigs: [],
    currGig: null,
    gig: {},
    filterBy: ''
}

export function gigReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_GIGS':
            return { 
                ...state, gigs: action.gigs 
            }
        case 'SELECT_GIG':
            const currGig = state.gigs.find(gig => gig._id === action.gigId)
            return { 
                ...state, currGig: currGig 
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: action.filterBy
            }
        // case 'SELLER_GIG':
        //     // console.log('from re',action.sellerId);
        // const gig = action.gigs.find(gig => gig.seller._id === action.sellerId )
        // newState = { ...state, currGig: currGig }
        // break
        default: return state
    }

}