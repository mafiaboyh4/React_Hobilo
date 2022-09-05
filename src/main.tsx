import React from 'react'
import ReactDOM from 'react-dom/client'
import 'primeflex/primeflex.css';
import './assets/styles/bootstrap.css'
import './assets/styles/styles.scss'
import "primereact/resources/themes/arya-purple/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'prismjs/themes/prism-coy.css';
import './assets/demo/flags/flags.css';
import './assets/demo/Demos.scss';
import './assets/layout/layout.scss';
import 'react-toastify/dist/ReactToastify.css';

import PrimeReact from 'primereact/api';
import App from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';
PrimeReact.ripple = true;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
        <App></App>
  </HashRouter>
)
