import {
    db
} from "./firebaseConfig";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";


const productosCollection = collection(db, 'productos')

export const obtenerProductos = async () => {
    const data = await getDocs(productosCollection)
    console.log(data.docs)
}