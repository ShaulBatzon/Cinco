import { userService } from '../services/user.service.js'


const initialState = {
    user: userService.getLoginUser(),
    users: [],
    isSeller: false,
    watchedUser : null,
    notifications: userService.getLoginUser().notifications
}
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user, isSeller: action.user.isSeller }
        case 'SET_WATCHED_USER':
            return { ...state, watchedUser: action.user }
        case 'REMOVE_USER':
            return {...state, users: state.users.filter(user => user._id !== action.userId)}
        case 'SET_USERS':
            return { ...state, users: action.users }
        case 'SET_NOTIFICATIONS':
            return { ...state, notifications: action.notifications }
            case "UPDATE_USER":
                return {...state, users: state.users.map((user) => user._id === action.updatedUser._id ? action.updatedUser : user), 
                    notifications: action.updatedUser.notifications}
        default:
    }
    return state;

}
