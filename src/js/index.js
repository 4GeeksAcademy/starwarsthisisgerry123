import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout.js';

import "./index.css";

ReactDOM.createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
