import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IndexProvider from './redux/provider/IndexProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndexProvider />
  </React.StrictMode>
);