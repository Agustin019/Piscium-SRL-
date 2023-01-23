import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import Index from './pages/Index';
import Layout from './components/Layout';
import Admin from './components/Admin';
import IndexAdmin from './pages/IndexAdmin';
import NuevoProducto, { action as nuevoProductoAction } from './components/NuevoProducto';
import ErrorPage from './components/ErrorPage';
import EditarProducto, { loader as editarProductoLoader, action as editarProductoAction } from './components/EditarProducto';


const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        errorElement: <ErrorPage />
      },
      {
        path: '/nosotros',
        element: <h2 className='font-bold text-4xl text-gray-700'>Nosotros</h2>,
        errorElement: <ErrorPage />
      },
      {
        path: '/productos',
        element: <p className='font-bold text-6xl text-sky-700'> Aca se van a mostrar todos los productos</p>,
        errorElement: <ErrorPage />
      }
    ]
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <IndexAdmin />,
        errorElement: <ErrorPage />
      },
      {
        path: '/admin/nuevoproducto',
        element: <NuevoProducto />,
        action: nuevoProductoAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/admin/:productoId/editar',
        element: <EditarProducto />,
        loader: editarProductoLoader,
        action: editarProductoAction,
        errorElement: <ErrorPage />
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
      domain='dev-ce3txs61a38bu8pw.us.auth0.com'
      clientId='0A6IVz0TiysKsV0tymcwb3mT41CxSm4k' 
      redirectUri={window.location.origin}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
