const SET_PRODUCTS="SET_PRODUCTS";
const SELECTED_PRODUCTS="SELECTED_PRODUCTS";
const REMOVE_SELECTED_PRODUCTS='REMOVE_SELECTED_PRODUCTS'



interface ProductsState {
    products:{id:number,title:string,category:string}[]
}
interface ProductsAction{
    type:string;
    payload: any;
}


const initialState:ProductsState = {
    products: [
        {
            id: 1,
            title: '',
            category: '',
        },
    ]
}
export const productsReducer = (state = initialState, action:ProductsAction):ProductsState => {
    switch (action.type) {
        case SET_PRODUCTS:
            return state
        default:
            return state
    }
}