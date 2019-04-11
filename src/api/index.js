import axios from "axios";

// const API_PREFIX = 'https://demo3907346.mockable.io/products';
const API_PREFIX = 'products.json';


const getProductsFromAPI = () => {
    return axios.get(`${API_PREFIX}`)
};

export {getProductsFromAPI};