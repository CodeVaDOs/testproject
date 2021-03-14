import {authTypes} from "./types";
import axios from "axios";
import {setToken} from "../../utils/tokens";


const login = (login, token) => (dispatch) => {
    dispatch({type: authTypes.LOGIN_REQUEST})

    axios({
        url: "https://api.github.com",
    }).then((rs) => {
        setToken(token);
        dispatch({type: authTypes.LOGIN_SUCCESS, payload: {login, data: rs.data}})
    }).catch((e) => {
        dispatch({type: authTypes.LOGIN_FAILURE})
    })
}

export const authActions = {
    login
}