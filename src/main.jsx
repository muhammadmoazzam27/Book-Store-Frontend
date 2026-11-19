import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: "#1d3557" }, components: { Button: { controlOutlineWidth: 0 } } }}>
      <BrowserRouter>
        <AuthContext>
          <App />
        </AuthContext>
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>
)
