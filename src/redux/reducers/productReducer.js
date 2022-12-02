import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../actionTypes/productType";

const initialState = { cart: [] }

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };
        
        case REMOVE_FROM_CART:
            return { ...state };
        
        case ADD_TO_WISHLIST:
            return { ...state };
        
        case REMOVE_FROM_WISHLIST:
            return { ...state };
        
        default:
            return state;
    }
}