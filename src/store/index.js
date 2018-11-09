import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

const middleWares = composeWithDevTools(applyMiddleware(thunk, logger));

export default function configureStore() {
  return createStore(reducers, middleWares);
}
