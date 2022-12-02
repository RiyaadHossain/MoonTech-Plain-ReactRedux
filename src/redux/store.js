import { createStore } from 'redux'
import { productReducer, initialState } from "./reducers/productReducer"

export const store = createStore(productReducer, initialState)