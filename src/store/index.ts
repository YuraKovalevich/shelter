import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {productReducer} from "./productsReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = combineReducers({
    allProducts: productReducer
})

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState= ReturnType<typeof reducers>