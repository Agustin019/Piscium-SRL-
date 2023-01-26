import { useState } from 'react'
import Logo from '../img/logo-tonga.jpg'
import NavbarLinks from './NavbarLinks';

function Navbar() {
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full  bg-black z-10">
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

            <NavbarLinks/>
          </ul>

        </div>
      </div>
    </>

  )
}

export default Navbar