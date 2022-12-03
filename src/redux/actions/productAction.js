import { ADD_TO_CART, ADD_TO_WISHLIST, GET_PRODUCTS, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../actionTypes/productType";

export const getProducts = (products) => {
    return {type: GET_PRODUCTS, payload: products}
}

export const addToCart = (product) => {
    return {type: ADD_TO_CART, payload: product}
}

export const removeFromCart = (product) => {
    return {type: REMOVE_FROM_CART, payload: product}
}

export const addToWishlist = (product) => {
    return {type: ADD_TO_WISHLIST, payload: product}
}

export const removeFromWishlist = (product) => {
    return {type: REMOVE_FROM_WISHLIST, payload: product}
}