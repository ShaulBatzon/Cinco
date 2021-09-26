import { HomePage } from './pages/HomePage.jsx'
import { Explore } from './pages/Explore.jsx'
import { LoginSignUp } from './cmps/LoginSignUp'
import { BecomeASeller } from './pages/BecomeASeller.jsx'
import { GigPage } from './pages/GigPage.jsx'
// Routes accesible from the main navigation (in AppHeader)
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
        path: '/join',
        component: LoginSignUp,
        label: 'join'
    },
    {
        path: '/gig',
        component: GigPage,
        label: 'Gig page'
    }
]

export default routes;