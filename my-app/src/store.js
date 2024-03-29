import { applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/combineReducer';
import thunk from 'redux-thunk';

const initialState = {}

const middlewares = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store;