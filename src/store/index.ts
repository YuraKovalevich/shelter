import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {cartReducer, productReducer, selectedProductReducer} from "./productsReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = combineReducers({
    allProducts: productReducer,
    product:selectedProductReducer,
    cart:cartReducer
})

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState= ReturnType<typeof reducers>