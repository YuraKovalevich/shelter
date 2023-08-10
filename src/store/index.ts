import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {productsReducer} from "./productsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers=combineReducers({
    allProducts:productsReducer
})

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
);