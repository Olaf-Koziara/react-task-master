import { createStore } from "redux";
import { reactTaskReducer } from "../reducers";
export const store = createStore(
  reactTaskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
