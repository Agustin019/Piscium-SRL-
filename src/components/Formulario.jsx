import React from 'react'

function Formulario({producto}) {
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
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="precio"
                >Precio:</label>
                <input
                    id="precio"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Precio del Producto"
                    name="precio"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="precioPorMayor"
                >Precio por mayor:</label>
                <input
                    id="precioPorMayor"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Precio por Mayor del Producto"
                    name="precioPorMayor"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="precioPorMayorInfo"
                >Precio info:</label>
                <input
                    id="precioPorMayorInfo"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Informacion del Precio por Mayor"
                    name="precioPorMayorInfo"
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
                    className='w-full py-3'
                >
                    <option value="">Seleccione la Categoria</option>
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

        </>
    )
}

export default Formulario