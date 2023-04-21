import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../src/index.scss'
import'../src/scss/styles.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </BrowserRouter>
  
)
