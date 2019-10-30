import {
    SHARED_LOGIN,
    SHARED_LOGIN_SUCCESS,
    SHARED_LOGIN_ERROR,
    SHARED_LOGOUT,
    SHARED_LOGOUT_SUCCESS,
    SHARED_LOGOUT_ERROR
} from '../constants/reduxTypes';

const INITIAL_STATE = {
    user: null,
    auth_error: null,
    auth_loading: null,
    isAuthenticated: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHARED_LOGIN:
            return {...state, auth_loading: true, auth_error: null};
        case SHARED_LOGIN_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload,
                auth_loading: false,
                isAuthenticated: true
            };
        case SHARED_LOGIN_ERROR:
            return {
                ...state,
                auth_error: action.payload,
                auth_loading: false,
                isAuthenticated: false
            };
        case SHARED_LOGOUT:
            return {...state, auth_loading: true, auth_error: null};
        case SHARED_LOGOUT_SUCCESS:
            return {...state, ...INITIAL_STATE, isAuthenticated: false};
        case SHARED_LOGOUT_ERROR:
            return {
                ...state,
                auth_error: action.payload,
                auth_loading: false
            };
        default:
            return state;
    }
};
