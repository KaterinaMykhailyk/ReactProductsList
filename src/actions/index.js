import {
    SHOW_PRODUCTS,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    SEARCH_PRODUCTS,
    SET_CATEGORY,
} from '../constants/index.js';

export function showProducts() {
    return {
        type: SHOW_PRODUCTS
    }
}

export function setFilterCategory(category) {
    return {
        type: SET_CATEGORY,
        category
    }
}

export function searchProducts(searchValue) {
    return {
        type: SEARCH_PRODUCTS,
        searchValue
    }
}

export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS
    }
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