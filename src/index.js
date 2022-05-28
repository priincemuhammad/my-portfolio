import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Gobalstyles } from './components/colorsettings/Gobalstyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gobalstyles />
    <App />
  </React.StrictMode>
);
 
