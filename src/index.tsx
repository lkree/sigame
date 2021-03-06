import React from 'react';
import { createRoot } from 'react-dom/client';

import './assets/css/index.sass';
import { App } from './components/App';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
