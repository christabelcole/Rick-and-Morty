import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.scss'; // Import global styles

const rootElement = document.getElementById('root') as HTMLElement;

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
