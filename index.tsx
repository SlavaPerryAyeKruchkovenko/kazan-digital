import React from "react";
import ReactDOM from 'react-dom/client';
import App from './src/App';
import {BrowserRouter} from 'react-router-dom';
import "@Styles/reset.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('app-root') as HTMLElement);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
