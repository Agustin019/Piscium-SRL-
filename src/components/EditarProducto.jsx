import { Form, useActionData, useNavigate, useLoaderData, redirect } from 'react-router-dom'
import { getDoc, updateDoc, doc  } from 'firebase/firestore'
import { db } from '../data/firebaseconfig'

import Formulario from './Formulario'
import Error from './Error'

export async function action({ request, params }) {
    // Accedemos a los valores de los campos del formulario
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)

    // Validacion
    const errores = []
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }

    // Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores
    }

    // Actualizar producto en firebase
    const productos = doc(db, 'productos', params.productoId)
    const dataCampos = {
        nombre: datos.nombre,
        precio: datos.precio,
        precioxmayor: datos.precioxmayor,
        aclaracion: datos.aclaracion,
        categoria: datos.categoria
    }
    await updateDoc(productos, dataCampos)
    return redirect('/admin')
}


export async function loader({ params }) {
    const obtenerProducto = doc(db, 'productos', params.productoId)
    const producto = await getDoc(obtenerProducto)

    // Mensaje de error en caso de no encontrar el producto
    if (Object.values(producto).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No hay resultados'
        })
    }
    return producto.data()
}

function EditarProducto() {

    const producto = useLoaderData()
    const errores = useActionData()
    const navigate = useNavigate()

    return (
        <>
            <div className='sm:w-3/4  flex justify-around sm:justify-between mx-auto'>
               <div className=' mt-44 space-y-6'>
                 <h1 className='font-extrabold text-3xl text-blue-600'>Editar Producto</h1>
                 <p className=''>A continuacion podras editar el producto.</p>
               </div>
                
                <div className='mt-32'>
                    <button
                        onClick={() => navigate(-1)}
                        className='bg-blue-700 text-white uppercase px-3 py-1 font-bold'
                    >Volver</button>
                </div>
            </div>

            <div className='bg-white shadow rounded-md w-5/6 md:w-3/4 mx-auto mt-20 px-5 py-10 '>

                {
                  errores?.length && <Error>{errores}</Error>
                }
                <Form
                    method='post'
                >
                    <Formulario
                        producto={producto}
                    />
                    <input
                        type="submit"
                        className='mt-5 w-full bg-blue-800 uppercase font-bold text-white text-lg py-2'
                        value="Guardar Cambios"
                    />
                </Form>
            </div>

        </>
    )
}

export default EditarProducto