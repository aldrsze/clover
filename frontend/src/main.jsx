import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.css'
import './styles/util.css'
import './styles/logo.css'
import './pages/Public/home.css'
import './pages/Public/products.css'
import './styles/contact.css'
import './styles/about.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)