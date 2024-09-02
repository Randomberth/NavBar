import { useState } from 'react'
import './App.css'
import { useMenuMobile } from './store/StoreMenu';


function App() {

  const { changeOpenMenu  } = useMenuMobile();
  
  return (
    <div 
      className='h-[90%] StyleApp z-10 bg-blue-500 mt-3 '
      tabIndex={0}
      onFocus={changeOpenMenu}
    >
      Este div es enfocable y mostrará un mensaje cuando lo esté.
   </div>

  )
}

export default App
