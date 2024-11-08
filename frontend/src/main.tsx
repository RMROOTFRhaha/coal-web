import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LogIn from './LogIn.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogIn />
  </StrictMode>,
)
