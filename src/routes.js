import { HomePage } from './pages/HomePage.jsx'
import { Explore } from './pages/Explore.jsx'
import { Login } from './cmps/Login.jsx'
import { BecomeASeller } from './pages/BecomeASeller.jsx'
import { GigPage } from './pages/GigPage.jsx'
import {userService} from './services/user.service'
import {SignUp} from './cmps/SignUp.jsx'
import { SellerProfile } from './pages/sellerProfile/SellerProfile.jsx'
import { Orders } from './pages/sellerProfile/Orders.jsx'
// Routes accesible from the main navigation (in AppHeader)

const username = userService.login().username
const routes = [
    {
        path: '/',
        component: HomePage,
        label: 'Home',
    },
    {
        path: '/explore',
        component: Explore,
        label: 'Explore'
    },
    {
        path: '/seller',
        component: BecomeASeller,
        label: 'Become a Seller'
    },
    {
        path: username ? '/userPage':'/join', 
        component:  username ? HomePage : Login,
        label: username ? `Hello ${username}` : 'join'
    },
    // {
    //     path: (username && seller_mode) ? '/sellerPage':'/become_a_seller', 
    //     component:  (username && seller_mode) ? SellerPage : BecomeASeller,
    //     // label: (username && seller_mode) ? `Hello ${username}` : 'join'
    // },
    {
        path: '/sellerProfile/',
        component: SellerProfile,
    },
    {
        path: '/orders/',
        component: Orders,
    },
    {
        path: '/gig/',
        component: GigPage,
    },
    {
        path: '/signup',
        component: SignUp,
    },
    


]

export default routes;