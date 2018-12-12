import React from 'react'
import publicRoutes from './publicRoutes'
import privateRoutes from './privateRoutes'
import {
    Route
  } from 'react-router-dom'


const Routes = ({isLogin}) => {
    
    return (
        isLogin ?
            privateRoutes.map((route, i) => (
                <Route key={i} exact {...route} />
            ))
        :
            publicRoutes.map((route, i) => (
                <Route key={i} exact {...route} />
            ))

    )
}

export default Routes
