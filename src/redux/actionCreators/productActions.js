import { ADD_TO_CART } from "../actionTypes/productActionTypes";

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART, 
        payload: data
    }
};