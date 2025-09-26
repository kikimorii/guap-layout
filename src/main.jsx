import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './assets/js/desktopMenu/index.js';
import './assets/js/mobileMenu/index.js';
import './assets/scss/main.scss';
import { updateYear } from './assets/js/utils';

updateYear(document.querySelector("#footerCopyrightYear"));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);