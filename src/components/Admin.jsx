import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'

function Admin() {
  return (
   <>
    <Navbar/>
     <Outlet/>
   </>
  )
}

export default Admin