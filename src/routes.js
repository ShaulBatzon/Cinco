import { HomePage } from './pages/HomePage.jsx'
import { Explore } from './pages/Explore.jsx'
import { Login } from './cmps/Login.jsx'
import { BecomeASeller } from './pages/BecomeASeller.jsx'
import { GigPage } from './pages/GigPage.jsx'
import {userService} from './services/user.service'
// Routes accesible from the main navigation (in AppHeader)

const username = userService.login().username
console.log(username);

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
        label: username ? ` Hello ${username}` : 'join'
    },
    {
        path: '/gig/',
        component: GigPage,
    }
    


]

export default routes;