import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import counterReducer from "./counterReducer";
import Counter from "./counter";

const reducers = combineReducers({
  counter: counterReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counter />
  </Provider>,
  document.getElementById("app")
);
