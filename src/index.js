import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from '../src/App';
import { HashRouter } from 'react-router-dom';
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <I18nextProvider i18n={i18n}>
      <App />
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>
);
