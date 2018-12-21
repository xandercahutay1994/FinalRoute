import React from 'react'
import PublicLinks from './publicLinks'
import PrivateLinks from './privateLinks'

export default( props)=> {
    const { islogin } = props

    return (
        islogin ?
            <PrivateLinks {...props}/>
        :
            <PublicLinks/>
    )
}
