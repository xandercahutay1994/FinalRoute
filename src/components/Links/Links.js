import React from 'react'
import PublicLinks from './publicLinks'
import PrivateLinks from './privateLinks'

export default({isLogin})=> {

    return (
        isLogin ?
            <PrivateLinks/>
        :
            <PublicLinks/>
    )
}
