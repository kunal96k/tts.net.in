import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/style.css'
import './css/premium.css'
import './css/pages.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
