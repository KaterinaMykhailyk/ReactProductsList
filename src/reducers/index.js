import {INVALIDATE_PRODUCTS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS} from  "../constants";
import {combineReducers} from 'redux';

const products = (state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    searchValue: ""
}, action) => {
    switch (action.type) {
        case INVALIDATE_PRODUCTS:
            return {
                ...state,
                didInvalidate: true
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
        default:
            return state
    }
};

const rootReducer = combineReducers({
    products
});

export default rootReducer;