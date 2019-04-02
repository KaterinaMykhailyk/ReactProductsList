import {takeEvery, put, call, select} from "redux-saga/effects";
import {getProductsFromAPI} from '../api/index.js';
import {fetchProductsRequest, fetchProductsSuccess, showProducts} from "../actions";
import {FETCH_PRODUCTS} from "../constants";

export default function* watchFetchProductsIfNeeded() {
    const products = yield select(state => state.products);
    if (!products.items.length) {
        yield takeEvery(FETCH_PRODUCTS, fetchProductsAsync);
    }
    else {
        yield put(showProducts());
    }
}

function* fetchProductsAsync() {
    yield put(fetchProductsRequest());
    const json = yield call(() => {
            return getProductsFromAPI()
        }
    );
    yield put(fetchProductsSuccess(json));
}