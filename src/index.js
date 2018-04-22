import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from "redux";
import { Provider } from "react-redux";

import { reducer } from "./store/reducer";

// create a redux store
let store = createStore(
  reducer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
