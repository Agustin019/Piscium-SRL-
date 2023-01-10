import { useRouteError } from 'react-router-dom'

function ErrorPage() {

  const error = useRouteError()
  return (
    <div className='space-y-7'>
      <h1 className='text-center text-4xl font-bold mt-44 text-blue-700 uppercase'> Piscium - srl</h1>
      <p className='text-center text-2xl font-bold'>Error :(</p>
      <p className='text-center'>{error.message || error.statusText}</p>
    </div>
  )
}

export default ErrorPage