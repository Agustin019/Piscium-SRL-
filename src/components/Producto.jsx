import { useLocation } from 'react-router-dom'

function Producto({ producto }) {

  const location = useLocation()

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
            >
              <ion-icon name="pencil-outline"></ion-icon>
            </button>
            <button
              type='button'
              className='text-red-500 uppercase text-2xl'
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
        </div>
        }
      </td>

    </tr>
  )
}

export default Producto