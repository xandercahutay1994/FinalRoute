import {
    Home,
    About,
    Login,
    Seller,
    Buyer
} from '../../containers'

const publicRoutes = [
    {
        component: Home,
        path: '/'
    },
    {
        component: About,
        path: '/about'
    },
    {
        component: Seller,
        path: '/sellerRegister'
    },
    {
        component: Buyer,
        path: '/buyerRegister'
    },
    {
        component: Login,
        path: '/login'
    }
]

export default publicRoutes