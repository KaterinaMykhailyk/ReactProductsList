import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState)
};