import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query, deleteDoc, doc } from 'firebase/firestore'
import { db } from "../data/firebaseConfig";
import Producto from '../components/Producto';
import categorias from '../utils/categorias';

function Tabla() {
  const [productos, setProductos] = useState([])
  const [filtrarProductos, setFiltrarProductos] = useState('')

  const q = query(collection(db, "productos"), orderBy('nombre'))

  const obtenerProductos = async () => {
    const data = await getDocs(q)

    setProductos(
      data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    )
  }

  useEffect(() => {
    obtenerProductos()
  }, [])

  const eliminarProducto = async (id) => {
    const productDoc = doc(db, 'productos', id)
    await deleteDoc(productDoc)
    obtenerProductos()
  }

  const filtrar = productos.filter(producto => (
    producto.categoria === filtrarProductos
  ))
  return (
    <>
      <div  className='bg-white rounded py-4 mx-auto my-20 px-5 flex flex-col items-start sm:w-1/4 sm:items-center gap-y-5'>
        <p className='text-2xl font-bold text-center uppercase'>Filtrar Productos</p>
        <div >
          <label
            className="text-gray-800 "
            htmlFor="categoria"
          >Seleccionar categoria:</label>
          <select
            name="categoria"
            id="categoria"
            className='w-full py-3 text-center'
            onChange={(e) => setFiltrarProductos(e.target.value)}
          >
            <option value="">Todas las Categorias</option>
            {
              categorias.map(categoria => (
                <option key={categoria.nombre} value={categoria.nombre}>{categoria.nombre}</option>
              ))
            }
          </select>
        </div>

        {
            filtrarProductos &&
          <p className='text-2xl font-bold '>
            Filtrar por: {filtrarProductos}
          </p>
        }
      </div>
      <table className='w-full bg-white shadow mt-5 table-auto'>
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
                  eliminarProducto={eliminarProducto}
                />
              )))
              : (filtrar.map(producto => (
                <Producto
                  key={producto.id}
                  producto={producto}
                  eliminarProducto={eliminarProducto}
                />
              )))
          }
        </tbody>
      </table>
    </>
  )
}

export default Tabla