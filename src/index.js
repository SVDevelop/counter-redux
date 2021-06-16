import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import {INCREASE, DECRESE} from './bollerplate'
import App from "./App";

const rootElement = document.getElementById("root");

const initState = {
  value: 0
};

function async (action) {
return (next) => () => {}
}
function reducer(state = initState, action) {
  switch (action.type) {
    case INCREASE: {
      return {
        ...state,
        value: state.value + action.payload
      };
    }
    case DECRESE: {
      return {
        ...state,
        value: state.value - action.payload
      }
    }
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(async));

// store.dispatch(increase(10));

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
