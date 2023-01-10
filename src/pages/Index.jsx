import { useLoaderData } from 'react-router-dom'

import { obtenerProductos } from '../data/Productos'
import Producto from '../components/Producto';

export  function loader(){
  const productos = obtenerProductos()
  return productos
}

function Index() {
  const productos = useLoaderData()
  console.log(loader)

  return (
    <>
      <h1 className='mt-40 font-extrabold text-4xl text-center uppercase'> Piscium - srl</h1>
      <div className='mx-auto w-52 flex justify-center py-5'>
          <input 
            type="button" 
            value="Ver productos"
            className=' px-4 py-2 bg-sky-500 text-white font-semibold uppercase rounded-md shadow'
             />
      </div>

          {
            productos.length ?
            (<table className='w-full bg-white shadow mt-5 table-auto'>
              <thead className='bg-blue-800 text-white h-10'>
                  <tr className=''>
                    <th className=''>Nombre</th>
                    <th className=''>Precio</th>
                    <th className=''>X Mayor</th>
                  </tr>
              </thead>
              <tbody>
                {productos.map( producto =>(
                  <Producto 
                    key={producto.id} 
                    producto={producto}
                  />
                ))}
              </tbody>
          </table>
          ):(
          <h2 className=' font-bold text-xl text-center'> No hay productos en esta categoria</h2>
          )}

    </>
  )
}

export default Index