import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './Header';
import './index.css';
import { store, useStore } from './store';

const App = () => {
  return <Header />;
};
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
