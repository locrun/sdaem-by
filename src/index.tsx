import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import "./styles/index.scss"
import App from './App';
import store from './store/store';
import './server/miragejs/server'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);




