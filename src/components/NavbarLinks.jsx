import { Link, useLocation, useParams } from 'react-router-dom'

function NavbarLinks() {
    const location = useLocation()
    const params = useParams()
    return (
        <>

            { // Solamente se muestran en el panel de administracion
                location.pathname === '/admin' ||
                    location.pathname === '/admin/nuevoproducto' ||
                    location.pathname == `/admin/${params.productoId}/editar`
                    ? (
                        <>
                            <li className='li-navbar' >
                                <Link
                                    to='/'
                                    className={`${location.pathname === '/' ? 'nav-activo' : 'nav'} `}
                                    >Inicio</Link>
                            </li>

                            <li className='li-navbar' >
                                <Link
                                    to='/admin'
                                    className={`${location.pathname === '/admin' ? 'nav-activo' : 'nav'} `}
                                    >Administrador</Link>
                            </li>

                            <li className='li-navbar' >
                                <Link
                                    to='/admin/nuevoproducto'
                                    className={`${location.pathname === '/admin/nuevoproducto' ? 'nav-activo' : 'nav'} `}
                                    >Nuevo Producto</Link>
                            </li>
                        </>
                    )
                    : (
                        <>
                            <li className='li-navbar' >
                                <Link
                                    to='/'
                                    className={`${location.pathname === '/' ? 'nav-activo' : 'nav'} `}
                                    >Inicio</Link>
                            </li>
                            <li className='li-navbar' >
                                <Link
                                    to='/productos'
                                    className={`${location.pathname === '/productos' ? 'nav-activo' : 'nav'} `}
                                    >Ver Productos</Link>
                            </li>
                            <li className='li-navbar' >
                                <Link
                                    to='/nosotros'
                                    className={`${location.pathname === '/nosotros' ? 'nav-activo' : 'nav'} `}
                                    >Nosotros</Link>
                            </li>
                        </>
                    )

            }
        </>
    )
}

export default NavbarLinks