import React from 'react'

function Producto({ producto }) {

  const { name, price, priceQty, id } = producto
  return (
    <tr className='border-b'>
      <td className='p-6'>
        <p className='text-xl font-semibold text-center'> {name} </p>
      </td>
      <td className='p-6'>
        <p className='text-xl font-semibold text-center'> ${price} </p>
      </td>
      <td className='p-6'>
        <p className='text-xl font-semibold text-center'> ${priceQty} </p>
      </td>
     
    </tr>
  )
}

export default Producto