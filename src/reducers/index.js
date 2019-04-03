import {combineReducers} from 'redux';
import {
    SHOW_PRODUCTS,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    SEARCH_PRODUCTS,
    SET_CATEGORY
} from "../constants";

const products = (state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    searchValue: ""
}, action) => {
    switch (action.type) {
        case SHOW_PRODUCTS:
            return {
                ...state
            };
        case FETCH_PRODUCTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
                category: "All",
            };
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.products,
                lastUpdated: action.receivedAt
            };
        case SEARCH_PRODUCTS:
            return {
                ...state,
                searchValue: action.searchValue
            };
        case SET_CATEGORY:
            return {
                ...state,
                category: action.category
            };
        default:
            return state
    }
};

const rootReducer = combineReducers({
    products
});

export default rootReducer;