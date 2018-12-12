import { Seller } from '../../containers/ProtectedPages'
import Notification from '../Layouts/Notification'
import Logout from '../Layouts/Logout'

const privateRoutes = [
    {
        component: Seller,
        path: '/seller'
    },
    {
        component: Notification,
        path: '/notification'
    },
    {   
        component: Logout,
        path: '/logout'
    },
]

export default privateRoutes