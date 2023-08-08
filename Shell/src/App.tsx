import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import { store, useStore } from './store';

const App = () => {
  const { count } = useStore();
  return (
    <div className='container'>
      <div>Name: Shell</div>
      {count}
    </div>
  );
};
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
