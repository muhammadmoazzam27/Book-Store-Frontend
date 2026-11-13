import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider>
      <BrowserRouter>
        <AuthContext>
          <App />
        </AuthContext>
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>
)
