import React from 'react'

function Footer() {
  return (
    <footer className='mt-10'>
      <div className='bg-gray-900 grid grid-cols-1 sm:grid-cols-2 
            gap-10 text-center pt-4 text-white text-sm pb-8 items-center'>
        <span className='text-lg'>&copy;2023 Piscium - SRL . Todos los derechos reservados</span>
        <div className='text-sky-500 flex flex-col justify-center items-center gap-1'>
          <p className='text-xl text-white font-semibold'>¡Sigamos conectados!</p>
          <div>
            <a 
              href='https://wa.me/5492236895769'
              className='p-2 cursor-pointer inline-flex items-center  rounded-full bg-gray-700 mx-1.5  text-xl hover:text-gray-100 hover:bg-sky-500 duration-300'
            ><ion-icon name="logo-whatsapp"></ion-icon></a>
            <a 
              href='https://www.instagram.com/piscium.srl/'
              className='p-2 cursor-pointer inline-flex items-center  rounded-full bg-gray-700 mx-1.5  text-xl hover:text-gray-100 hover:bg-sky-500 duration-300'
            ><ion-icon name="logo-instagram"></ion-icon></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer