import axios from "axios";

const API_PREFIX = 'https://demo3907346.mockable.io/products';

const getProductsFromAPI = () => {
    console.log("I am in API");
    return axios.get(`${API_PREFIX}`)
};

export {getProductsFromAPI};