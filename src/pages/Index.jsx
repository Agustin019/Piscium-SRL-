import Tabla from "../components/tabla"
import { Link } from "react-router-dom"
import 'animate.css'
function Index() {

 

  return (
    <>
      {/* Pantalla de inicio */}
      <div className=' bg-frutos  h-screen bg-cover '>
        <div className=' bg-black bg-opacity-70 h-screen '>
          <h1 className='font-bold text-4xl sm:text-6xl text-center text-white uppercase pt-56 sm:pt-40 animate__bounceInDown'> Piscium - srl</h1>
          <div className='mx-auto w-52 flex justify-center py-5'>
            <Link
              to='/productos'
              className=' px-4 py-2 bg-sky-500 text-white font-semibold uppercase rounded-md shadow hover:bg-sky-800 duration-300'
            >Ver Listado</Link>
          </div>
        </div>
      </div>

      <Tabla/>

    </>
  )
}

export default Index