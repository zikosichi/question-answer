import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import { persistReducer } from 'redux-persist'
import { persistStore, autoRehydrate } from 'redux-persist-immutable'
import storage from 'redux-persist/lib/storage'

import { reducer } from "./store/reducer";

// dev tools middleware
let reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
  reduxDevTools = a => a;
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer, autoRehydrate())

let store = createStore(persistedReducer, compose(autoRehydrate(), reduxDevTools))
persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
