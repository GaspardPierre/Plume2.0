import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App'
import { Provider } from 'react-redux'; 
import'../src/scss/styles.scss';
import store from './store/store';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../src/index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
  <Provider store = { store} >
    <App     />
    </Provider>
  </React.StrictMode>,
  </BrowserRouter>
  
)
