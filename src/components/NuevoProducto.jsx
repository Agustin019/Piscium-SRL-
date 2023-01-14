import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'

import Formulario from './Formulario'
import Error from './Error'
import { agregarProducto } from '../data/Productos'

export async function action({request}){

    // Accedemos a los valores de los campos del formulario
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)

    // Validacion
    const errores = []
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos son obligatorios')
    }

    // Retornar datos si hay errores
    if(Object.keys(errores).length){
        return errores
    }
    await agregarProducto(datos)
    return redirect('/admin')
}

function NuevoProducto() {

    const navigate = useNavigate()
    const errores = useActionData()

    return (

        <>
            <div className='sm:w-3/4 w-5/6 flex justify-around sm:justify-between mx-auto'>
               <div className=' mt-44 space-y-6'>
                 <h1 className='font-extrabold text-3xl text-blue-600'>Nuevo Producto</h1>
                 <p className=''>Llena todos los campos para agregar un producto.</p>
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
                    <Formulario />
                    <input
                        type="submit"
                        className='mt-5 w-full bg-blue-800 uppercase font-bold text-white text-lg py-2'
                        value="Agregar Producto"
                    />
                </Form>
            </div>

        </>
    )
}

export default NuevoProducto