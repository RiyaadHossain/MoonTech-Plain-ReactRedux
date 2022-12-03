import { ADD_TO_CART, ADD_TO_WISHLIST, GET_PRODUCTS, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../actionTypes/productType";

export const initialState = { products: [], cart: [] }

export const productReducer = (state = initialState, action) => {

    const exist = state.cart.find(product => product._id === action.payload._id)

    switch (action.type) {

        case GET_PRODUCTS:
            return { ...state, products: action.payload }
        
        case ADD_TO_CART:
            if (!exist) {
                return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
            } else {
                const restProducts = state.cart.filter(product => product._id !== exist._id)
                exist.quantity++
                return { ...state, cart: [...restProducts, { ...exist }] }
            }

        case REMOVE_FROM_CART:
            if (exist.quantity === 1) {
                return { ...state, cart: [...state.cart.filter(product => product._id !== action.payload._id)] }
            } else {
                const restProducts = state.cart.filter(product => product._id !== exist._id)
                exist.quantity--
                return { ...state, cart: [...restProducts, { ...exist }] }
            }

        case ADD_TO_WISHLIST:
            return { ...state };

        case REMOVE_FROM_WISHLIST:
            return { ...state };

        default:
            return state;
    }
}