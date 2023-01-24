import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../data/firebaseConfig";
import { async } from '@firebase/util'
import { Link } from 'react-router-dom';

import Producto from '../components/Producto';




function Index() {

  const [productos, setProductos] = useState([])
  const [filtrarProductos, setFiltrarProductos] = useState('')

  const productosCollection = collection(db, 'productos')

  const obtenerProductos = async () => {
    const data = await getDocs(productosCollection)

    setProductos(
      data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    )
  }

  useEffect(() => {
    obtenerProductos()
  }, [])

  const filtrar = productos.filter(producto => (
    producto.categoria === filtrarProductos
  ))

  return (
    <>
      {/* Pantalla de inicio */}
      <div className=' bg-frutos  h-screen bg-cover bg-fixed'>
        <div className=' bg-black bg-opacity-50 h-screen '>
          <h1 className='font-bold text-4xl sm:text-6xl text-center text-white uppercase pt-56 sm:pt-40'> Piscium - srl</h1>
          <div className='mx-auto w-52 flex justify-center py-5'>
            <a
              href='#tabla'
              className=' px-4 py-2 bg-sky-500 text-white font-semibold uppercase rounded-md shadow'
            >Ver Listado</a>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 right-0 m-5'>
        <a href='https://wa.me/5492236895769'><img src="https://i.ibb.co/mN1XmjG/icon-wsp.png" alt="Imagen Icono de whatsApp" /></a>
      </div>

      <div id='tabla' className='mx-auto my-20 px-5 flex flex-col items-start sm:items-center gap-y-5'>
        <p className='text-2xl font-bold text-center'>Filtrar Productos</p>
        <div >
          <label
            className="text-gray-800 "
            htmlFor="categoria"
          >Seleccionar categoria:</label>
          <select
            name="categoria"
            id="categoria"
            className='w-full py-3'
            onChange={(e) => setFiltrarProductos(e.target.value)}
          >
            <option value="">Todas las Categorias</option>
            <option value="Condimentos">Condimentos</option>
            <option value="Frutos Secos">Frutos secos y Frutas secas</option>
            <option value="granolas">Granolas</option>
            <option value="Cereales">Cereales</option>
            <option value="Almohaditas">Almohaditas</option>
            <option value="Semillas">Semillas</option>
            <option value="Avenas">Avenas</option>
            <option value="Harinas y Feculas">Harinas y Feculas</option>
            <option value="Reposteria y chocolateria">Reposteria y chocolateria</option>
            <option value="Budines">Budines</option>
            <option value="Galletitas y Tostadas">Galletitas y Tostadas (Risky)</option>
            <option value="Jugos de Arandanos">Jugos de Arandanos</option>
            <option value="Copetin">Copetin</option>
            <option value="Bebidas Alcoholicas">Bebidas </option>
          </select>
        </div>

        <p className='text-2xl font-bold '>
          {filtrarProductos}
        </p>
      </div>
      <table  className='w-full bg-white shadow mt-5 table-auto'>
        <thead className='bg-blue-800 text-white h-10'>
          <tr className=''>
            <th className=''>Nombre</th>
            <th className=''>Precio</th>
            <th className=''>X Mayor</th>
          </tr>
        </thead>
        <tbody>
          {
            filtrarProductos === ''
              ?
              (productos.map(producto => (
                <Producto
                  key={producto.id}
                  producto={producto}
                />
              )))
              : (filtrar.map(producto => (
                <Producto
                  key={producto.id}
                  producto={producto}
                />
              )))
          }
        </tbody>
      </table>

    </>
  )
}

export default Index