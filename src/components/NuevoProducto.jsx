import { useNavigate, Form, useActionData } from 'react-router-dom'

import Formulario from './Formulario'
import Error from './Error'

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
}

function NuevoProducto() {

    const navigate = useNavigate()
    const errores = useActionData()
    console.log(errores)

    return (

        <>
            <h1 className='font-extrabold text-4xl text-blue-600 mt-36'>Nuevo Producto</h1>
            <p className='mt-3'>Llena todos los campos para registrar un nuevo producto</p>

            <div className='flex justify-end'>
                <button
                    onClick={() => navigate(-1)}
                    className='bg-blue-700 text-white uppercase px-3 py-1 font-bold'
                >Volver</button>
            </div>

            <div className='bg-white shadow rounded-md w-5/6 md:w-3/4 mx-auto mt-20 px-5 py-10 '>

                {
                    errores?.length && errores.map((error, i)=>(
                        <Error key={i}>{error}</Error>
                    ))
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