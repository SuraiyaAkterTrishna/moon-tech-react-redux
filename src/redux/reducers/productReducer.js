import { ADD_TO_CART, LOAD_PRODUCT, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
    products : [],
    cart : [],
};

const productReducer = (state = initialState, action) => {
    const selectedProduct = state.cart.find(data=>data.id===action.payload.id);
    switch (action.type) {
        case LOAD_PRODUCT:
            return {
                ...state,
                products : [...action.payload]
            };
        case ADD_TO_CART:
            if (selectedProduct) {
                selectedProduct.quantity++;
                return {
                    ...state,
                    cart : [...state.cart.filter(data=>data.id!==selectedProduct.id), selectedProduct]
                };
            } else {
                return{
                    ...state,
                    cart : [...state.cart, {...action.payload, quantity: 1}]
                };
            }

        case REMOVE_FROM_CART:
            if (selectedProduct.quantity > 1) {
                selectedProduct.quantity--;
                return {
                    ...state,
                    cart : [...state.cart.filter(data=>data.id!==selectedProduct.id), selectedProduct]
                };
            } else {
                return{
                    ...state,
                    cart : state.cart.filter(data=>data.id!==action.payload.id)
                };
            }

        default:
            return state;
    }
};

export default productReducer;