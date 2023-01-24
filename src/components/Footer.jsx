import React from 'react'

function Footer() {
  return (
    <footer className='mt-10'>
      <div className='bg-gray-900 grid grid-cols-1 sm:grid-cols-2 
            gap-10 text-center pt-4 text-white text-sm pb-8'>
        <span>&copy;2023 Piscium - SRL . Todos los derechos reservados</span>
        <div className='text-sky-500'>
          <span className='p-2 cursor-pointer inline-flex items-center  rounded-full bg-gray-700 mx-1.5  text-xl hover:text-gray-100 hover:bg-sky-500 duration-300'>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </span>
          <span className='p-2 cursor-pointer inline-flex items-center  rounded-full bg-gray-700 mx-1.5  text-xl hover:text-gray-100 hover:bg-sky-500 duration-300'>
            <ion-icon name="logo-instagram"></ion-icon>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer