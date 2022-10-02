import ReactDOM from 'react-dom/client';
import React from 'react';
import {App} from './app';
import './app.css';
import '@akrc/fish/fish.css';

const container = document.getElementById('app')!;

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
