import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tw.css'
import './styles/main.scss'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider initial="light">
           <App/>
    </ThemeProvider>
  </StrictMode>,
)
