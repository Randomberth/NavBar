import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useMenuMobile } from '../../store/StoreMenu'

const MainTitle0 = "ACADEMIA BRASILEIRA ROTÁRIA DE LETRAS"
const MainTitle1 = "ABROL"

function NavBarMobile() {

  const { openMenu, changeOpenMenu  } = useMenuMobile();
 
  return (
    <div className='flex flex-col w-[100%] h-[390px] '>
      
      <div className=' flex flex-col absolute top-5 left-[150px] mx-auto'>
          <span>{MainTitle0+" "+MainTitle1}</span>
      </div> 

      <div className='flex flex-col w-[100%] mt-2'>
        <div className='flex justify-between h-[100px] '>
          <img
            src='./assets/ABROL_logo.webp'
            alt="Logo ACADEMIA BRASILEIRA ROTÁRIA DE LETRAS ABROL"
            width="100"
            height="100"
            className="object-left ml-3"
            />
            <div 
              className='w-[80px] h-[80px] flex justify-center items-center mr-1'
              onClick={changeOpenMenu}
              >
              <FaBars size={50} color='green' />
            </div>
          </div>
          
         {  openMenu && <nav className='z-[100] bg-slate-200'>
            <ul className='flex flex-col gap-4 items-center'>
              <li className='hover:bg-slate-300 cursor-pointer active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-700 rounded-md bg-slate-200 p-1'>
                <Link to="/">  Início </Link> 
              </li>
              <li className='hover:bg-slate-300 cursor-pointer active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-700 rounded-md bg-slate-200 p-1'>
                <Link to="/Academia">  A Academia </Link> 
              </li>
              <li className='hover:bg-slate-300 cursor-pointer active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-700 rounded-md bg-slate-200 p-1'>
                <Link to="/Academicos"> Acadêmicos</Link> 
              </li>
              <li className='hover:bg-slate-300 cursor-pointer active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-700 rounded-md bg-slate-200 p-1'>
                <Link to="/Rotary">  O Rotary </Link> 
              </li>
              <li className='hover:bg-slate-300 cursor-pointer active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-700 rounded-md bg-slate-200 p-1'>
                <Link to="/Cursos">  Cursos </Link> 
              </li>
              <li className='hover:bg-slate-300 cursor-pointer active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-700 rounded-md bg-slate-200 p-1'>
                <Link to="/Conosco">  Fale Conosco </Link> 
              </li>
            </ul>
          </nav> }
      </div>
    </div>
  )
}
      

export default NavBarMobile


