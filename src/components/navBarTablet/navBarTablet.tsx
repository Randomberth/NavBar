import React from 'react'
import { Link } from 'react-router-dom'

const MainTitle0 = "ACADEMIA BRASILEIRA ROTÁRIA DE LETRAS"
const MainTitle1 = "ABROL"


function NavBarDesktop() {
  return (
    <div className='flex w-[100%] h-[100%] items-center justify-center'>
      
      <img
        src='./assets/ABROL_logo.webp'
        alt="Logo ACADEMIA BRASILEIRA ROTÁRIA DE LETRAS ABROL"
        width="100"
        height="100"
        className=""
      />

      <div className='flex flex-col ml-10'>

        <div className=' flex flex-col gap-1'>
          <span>{MainTitle0}</span>
          <span>{MainTitle1}</span>
        </div>

          <nav className=''>
            <ul className='flex gap-4 items-center'>
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
          </nav>
      </div>
    </div>
  )
}
      

export default NavBarDesktop

