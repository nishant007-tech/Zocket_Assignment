import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
} from '../actions/types';


export default function userReducer(state = [], action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, register: action.payload }
        case LOGIN_USER:
            return { ...state, token: action.payload.data.token, userId: action.payload.data.user.id }
        case AUTH_USER:
            return { ...state, user: action.payload.data.user.id, username: action.payload.data.user.name }
        case LOGOUT_USER:
            return { ...state }
        default:
            return state;
    }
}