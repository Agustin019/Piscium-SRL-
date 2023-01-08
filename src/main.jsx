import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Index , { loader as indexLoader } from './pages/Index';
import Layout from './components/Layout';


const router = createBrowserRouter ([

  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: indexLoader
      },
      {
        path:'/nosotros',
        element: <h2 className='font-bold text-4xl text-gray-700'>Nosotros</h2>
      },
      {
        path :'/productos',
        element: <p className='font-bold text-6xl text-sky-700'> Aca se van a mostrar todos los productos</p>
      },
      {
        path:'/admin',
        element: <h2 className='font-bold text-4xl mt-24 text-center text-emerald-600'>Esta parte es solamente para administradores</h2>
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
