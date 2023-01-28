import { useLocation, useNavigate} from 'react-router-dom'

function Producto({ producto, eliminarProducto }) {

  const location = useLocation()
  const navigate = useNavigate()

  const { nombre, precio, preciopor, precioxmayor, aclaracion, id } = producto


  return (
    <tr className='border-b'>
      <td className='p-4'>
        <p className='text-lg sm:text-xl font-semibold text-center'> {nombre} </p>
      </td>
      <td className='p-4 '>
        <div className='flex flex-col  justify-center'>
          <p className='text-lg sm:text-xl font-semibold text-center'> ${precio} </p>
          <p className='text-sm sm:text-lg font-semibold text-center'> ({preciopor}) </p>
        </div>
      </td>
      <td className='p-4 flex '>
        <div className='flex flex-col w-full justify-end'>
          <p className='text-lg sm:text-xl font-semibold text-center '> ${precioxmayor} </p>
          <p className='text-sm sm:text-lg font-semibold text-center'>({aclaracion})</p>
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

            <button
              type='submit'
              className='text-red-500 uppercase text-2xl'
              onClick={(e) => {
                if (confirm('¿Deseas eliminar este producto?')) {
                  e.preventDefault()
                  eliminarProducto(id)
                }
              }}
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