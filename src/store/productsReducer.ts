import {ActionTypes} from "../utils/consts";

interface ProductsState {
    products:Product[]
}
interface CartItem {
    id: number;
    image: string;
    title: string;
    price: number;
    category: string;
    description: string;
    qty: number;
}
interface CartState {
    cart: CartItem[];
}
interface CartAction {
    type: string;
    payload: CartItem;
}

const initialCartState: CartState = {
    cart: [],
}


interface ProductsAction {
    type: string;
    payload:  Product[];
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
    qty:number
}
interface SelectedProductState {
    product: Product | null;
    cart: Product[];
}

interface SelectedProductAction {
    type: string;
    payload: Product | null;
}

const initialSelectedProductState: SelectedProductState = {
    product: null,
    cart: [],
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

export const cartReducer = (state = initialCartState, action: CartAction): CartState => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            const updatedCart = [...state.cart, { ...action.payload, qty: 1 }];
            return { ...state, cart: updatedCart };
        case ActionTypes.REMOVE_FROM_CART:
            const filteredCart = state.cart.filter(item => item.id !== action.payload.id);
            return { ...state, cart: filteredCart };
        default:
            return state;
    }
};
