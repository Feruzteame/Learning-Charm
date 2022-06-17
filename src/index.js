import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain='dev-di0t7m7t.eu.auth0.com'
  clientId="YUao6KYMi0Gob9ajRuCQASLxnI1POCRa"
  redirectUri={window.location.origin}>
  <App />
</Auth0Provider>
);

reportWebVitals();
