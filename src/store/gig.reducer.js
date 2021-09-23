const initialState = {
    gigs: []
}
export function gigReducer(state = initialState, action) {
    var gigs
    switch (action.type) {
        case 'SET_gigs':
           return { ...state, gigs: action.gigs }
        case 'REMOVE_CAR':
            const lastRemovedCar = state.gigs.find(car => car._id === action.carId)
            gigs = state.gigs.filter(car => car._id !== action.carId)
            return { ...state, gigs, lastRemovedCar}
        case 'ADD_CAR':
            return { ...state, gigs:[...state.gigs, action.car]}
        case 'UPDATE_CAR':
            gigs = state.gigs.map(car => (car._id === action.car._id)? action.car : car)
            return { ...state, gigs}
        default:
    }
}
