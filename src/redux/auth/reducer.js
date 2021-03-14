import {authTypes} from "./types";

const initialState = {
    isLoading: false,
    login: '',
    urls: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                login: action.payload.login,
                urls: action.payload.data
            }
        case authTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case authTypes.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}