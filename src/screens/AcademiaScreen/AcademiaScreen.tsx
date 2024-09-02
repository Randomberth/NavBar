import React from 'react'
import { useMenuMobile } from '../../store/StoreMenu'


function AcademiaScreen() {
  const { changeOpenMenu  } = useMenuMobile();

  return (
  <div 
    className='h-[90%] StyleApp z-10 bg-orange-500 mt-3'
    tabIndex={0}
    onFocus={changeOpenMenu}
  >
    Este div es enfocable y mostrará un mensaje cuando lo esté.
  </div>

  )
}

export default AcademiaScreen; 