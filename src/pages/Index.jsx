import { useLoaderData } from 'react-router-dom'
import Producto from '../components/Producto';

export  function loader(){
  const productos = [
    {
        id: 1,
        name: 'Oregano Seleccion 1k',
        categoryId: 1,
        price: 410,
        priceQty: 350,
        category:{
          name: "condimentos",
          id: 1
        }
    },
    {
        id: 2,
        name: 'Rockelts Arcor 1k',
        categoryId: 2,
        price: 600,
        priceQty: 500,
        category:{
          name:"confiteria" ,
          id: 2
        }
    },
    {
        id: 3,
        name: 'Mix clasico 1k',
        categoryId: 3,
        price: 750,
        priceQty: 680,
        category:{
          name: "frutos-secos",
          id: 3
        }
    },
    {
        id: 4,
        name: 'Granola especial 1k',
        categoryId: 4,
        price: 400,
        priceQty: 360,
        category:{
          name: "granolas",
          id: 4
        }
    },
    {
        id: 5,
        name: "Mantecol 230gr",
        categoryId: 5,
        price: 134,
        priceQty: 120,
        category:{
          name: "chocolateria" ,
          id: 5
        }
    },
];
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