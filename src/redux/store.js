import {applyMiddleware, combineReducers, createStore} from "redux";
import reduxThunk from 'redux-thunk';
import authReducer from './auth/reducer';
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(combineReducers({
    auth: authReducer
}), composeWithDevTools(applyMiddleware(reduxThunk)));