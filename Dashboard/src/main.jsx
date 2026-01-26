import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './Context/AuthProvider.jsx'
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>   {/*  Authprovider se wrap kr denge */}
      <App />
    </AuthProvider>
  </StrictMode>,
)
