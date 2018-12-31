import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from "../reducers";
import thunk from "redux-thunk";

export const history = createBrowserHistory()

const initialState = {};

const middleware = [thunk];

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store;

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
  store = createStore(
    rootReducer(history),
    initialState,
    compose(
      applyMiddleware(...middleware, routerMiddleware(history)),
      ReactReduxDevTools
    )
  );
} else {
  store = createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(...middleware, routerMiddleware(history)))
  );
}

export default store;
