import Header from 'Shell/Header';
import { StoreProvider, useStore } from 'Shell/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const { decrement } = useStore();
  return (
    <div className='container'>
      <Header />
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('app')
);
