import { useLoaderData, Link } from 'react-router-dom'
import { useState } from 'react';

import { obtenerProductos } from '../data/Productos';
import Producto from '../components/Producto';

export async function loader() {
    const productos = obtenerProductos()
    return productos
}

function IndexAdmin() {

    const productos = useLoaderData()
    const [filtrarProductos, setFiltrarProductos] = useState('')

    const filtrar = productos.filter(producto => (
        producto.category === filtrarProductos
    ))


    return (
        <>
            <h1 className='mt-40 font-extrabold text-4xl text-center uppercase'> Administrador</h1>
            <div className='mx-auto  flex justify-center py-5'>
                <Link className='text-sky-500  text-2xl ' to={'/admin/nuevoproducto'}>
                    <span className='text-2xl text-sky-500'>
                        <ion-icon name="create-outline"></ion-icon>
                    </span>
                    Nuevo Producto
                </Link>
            </div>

            <div className='mx-auto my-20 px-5 flex flex-col items-start sm:items-center gap-y-5'>
                <p className='text-2xl font-bold text-center'>Filtrar Productos</p>
                <div>
                    <label
                        className="text-gray-800 "
                        htmlFor="category"
                    >Seleccionar categoria:</label>
                    <select
                        name="category"
                        id="category"
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
                        <option value="Bebidas Alcoholicas">Bebidas Alcoholicas</option>
                    </select>
                </div>

                <p className='text-2xl font-bold '>
                    {filtrarProductos}
                </p>
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

export default IndexAdmin