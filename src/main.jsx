import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Index from './pages/Index';
import Layout from './components/Layout';
import Admin from './components/Admin';
import IndexAdmin from './pages/IndexAdmin';
import NuevoProducto, { action as nuevoProductoAction } from './components/NuevoProducto';
import ErrorPage from './components/ErrorPage';
import EditarProducto ,{ loader as editarProductoLoader, action as editarProductoAction }from './components/EditarProducto';
import Nosotros from './pages/Nosotros';

const router = createBrowserRouter ([

  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'/nosotros',
        element: <Nosotros/>,
        errorElement:<ErrorPage/>
      },
      {
        path :'/productos',
        element: <p className='font-bold text-6xl text-sky-700'> Aca se van a mostrar todos los productos</p>,
        errorElement:<ErrorPage/>
      }
    ]
  },
  {
    path:'/admin',
    element: <Admin/>,
    children:[
      {
        index: true,
        element:<IndexAdmin/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'/admin/nuevoproducto',
        element: <NuevoProducto/>,
        action: nuevoProductoAction,
        errorElement:<ErrorPage/>
      },
      {
        path:'/admin/:productoId/editar',
        element: <EditarProducto/>,
        loader: editarProductoLoader,
        action: editarProductoAction,
        errorElement:<ErrorPage/>
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
