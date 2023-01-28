import React from 'react'
import categorias from '../utils/categorias';

function Formulario({ producto }) {
    // Para reutilizar el formulario se usa un "optional chaining" para que en caso de que "producto" tenga algo, pueda acceder a su propiedad
    return (


        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Producto"
                    name="nombre"
                    defaultValue={producto?.nombre}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="price"
                >Precio:</label>
                <input
                    id="precio"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Precio del Producto"
                    name="precio"
                    defaultValue={producto?.precio}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="preciopor"
                >Precio Por:</label>
               <select 
                name="preciopor" 
                id="preciopor"
                className='w-full py-3 text-center'
                defaultValue={producto?.preciopor}
                >
                    <option value="">-- Seleccione una opcion --</option>
                    <option value="Unidad">Unidad</option>
                    <option value="Kg">Kg</option>
               </select>
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="precioxmayor"
                >Precio por mayor:</label>
                <input
                    id="precioxmayor"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Precio por Mayor del Producto"
                    name="precioxmayor"
                    defaultValue={producto?.precioxmayor}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="aclaracion"
                >Precio info:</label>
                <input
                    id="aclaracion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Informacion del Precio por Mayor"
                    name="aclaracion"
                    defaultValue={producto?.aclaracion}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800 "
                    htmlFor="categoria"
                >Seleccionar categoria:</label>
                <select
                    name="categoria"
                    id="categoria"
                    className='w-full py-3 text-center'
                    defaultValue={producto?.categoria}
                >
                    <option value="">-- Seleccione la Categoria --</option>
                    {
                        categorias.map(categoria => (
                            <option key={categoria.nombre} value={categoria.nombre}>{categoria.nombre}</option>
                        ))
                    }
                </select>

            </div>

        </>
    )
}

export default Formulario