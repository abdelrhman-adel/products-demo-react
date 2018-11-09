import { api } from "../../../constants";
import getRequest from "../../../modules/api";
import actions from "./actions";
import Product from "../../../models/product";

const thunks = {
  getProducts: () => dispatch => {
    dispatch(actions.productsRequestStart());
    getRequest(
      api.products,
      products => products.map(product => new Product(product)),
      actions.productsRequest
    )(dispatch);
  }
};

export default thunks;
