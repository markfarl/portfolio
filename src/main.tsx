import App from './App.tsx'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CookiesProvider } from 'react-cookie';
import { ColorSchemeProvider } from './contexts/ColorSchemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider>
      <ColorSchemeProvider>
        <App />
      </ColorSchemeProvider>
    </CookiesProvider>
  </StrictMode>,
)
