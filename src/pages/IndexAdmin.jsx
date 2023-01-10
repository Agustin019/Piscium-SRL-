import { useLoaderData, Link } from 'react-router-dom'

import { obtenerProductos } from '../data/Productos';
import Producto from '../components/Producto';

export async function loader() {
    const productos = obtenerProductos()
    return productos
}

function IndexAdmin() {
    // Acceso a lo que retorna el loader
    const productos = useLoaderData()


    return (
        <>
            <h1 className='mt-40 font-extrabold text-4xl text-center uppercase'> Administrador</h1>
            <div className='mx-auto  flex justify-center py-5'>
                <Link className='text-sky-500  text-2xl ' to={'/admin/nuevoproducto'}>
                 <span className='text-2xl text-sky-500'>
                    <ion-icon  name="create-outline"></ion-icon>
                 </span>
                    Nuevo Producto
                </Link>
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
                            {productos.map(producto => (
                                <Producto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))}
                        </tbody>
                    </table>
                    ) : (
                        <h2 className=' font-bold text-xl text-center'> No hay productos en esta categoria</h2>
                    )}
        </>
    )
}

export default IndexAdmin