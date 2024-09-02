import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import AcademiaScreen from '../screens/AcademiaScreen'
import AcademicosScreen from '../screens/AcademicosScreen'
import ConoscoScreen from '../screens/ConoscoScreen'
import CursosScreen from '../screens/CursosScreen'
import RotaryScreen from '../screens/RotaryScreen'
import HeaderComponent from '../components/HeaderComponent'


function NavBarMain() {


  return (
    <div className='h-[100%] w-[100%]'>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' Component={App}  />
        <Route path='/Academia' Component={AcademiaScreen}  />
        <Route path='/Academicos' Component={AcademicosScreen}  />
        <Route path='/Rotary' Component={RotaryScreen}  />
        <Route path='/Cursos' Component={CursosScreen}  />
        <Route path='/Conosco' Component={ConoscoScreen}  />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default NavBarMain