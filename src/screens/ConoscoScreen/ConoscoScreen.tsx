import { useMenuMobile } from '../../store/StoreMenu'


function ConoscoScreen() {
  const { changeOpenMenu  } = useMenuMobile();

  return (
  <div 
    className='h-[90%] StyleApp z-10 bg-sky-500 mt-3'
    tabIndex={0}
    onFocus={changeOpenMenu}
  >
    Este div es enfocable y mostrará un mensaje cuando lo esté.
  </div>

  )
}

export default ConoscoScreen 