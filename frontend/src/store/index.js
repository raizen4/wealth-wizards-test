import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "../reducers";
import thunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {}
const store = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension(),
)(createStore)(allReducers, initialState);


export default store;