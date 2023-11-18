import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IndexRoute from './router/IndexRoute.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndexRoute />
  </React.StrictMode>
);