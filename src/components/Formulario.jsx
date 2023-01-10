import React from 'react'

function Formulario({producto}) {

    // Para reutilizar el formulario se usa un "optional chaining" para que en caso de que exista "producto", pueda acceder a su propiedad
    return (


        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Nombre:</label>
                <input
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Producto"
                    name="name"
                    defaultValue={producto?.name}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="price"
                >Precio:</label>
                <input
                    id="price"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Precio del Producto"
                    name="price"
                    defaultValue={producto?.price}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="priceQty"
                >Precio por mayor:</label>
                <input
                    id="priceQty"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Precio por Mayor del Producto"
                    name="priceQty"
                    defaultValue={producto?.priceQty}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="qtyDesc"
                >Precio info:</label>
                <input
                    id="qtyDesc"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Informacion del Precio por Mayor"
                    name="qtyDesc"
                    defaultValue={producto?.qtyDesc}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800 "
                    htmlFor="category"
                >Seleccionar categoria:</label>
                <select
                    name="category"
                    id="category"
                    className='w-full py-3'
                    defaultValue={producto?.category}
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