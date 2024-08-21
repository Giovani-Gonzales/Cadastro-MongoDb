import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inicio from './Inicio'
import './style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicio />
  </StrictMode>,
)
