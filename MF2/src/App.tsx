import Header from 'Shell/Header';
import { StoreProvider, useStore } from 'Shell/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './Shell.decl.d';
import './index.css';

const App = () => {
  const { decrement } = useStore();
  return (
    <>
      <Header />
      <main className='PageContainer'>
        <button onClick={decrement} className='Button'>
          decrement
        </button>
      </main>
    </>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('app')
);
