import actionTypes from "./actionTypes";

const actions = {
  productsRequestStart: payload => ({
    type: actionTypes.productsRequestStart,
    payload
  }),
  productsRequest: (status, payload) => ({
    type: actionTypes[`productsRequest${status}`],
    payload
  })
};

export default actions;
