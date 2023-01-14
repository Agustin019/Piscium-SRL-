import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { collection, getDocs, getDoc, deleteDoc } from 'firebase/firestore'
import { async } from '@firebase/util'

import { db } from "./firebaseconfig";

function Show() {

  const [productos, setProductos] = useState([])

  const productosCollection = collection(db, 'productos')

  const obtenerProductos = async () => {
    const data = await getDocs(productosCollection)

    setProductos(
      data.docs.map(doc => ({...doc.data(), id:doc.id}))
    )
    console.log(productos)
  }

  // Eliminar producto 

  const eliminarProducto = async (id) => {
    const productDoc = doc(db, 'productos',id)
    await deleteDoc(productDoc)
    obtenerProductos()
  }

  useEffect(() => {
    obtenerProductos()
  }, [])
  return (
    <h2 className="text-xl font-bold text-emerald-400">show</h2>
  )
}

export default Show