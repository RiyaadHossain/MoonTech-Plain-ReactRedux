import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../actionTypes/productType";
import { productReducer } from "../reducers/productReducer"

export const addToCart = (product) => {
    productReducer({type: ADD_TO_CART, payload: product})
}

export const removeFromCart = (product) => {
    productReducer({type: REMOVE_FROM_CART, payload: product})
}

export const addToWishlist = (product) => {
    productReducer({type: ADD_TO_WISHLIST, payload: product})
}

export const removeFromWishlist = (product) => {
    productReducer({type: REMOVE_FROM_WISHLIST, payload: product})
}