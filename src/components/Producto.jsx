import { useLocation, useNavigate, Form, redirect } from 'react-router-dom'
import { eliminarProducto } from '../data/Productos'

export async function action({params}){
  eliminarProducto(params.productoId)
  return redirect('/admin')
}

function Producto({ producto }) {

  const location = useLocation()
  const navigate = useNavigate()

  const { name, price, priceQty, qtyDesc, id } = producto


  return (
    <tr className='border-b'>
      <td className='p-6'>
        <p className='text-lg sm:text-xl font-semibold text-center'> {name} </p>
      </td>
      <td className='p-6'>
        <p className='text-lg sm:text-xl font-semibold text-center'> ${price} </p>
      </td>
      <td className='p-6 flex gap-x-3'>
        <div className='flex flex-col'>
          <p className='text-lg sm:text-xl font-semibold text-center '> ${priceQty} </p>
          <p className='text-sm sm:text-lg font-semibold text-center'>({qtyDesc})</p>
        </div>
        {
          // Solamente se muestra en el panel de administracion
          location.pathname === '/admin' &&

          <div className='flex flex-col'>
            <button
              type='button'
              className='text-sky-500 uppercase text-2xl'
              onClick={() => navigate(`/admin/${id}/editar`)}
            >
              <ion-icon name="pencil-outline"></ion-icon>
            </button>
           <Form
            method='post'
            action={`/admin/${id}/eliminar`}
            onSubmit={ (e) => {
              if(!confirm('¿Deseas eliminar este producto?')){
                e.preventDefault()
              }
            }}
           >
             <button
               type='submit'
               className='text-red-500 uppercase text-2xl'
             >
               <ion-icon name="trash-outline"></ion-icon>
             </button>
           </Form>
        </div>
        }
      </td>

    </tr>
  )
}

export default Producto