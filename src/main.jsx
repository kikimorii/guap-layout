import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './assets/js/mobileMenu.js';
import './assets/js/desktopMenu.js';
import './assets/scss/main.scss';
import { updateYear } from './assets/js/updateYear.js';

updateYear(document.querySelector("#footerCopyrightYear"));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);