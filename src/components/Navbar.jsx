import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../img/logo-tonga.jpg'




function Navbar() {
  let [open, setOpen] = useState(false);
  const location = useLocation()

  return (
    <>
      <div className="shadow-md w-full fixed top-0  bg-black mb-20 z-10">
        <div className="md:flex items-center justify-between  md:py-4 py-6 md:px-10 px-7">
          <div className="flex items-center relative">

            {/* LOGO */}
            <span className="mr-1">
              <img className='h-12 w-12' src={Logo} alt='logo' />
            </span>
            <p className=' text-xl font-semibold uppercase cursor-pointer text-white'> Piscium - SRL</p>
          </div>

          {/* ICON BURGER */}
          <div onClick={() => setOpen(!open)}
            className="text-3xl text-white absolute 
                      right-8 top-7 md:top-5  cursor-pointer md:hidden">
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-black absolute md:static  
              left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in 
              ${open ? 'top-20 ' : 'top-[-490px]'}`}>



            { // Solamente se muestran en el panel de administracion
              location.pathname === '/admin' || location.pathname === '/admin/nuevoproducto'
                ? (
                  <>
                    <li className='md:ml-8 text-sm md:my-0 my-7' >
                      <Link
                        to='/'
                        className={`${location.pathname === '/' ? 'text-gray-500' : 'text-white'} uppercase hover:text-gray-500 duration-500 font-semibold `}
                      >Inicio</Link>
                    </li>

                    <li className='md:ml-8 text-sm md:my-0 my-7' >
                      <Link
                        to='/admin'
                        className={`${location.pathname === '/admin' ? 'text-gray-500' : 'text-white'} uppercase hover:text-gray-500 duration-500 font-semibold `}>
                        Administrador</Link>
                    </li>

                    <li className='md:ml-8 text-sm md:my-0 my-7' >
                      <Link
                        to='/admin/nuevoproducto'
                        className={`${location.pathname === '/admin/nuevoproducto' ? 'text-gray-500' : 'text-white'} uppercase hover:text-gray-500 duration-500 font-semibold `}>
                        Nuevo Producto</Link>
                    </li>
                  </>
                )
                : (
                  <>
                    <li className='md:ml-8 text-sm md:my-0 my-7' >
                      <Link
                        to='/'
                        className={`${location.pathname === '/' ? 'text-gray-500' : 'text-white'} uppercase hover:text-gray-500 duration-500 font-semibold `}
                      >Inicio</Link>
                    </li>
                    <li className='md:ml-8 text-sm md:my-0 my-7' >
                      <Link
                        to='/productos'
                        className={`${location.pathname === '/productos' ? 'text-gray-500' : 'text-white'} uppercase hover:text-gray-500 duration-500 font-semibold `}>
                        Ver Productos</Link>
                    </li>
                    <li className='md:ml-8 text-sm md:my-0 my-7' >
                      <Link
                        to='/nosotros'
                        className={`${location.pathname === '/nosotros' ? 'text-gray-500' : 'text-white'} uppercase hover:text-gray-500 duration-500 font-semibold `}>
                        Nosotros</Link>
                    </li>
                  </>
                )

            }
          </ul>

        </div>
      </div>
    </>

  )
}

export default Navbar