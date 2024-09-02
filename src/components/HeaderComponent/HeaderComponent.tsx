import { useMediaQuery } from 'react-responsive'
import NavBarDesktop from '../navBarDesktop';
import NavBarMobile from '../navBarMobile';
import NavBarTablet from '../navBarTablet';


function HeaderComponent() {
    const isMobile = useMediaQuery({ query: '(max-width: 799px)' });
    const isTablet = useMediaQuery({ query: ' (min-width: 800px) and (max-width: 1280px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1281px)' });
  
  return (
    <header className='h-[100px] w-[100%] '>
        { isDesktop && <NavBarDesktop/>} 
        { isTablet && <NavBarTablet/>  }
        { isMobile && <NavBarMobile/>} 
    </header>

  )
}

export default HeaderComponent;