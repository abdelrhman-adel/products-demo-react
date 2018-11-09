import { createSelector } from "reselect";

const getProducts = products => products.products;
const getProductId = (products, id) => parseInt(id, 10);

const selectors = {
  getProduct: createSelector(
    getProducts,
    getProductId,
    (products, id) => products.find(product => id === product.id) || false
  )
};

export default selectors;
