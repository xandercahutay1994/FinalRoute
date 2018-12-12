import React from 'react'
import {
    NavLink as Link 
} from 'react-router-dom'
import publicRoutes from '../Routes/publicRoutes';

export default() => (
  publicRoutes.map(({path,component}, i) => {
    const componentName = component.name === 'Connect' ? 
                          component.WrappedComponent.name : component.name
    return <Link key={i} to={path} className='nav-link mr-auto'> { componentName.toUpperCase() } </Link>
  })
)