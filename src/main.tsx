import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBarMain from './NavBarMain/NavBarMain.tsx'

createRoot(document.getElementById('root')!).render(
  <div className=' TestMain '>
    <StrictMode>
      <NavBarMain/>
    </StrictMode>
  </div>
)
