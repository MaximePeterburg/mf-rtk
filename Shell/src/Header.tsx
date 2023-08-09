import React from 'react';
import './index.css';
import { useStore } from './store';

export default () => {
  const { count } = useStore();
  return (
    <header className='HeaderContainer'>
      <div className='Header'>Count: {count}</div>
    </header>
  );
};
