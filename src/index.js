import React from 'react';
import { createRoot } from "react-dom/client";

import './index.css';
import './App.css'
import './../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
