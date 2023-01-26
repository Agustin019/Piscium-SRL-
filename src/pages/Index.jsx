import Tabla from "../components/tabla"
import { Link } from "react-router-dom"
import 'animate.css'
function Index() { 
  return (
    <>
      {/* Pantalla de inicio */}
      <div className=' bg-frutos  h-screen bg-cover '>
        <div className=' bg-black bg-opacity-50 h-screen '>
          <h1 className='font-bold text-4xl sm:text-6xl text-center text-white uppercase pt-56 sm:pt-40 '> Piscium - srl</h1>
          <div className='mx-auto w-52 flex justify-center py-5'>
            <Link
              to='/productos'
              className=' px-4 py-2 bg-sky-500 text-white font-semibold uppercase rounded-md shadow hover:bg-sky-800 duration-300'
            >Ver Listado</Link>
          </div>
          <div className=" flex  flex-col items-center absolute bottom-0 right-0 mr-6 ">
            <a href="https://wa.me/5492236895769">
              <img src='https://i.ibb.co/mN1XmjG/icon-wsp.png' alt='Icono WhatsApp' />
            </a>
          </div>
        </div>
      </div>

      <Tabla/>

    </>
  )
}

export default Index