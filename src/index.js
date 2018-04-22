import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import { reducer } from "./store/reducer";

// dev tools middleware
let reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
  reduxDevTools = a => a;
}

// create a redux store
let store = createStore(
  reducer,
  compose(reduxDevTools)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
