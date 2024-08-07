import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TimeProvider } from './context/TimeContext';
import { ColaboradorProvider } from './context/ColaboradorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TimeProvider>
    <ColaboradorProvider>
      <App />
    </ColaboradorProvider>
  </TimeProvider>
);
