import { loadProducts } from "../../actions/productActions";

const fetchProducts = () => {
    return async (dispatch, getState) => {
        const res = await fetch("products.json");
        const data = await res.json();
        if (data.length) {
            dispatch(loadProducts(data));
        }
    };
};

export default fetchProducts;