import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/productActionTypes";

const initialState = {
    cart : [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                cart : [...state.cart, action.payload]
            };

        case REMOVE_FROM_CART:
            return{
                ...state,
                cart : [...state.cart, action.payload]
            };
    
        default:
            return state;
    }
};

export default productReducer;