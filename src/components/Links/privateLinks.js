import React from 'react'
import {
    NavLink as Link 
} from 'react-router-dom'
import privateRoutes from '../Routes/privateRoutes';

export default(props) => {
  
  console.log(props)
  return privateRoutes.map(({path,component}, i) => (
    <Link key={i} to={path} {...props} className='nav-link mr-auto'> {component.name.toUpperCase()} </Link>
  ))
}
