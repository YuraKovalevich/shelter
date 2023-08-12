import {ActionTypes} from "../utils/consts";

interface ProductsState {
    products: { id: number, image: string, title: string, price: number, category: string, description: string }[]
}

interface ProductsAction {
    type: string;
    payload: any;
}

const initialState: ProductsState = {
    products:[],
}
interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    category: string;
    description: string;
}
interface SelectedProductState {
    product: Product | null;
}

interface SelectedProductAction {
    type: string;
    payload: Product | null;
}

const initialSelectedProductState: SelectedProductState = {
    product: null,
}

export const productReducer = (state = initialState, action: ProductsAction): ProductsState => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: action.payload}
        default:
            return state
    }
}
export const selectedProductReducer = (state = initialSelectedProductState, action: SelectedProductAction): SelectedProductState => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, product: action.payload}
        default:
            return state
    }
}
