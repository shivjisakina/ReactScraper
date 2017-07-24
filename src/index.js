import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const routes = require("./config/routes.js");

ReactDOM.render(<App />, routes, document.getElementById('root'));
registerServiceWorker();
