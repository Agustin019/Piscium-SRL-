import { Link } from 'react-router-dom'
import Tabla from '../components/tabla';


function IndexAdmin() {

    return (
        <>
            <h1 className='mt-40 font-extrabold text-4xl text-center uppercase'> Administrador</h1>
            <div className='mx-auto  flex justify-center py-5'>
                <Link className='text-sky-500  text-2xl ' to={'/admin/nuevoproducto'}>
                    <span className='text-2xl text-sky-500'>
                        <ion-icon name="create-outline"></ion-icon>
                    </span>
                    Nuevo Producto
                </Link>
            </div>

           <Tabla/>
        </>
    )
}

export default IndexAdmin