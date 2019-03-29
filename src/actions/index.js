import { SEARCH_PRODUCTS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../constants/index.js';
import { getProductsFromAPI } from '../api/index.js';

export function searchProducts (searchValue) {
    return {
        type: SEARCH_PRODUCTS,
        searchValue
    }
}

export const fetchProductsIfNeeded = () => (dispatch, getState) => {
    if (shouldFetchProducts(getState())) {
        return dispatch(fetchProducts())
    }
};

export const shouldFetchProducts = (state) => {
    const products = state.products;
    if (!products.items.length) {
        return true
    }
    else if (products.isFetching) {
        return false
    }
};

export const fetchProducts = () => dispatch => {

    dispatch(fetchProductsRequest());

    return getProductsFromAPI()
        .then(data => dispatch(fetchProductsSuccess(data)));
};

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    }
};

export const fetchProductsSuccess = (json) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: json.data.products.map(product => product),
        receivedAt: Date.now()
    }
};
