import initialState from "./initialState";
import actionTypes from "./actionTypes";

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.productsRequestStart:
      return { ...state, hasError: false, isLoading: true };
    case actionTypes.productsRequestSuccess:
      return { ...state, isLoading: false, products: payload };
    case actionTypes.productsRequestFail:
      return { ...state, isLoading: false, hasError: true };

    default:
      return { ...state };
  }
}
export default reducer;
