import {ActionTypes} from "../utils/consts";

interface ProductsState {
    products:{id:number,image:'',title:string,price:number,category:string}[]
}
interface ProductsAction{
    type:string;
    payload: any;
}


const initialState:ProductsState = {
    products: [
        {
            id: 1,
            image:'',
            title: 'Steve',
            category: 'Programmer',
            price:0
        },
    ]
}
export const productReducer = (state = initialState, action:ProductsAction):ProductsState => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:action.payload}
        default:
            return state
    }
}