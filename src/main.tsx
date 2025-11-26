import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/ThemeContext'
import { BrowserRouter } from 'react-router'
import App from './App'
import './styles/tw.css'
import './styles/main.scss'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider initial="light">
             <App/>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
