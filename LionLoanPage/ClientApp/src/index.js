import React from 'react';
import { AuthProvider } from './AuthContext'; // Update the path accordingly
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter basename={baseUrl}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
);

serviceWorkerRegistration.unregister();
reportWebVitals();
