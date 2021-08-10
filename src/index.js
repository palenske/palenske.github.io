import React from 'react';
import ReactDOM from 'react-dom';
import CashProvider from './Context/CashProvider';
import App from './App';
import './index.css';
import './App.css';

ReactDOM.render(
  <CashProvider>
    <App />
  </CashProvider>,
  document.getElementById('root')
);


